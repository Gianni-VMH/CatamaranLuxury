// studio/schemas/service.js
export default {
  name: 'service',
  title: 'Servizio',
  type: 'document',
  fields: [
     {
      name: 'order',
      title: 'Ordine di apparizione',
      type: 'number',
      description: 'Inserisci un numero. Più basso è il numero, prima appare (es. 10, 20, 30).',
     },
    {
      name: 'title',
      title: 'Nome del Servizio',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Prezzo',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Descrizione',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Foto del Servizio',
      type: 'image',
      options: {
        hotspot: true,
      },
      },
   
  ],
}