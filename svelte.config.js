import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.argv.includes('dev');
console.log('dev:', dev)

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
    kit: {
        adapter: adapter({

		}),
        paths: {
            base: dev ? '' : process.env.BASE_PATH,
        }
    }
};

export default config;
