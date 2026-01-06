import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Servizio',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nome del Servizio',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Prezzo',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Descrizione',
      type: 'text',
    }),
  ],
})