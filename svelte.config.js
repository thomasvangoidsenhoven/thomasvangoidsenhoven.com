import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		prerender: {
			handleHttpError: ({ path, message }) => {
				// Ignore missing CV PDF - add it to static/ when ready
				if (path === '/thomasvangoidsenhoven_cv.pdf') {
					console.warn(`Warning: ${message}`);
					return;
				}
				throw new Error(message);
			}
		}
	}
};

export default config;
