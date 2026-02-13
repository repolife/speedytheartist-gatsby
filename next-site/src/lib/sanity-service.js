import { client } from './sanity'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

export function urlFor(source) {
    return builder.image(source)
}

export async function getAllNews() {
    return await client.fetch(`*[_type == "news"] | order(date desc) {
        _id,
        title,
        date,
        "image": image.asset->url,
        url,
        blurb,
        content
    }`)
}

export async function getNewsBySlug(slug) {
    // Note: In Sanity, we might want to add a slug field, 
    // but for now the migration script used the filename as _id
    return await client.fetch(`*[_type == "news" && (_id == $slug || _id == "migrated-news-"+$slug)][0] {
        _id,
        title,
        date,
        "image": image.asset->url,
        url,
        blurb,
        content
    }`, { slug })
}

export async function getAllMusic() {
    return await client.fetch(`*[_type == "music"] | order(date desc) {
        _id,
        title,
        date,
        "image": image.asset->url,
        spotify
    }`)
}

export async function getBio() {
    return await client.fetch(`*[_type == "bio"][0] {
        title,
        content
    }`)
}

export async function getLinks(type) {
    let query = `*[_type == "link"]`
    if (type) {
        query = `*[_type == "link" && type == $type]`
    }
    return await client.fetch(query, { type })
}

export async function getVideos() {
    return await client.fetch(`*[_type == "video"]`)
}
