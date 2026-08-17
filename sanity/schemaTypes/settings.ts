import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'settings',
    title: 'Nastavení turnaje',
    type: 'document',
    fields: [
        defineField({
            name: 'showSchedule',
            title: 'Zobrazit rozpis zápasů',
            type: 'object',
            fields: [
                defineField({ name: 'u11', title: 'U11 (2015)', type: 'boolean', initialValue: true }),
                defineField({ name: 'u12', title: 'U12 (2014)', type: 'boolean', initialValue: false }),
                defineField({ name: 'u13', title: 'U13 (2013)', type: 'boolean', initialValue: true }),
            ],
        }),
        defineField({
            name: 'showTeams',
            title: 'Zobrazit týmy',
            type: 'object',
            fields: [
                defineField({ name: 'u11', title: 'U11 (2015)', type: 'boolean', initialValue: true }),
                defineField({ name: 'u12', title: 'U12 (2014)', type: 'boolean', initialValue: true }),
                defineField({ name: 'u13', title: 'U13 (2013)', type: 'boolean', initialValue: true }),
            ],
        }),
    ],
    preview: {
        prepare() {
            return { title: 'Nastavení turnaje' }
        },
    },
})