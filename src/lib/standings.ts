import type { Match } from './types'

export interface Standing {
  place: number
  team: string
  country?: string
}

// Zápasy o umístění: typ zápasu -> nejlepší místo, o které se hraje.
// Vítěz dostane toto místo, poražený o jedno horší.
const PLACEMENT_MATCHES: [string, number][] = [
  ['final', 1],
  ['third', 3],
  ['fifth', 5],
  ['seventh', 7],
  ['ninth', 9],
]

// Konečné pořadí se odvozuje z pavouka. Odehraný zápas = oba výsledky vyplněné,
// není live a není remíza. Neodehrané zápasy se přeskočí (místa pak chybí).
export function computeStandings(matches: Match[]): Standing[] {
  const out: Standing[] = []

  for (const [type, firstPlace] of PLACEMENT_MATCHES) {
    const m = matches.find(x => x.matchType === type)
    if (!m || !m.teamA || !m.teamB) continue
    if (m.status === 'live') continue
    if (m.scoreA == null || m.scoreB == null || m.scoreA === m.scoreB) continue

    const aWins = m.scoreA > m.scoreB
    const winner = aWins ? m.teamA : m.teamB
    const loser = aWins ? m.teamB : m.teamA

    out.push({ place: firstPlace, team: winner.name, country: winner.country })
    out.push({ place: firstPlace + 1, team: loser.name, country: loser.country })
  }

  return out.sort((a, b) => a.place - b.place)
}
