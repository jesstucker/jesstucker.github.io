// import adapter from '@sveltejs/adapter-static';
// import preprocess from 'svelte-preprocess';

// const dev = process.argv.includes('dev');
// console.log('dev:', dev)

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	preprocess: preprocess(),
//     kit: {
//         adapter: adapter({
//             pages: 'build',
//             assets: 'build',
//             fallback: 'index.html',
//             precompress: false,
//             strict: true
// 		}),
//         paths: {
//             // base: dev ? '' : process.env.BASE_PATH,
//             base: '/jesstucker.github.io',
//         }
//     }
// };

import adapter from '@sveltejs/adapter-static';
const dev = process.argv.includes('dev');

export default {
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
                        // base: '/jesstucker.github.io',
        }
    }
};

// export default config;
