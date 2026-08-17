import { F as sequence, Z as defineMiddleware } from "./chunks/render_DHxBp8Wz.mjs";
//#endregion
//#region \0virtual:astro:middleware
var onRequest = sequence(defineMiddleware(async (context, next) => {
	const response = await next();
	response.headers.set("Cache-Control", "public, max-age=60, s-maxage=600, stale-while-revalidate=120");
	return response;
}));
//#endregion
export { onRequest };
