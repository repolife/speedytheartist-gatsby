import { getAllNews } from './src/lib/sanity-service.js';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

async function test() {
    try {
        const news = await getAllNews();
        console.log('NEWS_COUNT:' + news.length);
        console.log('NEWS_DATA:' + JSON.stringify(news));
    } catch (e) {
        console.error('ERROR:' + e.message);
    }
}
test();
