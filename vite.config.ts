import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

const dev = process.argv.includes('dev');

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			alias: {
				'#lib': 'src/lib',
				'$lib': 'src/lib'
			},
			adapter: adapter({
				pages: 'build',
				assets: 'build',
				fallback: undefined,
				precompress: false,
				strict: true
			}),
			paths: {
				base: dev ? '' : process.env.BASE_PATH
			}
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
