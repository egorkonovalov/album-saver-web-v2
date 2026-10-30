import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ command, mode, isPreview }) => {
	const { API_PROXY_TARGET } = loadEnv(mode, process.cwd(), '');

	if (command === 'serve' && !isPreview && !API_PROXY_TARGET) {
		throw new Error('API_PROXY_TARGET must be set in .env.local for the dev server');
	}

	return {
		plugins: [sveltekit()],
		server: {
			host: '127.0.0.1',
			port: 5173,
			strictPort: true,
			allowedHosts: ['.ngrok-free.app', '.trycloudflare.com'],
			proxy: API_PROXY_TARGET ? {
				'/api': {
					target: API_PROXY_TARGET,
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/api/, '')
				}
			} : undefined
		}
	};
});
