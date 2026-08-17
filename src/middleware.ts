import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  
  // Apply Cache-Control headers for all dynamic SSR pages
  response.headers.set(
    "Cache-Control",
    "public, max-age=60, s-maxage=600, stale-while-revalidate=120"
  );
  
  return response;
});
