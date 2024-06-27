import { defineConfig } from 'vite';

export default defineConfig({
    base: process.env.VITE_BASE_PATH || '/',
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                blog: 'blog.html',
                course: 'course.html',
                intro: 'intro.html',
                news: 'news.html',
                service: 'service.html',
            }
        }
    }
});