import { F as sequence, Z as defineMiddleware } from "./chunks/render_DHxBp8Wz.mjs";
//#endregion
//#region \0virtual:astro:middleware
var onRequest = sequence(defineMiddleware(async (context, next) => {
	const response = await next();
	try {
		response.headers.set("Cache-Control", "public, max-age=60, s-maxage=600, stale-while-revalidate=120");
	} catch (error) {
		console.warn("Response headers are immutable, attempting fallback response wrapping:", error);
		try {
			const mutableHeaders = new Headers(response.headers);
			mutableHeaders.set("Cache-Control", "public, max-age=60, s-maxage=600, stale-while-revalidate=120");
			return new Response(response.body, {
				status: response.status,
				statusText: response.statusText,
				headers: mutableHeaders
			});
		} catch (fallbackError) {
			console.error("Failed to construct fallback response:", fallbackError);
		}
	}
	return response;
}));
//#endregion
export { onRequest };
