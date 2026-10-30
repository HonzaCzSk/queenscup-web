import { supabase } from './supabase'

export async function getArchive(year: number, category: string) {
    // 1. Najdeme turnaj pro daný rok
    const { data: tournaments, error: tError } = await supabase
        .from('tournaments')
        .select('*')
        .eq('year', year)

    if (tError || !tournaments || tournaments.length === 0) {
        return { tournament: null, teams: [], matches: [] }
    }

    const tournament = tournaments.find(t => t.name.toLowerCase().includes(category)) || tournaments[0]

    // 2. Načteme týmy (pouze názvy, státy, hřiště)
    const { data: teams } = await supabase
        .from('teams')
        .select('*')
        .eq('tournament_id', tournament.id)
        .eq('category', category)

    // 3. Načteme zápasy
    const { data: matches } = await supabase
        .from('matches')
        .select('*')
        .eq('tournament_id', tournament.id)
        .eq('category', category)

    return {
        tournament,
        teams: teams || [],
        matches: matches || [],
    }
}