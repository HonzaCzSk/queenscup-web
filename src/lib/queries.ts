import { sanityClient } from "./sanity";

export async function getPartners() {
  return await sanityClient.fetch(`
    *[_type == "partner"] | order(level asc) {
      _id,
      name,
      url,
      level,
      "logo": logo.asset->url,
    }
  `)
}

export async function getTeams(category: string) {
  return await sanityClient.fetch(`
    *[_type == "team" && category == $category && !(name in ["A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4", "__"])] | order(name asc) {
      _id,
      name,
      category,
      country,
      venue,
      coach,
      "logo": logo.asset->url,
      players
    }
  `, { category })
}

export async function getMatches(category: string) {
  return await sanityClient.fetch(`
    *[_type == "match" && category == $category] | order(day asc, datetime asc) {
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
      "teamA": teamA->{ name, country },
      "teamB": teamB->{ name, country },
    }
  `, { category })
}