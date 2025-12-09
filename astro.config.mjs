import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    site: 'https://alexis-laris.github.io',
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                '@': '/src',
                '@assets': '/src/assets',
                '@components': '/src/components',
            }
        }
    }
});
