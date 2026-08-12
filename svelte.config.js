import adapter from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// Cloudflare Pages. Every route here prerenders, so the deploy is really just
		// static files — the adapter is in place so a Worker route can be added later
		// without restructuring the project.
		adapter: adapter()
	}
};

export default config;
