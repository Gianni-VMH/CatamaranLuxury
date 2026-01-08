// studio/schemas/service.js
export default {
  name: 'service',
  title: 'Servizio',
  type: 'document',
  fields: [
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