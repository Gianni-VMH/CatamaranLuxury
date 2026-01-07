// studio/schemaTypes/hero.js
export default {
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titolo Principale',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Sottotitolo',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Immagine di Sfondo',
      type: 'image',
      options: {
        hotspot: true, // Permette di riquadrare l'immagine
      },
    },
 // AGGIUNGI QUESTI DUE CAMPI NUOVI 👇
    {
      name: 'cta_primary',
      title: 'Testo Bottone Primario (Blu)',
      type: 'string',
      initialValue: 'Scopri i Servizi',
    },
    {
      name: 'cta_secondary',
      title: 'Testo Bottone Secondario (Bianco)',
      type: 'string',
      initialValue: 'Contattaci',
    },
  ],
}