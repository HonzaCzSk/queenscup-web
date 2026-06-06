import {defineField, defineType} from 'sanity'

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
          {title: 'U11 (2015)', value: 'u11'},
          {title: 'U12 (2014)', value: 'u12'},
          {title: 'U13 (2013)', value: 'u13'},
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
          {title: 'Den 1', value: 1},
          {title: 'Den 2', value: 2},
          {title: 'Den 3', value: 3},
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'datetime',
      title: 'Datum a čas',
      type: 'datetime',
      options: {dateFormat: 'DD.MM.YYYY', timeFormat: 'HH:mm'},
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'venue',
      title: 'Hřiště (hala)',
      type: 'string',
      options: {
        list: [
          {title: 'Sokol HK', value: 'sokol'},
          {title: 'GAPA aréna', value: 'gapa'},
        ],
      },
    }),
    defineField({
      name: 'teamA',
      title: 'Tým A',
      type: 'reference',
      to: [{type: 'team'}],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'teamB',
      title: 'Tým B',
      type: 'reference',
      to: [{type: 'team'}],
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
      name: 'matchType',
      title: 'Typ zápasu',
      type: 'string',
      options: {
        list: [
          {title: 'Základní skupina', value: 'group'},
          {title: 'Čtvrtfinále', value: 'qf'},
          {title: 'Semifinále', value: 'sf'},
          {title: 'O 3. místo', value: 'third'},
          {title: 'Finále', value: 'final'},
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
    prepare({teamA, teamB, category, day}) {
      return {
        title: `${teamA ?? '?'} vs ${teamB ?? '?'}`,
        subtitle: `${category?.toUpperCase()} – Den ${day}`,
      }
    },
  },
})