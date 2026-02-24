import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

config({ path: resolve(__dirname, '../../.env') });

const required = ['PORT','URL_MONGO','URL_POSTGRES','MYSQL_URL'];

for (const key of required) {
    if (!process.env[key]) {
        throw new Error(`Missing required environment variable: ${key}`);
    }
}

export const env ={
    port: process.env.PORT || 3000,
    url_mongo: process.env.URL_MONGO,
    url_postgres: process.env.URL_POSTGRES,
    mysql_url: process.env.MYSQL_URL
}
