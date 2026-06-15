import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'event',
    title: 'Událost',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Název události',
            type: 'object',
            fields: [
                defineField({ name: 'cs', title: 'Česky', type: 'string' }),
                defineField({ name: 'en', title: 'Anglicky', type: 'string' }),
                defineField({ name: 'pl', title: 'Polsky', type: 'string' }),
            ],
        }),
        defineField({
            name: 'category',
            title: 'Kategorie',
            type: 'string',
            options: {
                list: [
                    { title: 'U11 (2015)', value: 'u11' },
                    { title: 'U12 (2014)', value: 'u12' },
                    { title: 'U13 (2013)', value: 'u13' },
                    { title: 'Všechny kategorie', value: 'all' },
                ],
            },
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
                ],
            },
        }),
        defineField({
            name: 'datetime',
            title: 'Datum a čas',
            type: 'datetime',
            options: { dateFormat: 'DD.MM.YYYY', timeFormat: 'HH:mm' },
        }),
        defineField({
            name: 'venue',
            title: 'Místo',
            type: 'string',
            options: {
                list: [
                    { title: 'Sokol HK', value: 'sokol' },
                    { title: 'GAPA aréna', value: 'gapa' },
                    { title: 'Obě haly', value: 'both' },
                ],
            },
        }),
        defineField({
            name: 'type',
            title: 'Typ události',
            type: 'string',
            options: {
                list: [
                    { title: 'Zahajovací ceremoniál', value: 'opening' },
                    { title: 'Závěrečný ceremoniál', value: 'closing' },
                    { title: 'Jiná událost', value: 'other' },
                ],
            },
        }),
    ],
    preview: {
        select: {
            title: 'title.cs',
            subtitle: 'type',
        },
    },
})