import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'gallery',
    title: 'Fotogalerie',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Název alba',
            type: 'string',
            validation: Rule => Rule.required(),
            description: 'Např. "Den 1 – Pátek" nebo "Finálový ceremoniál"',
        }),
        defineField({
            name: 'photographer',
            title: 'Fotograf',
            type: 'string',
            description: 'Jméno fotografa nebo studia',
        }),
        defineField({
            name: 'url',
            title: 'Odkaz na galerii',
            type: 'url',
            validation: Rule => Rule.required(),
            description: 'Odkaz na Zonerama, Google Photos, atd.',
        }),
        defineField({
            name: 'thumbnail',
            title: 'Náhledový obrázek',
            type: 'image',
            options: { hotspot: true },
            description: 'Volitelné – titulní fotka alba',
        }),
        defineField({
            name: 'category',
            title: 'Kategorie',
            type: 'string',
            options: {
                list: [
                    { title: 'U12 (2015)', value: 'u12' },
                    { title: 'U13 (2014)', value: 'u13' },
                    { title: 'U14 (2013)', value: 'u14' },
                    { title: 'Všechny kategorie', value: 'all' },
                ],
            },
            validation: Rule => Rule.required(),
            initialValue: 'all',
        }),
        defineField({
            name: 'day',
            title: 'Den turnaje',
            type: 'number',
            options: {
                list: [
                    { title: 'Den 1 – Pátek', value: 1 },
                    { title: 'Den 2 – Sobota', value: 2 },
                    { title: 'Den 3 – Neděle', value: 3 },
                    { title: 'Celý turnaj', value: 0 },
                ],
            },
            initialValue: 0,
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'photographer',
            media: 'thumbnail',
            category: 'category',
        },
        prepare({ title, subtitle, media, category }) {
            return {
                title,
                subtitle: `${category?.toUpperCase() ?? 'ALL'} · ${subtitle ?? 'bez fotografa'}`,
                media,
            }
        },
    },
})