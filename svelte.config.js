import adapter from '@sveltejs/adapter-static';
// import preprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/kit/vite';

const dev = process.argv.includes('dev');

export default {
    preprocess: [
        // preprocess(),
        vitePreprocess(),
    ],
    kit: {
        adapter: adapter({
            // default options are shown. On some platforms
            // these options are set automatically — see below
            pages: 'build',
            assets: 'build',
            fallback: undefined,
            precompress: false,
            strict: true
        }),
        paths: {
            base: dev ? '' : process.env.BASE_PATH,
        }
    }
};