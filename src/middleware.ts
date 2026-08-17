import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  
  try {
    // Attempt to set cache headers directly
    response.headers.set(
      "Cache-Control",
      "public, max-age=60, s-maxage=600, stale-while-revalidate=120"
    );
  } catch (error) {
    console.warn("Response headers are immutable, attempting fallback response wrapping:", error);
    try {
      // Fallback: Create a new response with cloned, mutable headers
      const mutableHeaders = new Headers(response.headers);
      mutableHeaders.set(
        "Cache-Control",
        "public, max-age=60, s-maxage=600, stale-while-revalidate=120"
      );
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
});

