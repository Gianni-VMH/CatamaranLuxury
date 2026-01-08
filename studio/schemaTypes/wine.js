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
      {
      name: 'order',
      title: 'Ordine di apparizione',
      type: 'number',
      description: 'Inserisci un numero. Più basso è il numero, prima appare (es. 10, 20, 30).',
    },
    },
  ],
}