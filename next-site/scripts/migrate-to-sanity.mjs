import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { createClient } from '@sanity/client'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'

dotenv.config({ path: '.env.local' })

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET || 'production',
    token: process.env.SANITY_API_WRITE_TOKEN,
    useCdn: false,
    apiVersion: '2023-05-03',
})

const contentDir = path.join(__dirname, '../../content')

async function uploadImage(imagePath) {
    if (!imagePath) return null
    if (imagePath.startsWith('http')) return null // Skip remote images for now

    // Support both /img/ and absolute-like paths in markdown
    const fullPath = imagePath.startsWith('/') 
        ? path.join(__dirname, '../public', imagePath)
        : path.join(__dirname, '../public/img', imagePath)

    if (!fs.existsSync(fullPath)) {
        console.warn(`Image not found: ${fullPath}`)
        return null
    }

    try {
        const asset = await client.assets.upload('image', fs.createReadStream(fullPath), {
            filename: path.basename(fullPath),
        })
        return {
            _type: 'image',
            asset: {
                _type: 'reference',
                _ref: asset._id,
            },
        }
    } catch (error) {
        console.error(`Failed to upload image ${fullPath}:`, error.message)
        return null
    }
}

function convertMarkdownToPortableText(markdown) {
    // Very simple conversion for now - just one block
    // In a real scenario, you'd use a library like @sanity/block-tools
    if (!markdown) return []
    return [
        {
            _type: 'block',
            children: [
                {
                    _type: 'span',
                    text: markdown,
                },
            ],
            markDefs: [],
            style: 'normal',
        },
    ]
}

async function migrateType(type, schemaType, mapper) {
    const dir = path.join(contentDir, type)
    if (!fs.existsSync(dir)) return

    console.log(`Migrating ${type}...`)
    
    // Recursive read if needed (for news/some-slug/index.md)
    const getFiles = (dirPath) => {
        let files = []
        const items = fs.readdirSync(dirPath)
        for (const item of items) {
            const fullPath = path.join(dirPath, item)
            if (fs.statSync(fullPath).isDirectory()) {
                files = [...files, ...getFiles(fullPath)]
            } else if (item.endsWith('.md')) {
                files.push(fullPath)
            }
        }
        return files
    }

    const files = getFiles(dir)

    for (const file of files) {
        const fileContents = fs.readFileSync(file, 'utf8')
        const { data, content } = matter(fileContents)
        const doc = await mapper(data, content, file)
        
        if (doc) {
            try {
                await client.createOrReplace({
                    _type: schemaType,
                    _id: `migrated-${type}-${path.basename(file, '.md')}`.replace(/[^a-zA-Z0-9-]/g, '-'),
                    ...doc,
                })
                console.log(`Migrated: ${file}`)
            } catch (error) {
                console.error(`Failed to migrate ${file}:`, error.message)
            }
        }
    }
}

async function runMigration() {
    if (!process.env.SANITY_API_WRITE_TOKEN) {
        console.error('SANITY_API_WRITE_TOKEN is missing in .env.local')
        return
    }

    // Music
    await migrateType('music', 'music', async (data) => ({
        title: data.title,
        date: data.date,
        image: await uploadImage(data.image),
        spotify: data.spotify,
    }))

    // News
    await migrateType('news', 'news', async (data, content) => ({
        title: data.title,
        date: data.date,
        image: await uploadImage(data.image),
        url: data.url,
        blurb: data.blurb,
        content: convertMarkdownToPortableText(content),
    }))

    // Bio
    await migrateType('bio', 'bio', async (data, content) => ({
        title: data.title,
        content: convertMarkdownToPortableText(content),
    }))

    // Links
    await migrateType('links', 'link', async (data) => ({
        name: data.name,
        url: data.url,
        type: data.type,
    }))
    
    // Handle nested links (music/social)
    await migrateType('links/music', 'link', async (data) => ({
        name: data.name,
        url: data.url,
        type: 'Music',
    }))
    await migrateType('links/social', 'link', async (data) => ({
        name: data.name,
        url: data.url,
        type: 'Social',
    }))

    // Video
    await migrateType('video', 'video', async (data) => ({
        name: data.name,
        videoId: data.videoId,
    }))
}

runMigration()
