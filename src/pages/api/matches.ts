import type { APIRoute } from "astro";
import { getMatches } from "../../lib/queries";

export const GET: APIRoute = async ({ url }) => {
  const cat = url.searchParams.get("cat") ?? "u12";
  
  try {
    const matches = await getMatches(cat);
    return new Response(JSON.stringify({ category: cat, matches, updatedAt: new Date().toISOString() }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Pragma": "no-cache",
        "Expires": "0",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch matches", matches: [] }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
