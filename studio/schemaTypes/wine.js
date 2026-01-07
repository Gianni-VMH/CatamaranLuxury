// studio/schemaTypes/wine.js
export default {
  name: 'wine',
  title: 'Vino (Cantina)',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nome del Vino',
      type: 'string',
    },
    {
      name: 'vintage',
      title: 'Annata',
      type: 'number',
    },
    {
      name: 'region',
      title: 'Regione / Produttore',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Note di Degustazione',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Foto Bottiglia',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}