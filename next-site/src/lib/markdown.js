import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const contentDirectory = path.join(process.cwd(), '../content')

export function getAllContent(type) {
    const dir = path.join(contentDirectory, type)
    if (!fs.existsSync(dir)) return []

    const fileNames = fs.readdirSync(dir)
    const allContent = fileNames
        .filter(fileName => fileName.endsWith('.md'))
        .map(fileName => {
            const slug = fileName.replace(/\.md$/, '')
            const fullPath = path.join(dir, fileName)
            const fileContents = fs.readFileSync(fullPath, 'utf8')
            const matterResult = matter(fileContents)

            return {
                slug,
                ...matterResult.data,
            }
        })
    
    // Sort by date if available
    return allContent.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}

export async function getContentBySlug(type, slug) {
    const fullPath = path.join(contentDirectory, type, `${slug}.md`)
    if (!fs.existsSync(fullPath)) return null

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()

    return {
        slug,
        contentHtml,
        ...matterResult.data,
    }
}
