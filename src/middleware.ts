import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();

  if (context.url.pathname.startsWith("/api/")) {
    return response;
  }

  const cacheHeader = "public, max-age=30, s-maxage=120, stale-while-revalidate=30";

  try {
    response.headers.set("Cache-Control", cacheHeader);
  } catch (error) {
    console.warn("Response headers are immutable, attempting fallback response wrapping:", error);
    try {
      const mutableHeaders = new Headers(response.headers);
      mutableHeaders.set("Cache-Control", cacheHeader);
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: mutableHeaders,
      });
    } catch (fallbackError) {
      console.error("Failed to construct fallback response:", fallbackError);
    }
  }

  return response;
});

