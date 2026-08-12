// A landing page: every route is static, so the whole thing is built at deploy time
// and Cloudflare serves plain files.
export const prerender = true;
export const trailingSlash = 'never';
