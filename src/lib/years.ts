import { sanityClient } from './sanity'

// Seznam ročníků, ke kterým existují zápasy, od nejnovějšího.
export async function getTournamentYears(): Promise<number[]> {
  try {
    const years: number[] = await sanityClient.fetch(
      `array::unique(*[_type == "match" && defined(year)].year) | order(@ desc)`,
    )
    return years ?? []
  } catch (error) {
    console.error('Error fetching tournament years:', error)
    return []
  }
}

export type ArchiveCategory = 'u12' | 'u13' | 'u14'

export function normalizeCategory(raw: string | null | undefined): ArchiveCategory {
  return raw === 'u13' || raw === 'u14' ? raw : 'u12'
}

// Vrátí ročník z URL, jen pokud je to číslo a ročník v datech opravdu existuje.
export async function resolveArchiveYear(raw: string | undefined): Promise<number | null> {
  const year = Number(raw)
  if (!Number.isInteger(year)) return null
  const years = await getTournamentYears()
  return years.includes(year) ? year : null
}
