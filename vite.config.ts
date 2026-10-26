import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');
	const apiProxyTarget = env.API_PROXY_TARGET;

	if (mode === 'development' && !apiProxyTarget) {
		throw new Error('API_PROXY_TARGET must be set in .env.local');
	}

	return {
		plugins: [
			sveltekit(),
		],
		server: {
			host: '127.0.0.1',
			port: 5173,
			strictPort: true,
			allowedHosts: ['.ngrok-free.app', '.trycloudflare.com'],
			proxy: apiProxyTarget ? {
				'/api': {
					target: apiProxyTarget,
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/api/, '')
				}
			} : undefined
		}
	};
});
