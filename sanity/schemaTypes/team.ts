import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'team',
  title: 'Tým',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Název týmu',
      type: 'string',
      validation: Rule => Rule.required(),
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
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'country',
      title: 'Stát',
      type: 'string',
      options: {
        list: [
          { title: 'Česká republika', value: 'CZ' },
          { title: 'Polsko', value: 'PL' },
          { title: 'Slovensko', value: 'SK' },
          { title: 'Maďarsko', value: 'HU' },
          { title: 'Německo', value: 'DE' },
          { title: 'Lotyšsko', value: 'LV' },
          { title: 'Jiný', value: 'OTHER' },
        ],
      },
    }),
    defineField({
      name: 'logo',
      title: 'Logo klubu',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'coach',
      title: 'Trenér / Trenérka',
      type: 'string',
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
      name: 'players',
      title: 'Hráčky',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'number', title: 'Číslo dresu', type: 'number' }),
            defineField({ name: 'name', title: 'Jméno a příjmení', type: 'string' }),
          ],
          preview: {
            select: { title: 'name', subtitle: 'number' },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'logo',
    },
  },
})