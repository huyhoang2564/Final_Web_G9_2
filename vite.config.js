import { defineConfig } from 'vite';

export default defineConfig({
    base: process.env.VITE_BASE_PATH || '/',
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                blog: 'src/html/blog.html',
                course: 'src/html/course.html',
                intro: 'src/html/intro.html',
                news: 'src/html/news.html',
                service: 'src/html/service.html',
            }
        }
    }
});