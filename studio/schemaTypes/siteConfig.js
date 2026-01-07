// studio/schemaTypes/siteConfig.js
export default {
  name: 'siteConfig',
  title: 'Impostazioni Generali',
  type: 'document',
  fields: [
    {
      name: 'wine_section_title',
      title: 'Titolo Sezione Vini',
      type: 'string',
      initialValue: 'La Cantina Galleggiante',
    },
    {
      name: 'wine_section_subtitle',
      title: 'Sottotitolo Sezione Vini',
      type: 'text',
      initialValue: 'Una selezione di eccellenze territoriali...',
    },
  ],
}