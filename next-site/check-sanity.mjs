import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    useCdn: false,
    apiVersion: '2023-05-03',
});

async function checkData() {
    try {
        const news = await client.fetch('*[_type == "news"]');
        console.log('NEWS_COUNT:' + news.length);
        if (news.length > 0) {
            console.log('FIRST_NEWS_TITLE:' + news[0].title);
        }
    } catch (e) {
        console.error('ERROR:' + e.message);
    }
}
checkData();
