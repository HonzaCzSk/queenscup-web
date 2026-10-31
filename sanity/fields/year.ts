import { defineField } from 'sanity'

// Ročník, který se právě připravuje / hraje.
// Po skončení turnaje a před přípravou dalšího ho zvyš o 1.
export const CURRENT_YEAR = 2026

export const yearField = defineField({
    name: 'year',
    title: 'Ročník',
    type: 'number',
    description: 'Rok konání turnaje (např. 2026). Podle něj se data řadí do archivu.',
    initialValue: CURRENT_YEAR,
    validation: Rule => Rule.required().integer().min(2026).max(2100),
})