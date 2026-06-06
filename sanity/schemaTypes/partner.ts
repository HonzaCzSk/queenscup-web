import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'partner',
  title: 'Partner',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Název partnera',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'url',
      title: 'Web partnera',
      type: 'url',
    }),
    defineField({
      name: 'level',
      title: 'Úroveň partnerství',
      type: 'string',
      options: {
        list: [
          {title: 'Generální partner', value: 'general'},
          {title: 'Hlavní partner', value: 'main'},
          {title: 'Partner', value: 'partner'},
          {title: 'Mediální partner', value: 'media'},
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'level',
      media: 'logo',
    },
  },
})