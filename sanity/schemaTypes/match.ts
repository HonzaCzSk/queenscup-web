import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'match',
  title: 'Zápas',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Kategorie',
      type: 'string',
      options: {
        list: [
          { title: 'U11 (2015)', value: 'u11' },
          { title: 'U12 (2014)', value: 'u12' },
          { title: 'U13 (2013)', value: 'u13' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'day',
      title: 'Den turnaje',
      type: 'number',
      options: {
        list: [
          { title: 'Den 1', value: 1 },
          { title: 'Den 2', value: 2 },
          { title: 'Den 3', value: 3 },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'datetime',
      title: 'Datum a čas',
      type: 'datetime',
      options: { dateFormat: 'DD.MM.YYYY', timeFormat: 'HH:mm' },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'venue',
      title: 'Hřiště (hala)',
      type: 'string',
      options: {
        list: [
          { title: 'Sokol HK', value: 'sokol' },
          { title: 'GAPA aréna', value: 'gapa' },
        ],
      },
    }),
    defineField({
      name: 'teamA',
      title: 'Tým A',
      type: 'reference',
      to: [{ type: 'team' }],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'teamB',
      title: 'Tým B',
      type: 'reference',
      to: [{ type: 'team' }],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'scoreA',
      title: 'Skóre Tým A',
      type: 'number',
    }),
    defineField({
      name: 'scoreB',
      title: 'Skóre Tým B',
      type: 'number',
    }),
    defineField({
      name: 'quarters',
      title: 'Skóre po čtvrtinách',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'q', title: 'Čtvrtina', type: 'number' }),
            defineField({ name: 'scoreA', title: 'Skóre Tým A', type: 'number' }),
            defineField({ name: 'scoreB', title: 'Skóre Tým B', type: 'number' }),
          ],
          preview: {
            select: { title: 'q', subtitle: 'scoreA' },
            prepare({ title, subtitle }) {
              return { title: `Q${title}`, subtitle: `${subtitle ?? '?'}` }
            }
          }
        }
      ]
    }),
    defineField({
      name: 'status',
      title: 'Stav zápasu',
      type: 'string',
      options: {
        list: [
          { title: 'Naplánováno', value: 'scheduled' },
          { title: 'Běží (Live)', value: 'live' },
          { title: 'Konec', value: 'finished' },
        ],
      },
      initialValue: 'scheduled',
    }),
    defineField({
      name: 'matchType',
      title: 'Typ zápasu',
      type: 'string',
      options: {
        list: [
          { title: 'Zákl. Skupina', value: 'group' },
          { title: 'Čtvrtfinále', value: 'qf' },
          { title: 'O 9. místo', value: 'ninth' },
          { title: 'O 7. místo', value: 'seventh' },
          { title: 'O 5. místo', value: 'fifth' },
          { title: 'O 3. místo', value: 'third' },
          { title: 'Finále', value: 'final' },
        ],
      },
    }),
    defineField({
      name: 'court',
      title: 'Kurt (hřiště)',
      type: 'string',
      options: {
        list: [
          { title: 'Court 1 – hlavní hala', value: 'Court 1' },
          { title: 'Main court', value: 'Main Court - GAPA' },
          { title: 'Court 2 – tréninková hala', value: 'Court 2' },
        ],
      },
    }),
    defineField({
      name: 'group',
      title: 'Skupina',
      type: 'string',
      options: {
        list: [
          { title: 'Skupina A', value: 'A' },
          { title: 'Skupina B', value: 'B' },
        ],
      },
    }),
  ],
  preview: {
    select: {
      teamA: 'teamA.name',
      teamB: 'teamB.name',
      category: 'category',
      day: 'day',
    },
    prepare({ teamA, teamB, category, day }) {
      return {
        title: `${teamA ?? '?'} vs ${teamB ?? '?'}`,
        subtitle: `${category?.toUpperCase()} – Den ${day}`,
      }
    },
  },
})