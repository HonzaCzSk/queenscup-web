import { sanityClient } from "./sanity";
import type { Partner, Team, Match, Settings } from "./types";
import { CURRENT_YEAR } from "./config";

export async function getPartners(): Promise<Partner[]> {
  try {
    return await sanityClient.fetch(`
      *[_type == "partner"] | order(level asc) {
        _id,
        name,
        url,
        level,
        "logo": logo.asset->url,
      }
    `);
  } catch (error) {
    console.error("Error fetching partners from Sanity:", error);
    return [];
  }
}

export async function getTeams(category: string, year: number = CURRENT_YEAR): Promise<Team[]> {
  try {
    return await sanityClient.fetch(`
      *[_type == "team" && year == $year && category == $category && !(name in ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "__"])] | order(name asc) {
        _id,
        name,
        category,
        country,
        venue,
        coach,
        "logo": logo.asset->url,
        players
      }
    `, { category, year });
  } catch (error) {
    console.error(`Error fetching teams for category ${category}, year ${year}:`, error);
    return [];
  }
}

export async function getMatches(category: string, year: number = CURRENT_YEAR): Promise<Match[]> {
  try {
    return await sanityClient.fetch(`
      *[_type == "match" && year == $year && category == $category] | order(day asc, datetime asc) {
        _id,
        category,
        day,
        datetime,
        venue,
        court,
        matchType,
        group,
        scoreA,
        scoreB,
        status,
        quarters,
        streamUrl,
        "teamA": teamA->{ name, country },
        "teamB": teamB->{ name, country },
      }
    `, { category, year });
  } catch (error) {
    console.error(`Error fetching matches for category ${category}, year ${year}:`, error);
    return [];
  }
}

export async function getGalleries(category: string, year: number = CURRENT_YEAR) {
  try {
    return await sanityClient.fetch(`
      *[_type == "gallery" && year == $year && (category == $category || category == "all")] | order(day asc, publishedAt asc) {
        _id,
        title,
        photographer,
        url,
        "thumbnail": thumbnail.asset->url,
        category,
        day,
        publishedAt,
      }
    `, { category, year });
  } catch (error) {
    console.error(`Error fetching galleries for category ${category}, year ${year}:`, error);
    return [];
  }
}

export async function getSettings(): Promise<Settings> {
  try {
    const settings = await sanityClient.fetch(`
      *[_type == "settings"][0] {
        showSchedule,
        showTeams
      }
    `);
    return settings || {};
  } catch (error) {
    console.error("Error fetching settings from Sanity:", error);
    return {};
  }
}