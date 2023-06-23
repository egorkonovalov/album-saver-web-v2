import preprocess from 'svelte-preprocess';
const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true,
	}),

	kit: {
		paths: {
			base: dev ? '' : '/album-saver-web-v2',
		},
		appDir: 'internal',
		alias: {
			// this will match a file
			'$components': './src/components',
		}
	}
};

export default config;
