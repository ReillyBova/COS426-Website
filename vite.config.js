import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { checker } from 'vite-plugin-checker';
import svgLoader from 'vite-svg-loader';
import { COURSE_CONFIG } from './src/COURSE_CONFIG';
import { resolve } from 'path';
import mdPlugin, { Mode } from 'vite-plugin-markdown';
import viteRawLoader from 'vite-raw-plugin';

/** https://vitejs.dev/config/ */
export default defineConfig({
    plugins: [
        react(),
        checker({
            typescript: true,
        }),
        svgLoader(),
        mdPlugin({ mode: [Mode.MARKDOWN] }),
        viteRawLoader({
            fileRegex: /\.(glsl|vs|fs|vert|frag)$/,
        }),
    ],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                404: resolve(__dirname, '404/index.html'),
                assignments: resolve(__dirname, 'assignments/index.html'),
                exercises: resolve(__dirname, 'exercises/index.html'),
                gallery: resolve(__dirname, 'gallery/index.html'),
                links: resolve(__dirname, 'links/index.html'),
                materials: resolve(__dirname, 'materials/index.html'),
            },
        },
    },
    base: COURSE_CONFIG.pathPrefix,
});
