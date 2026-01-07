import service from '../schemas/service'

// IMPORTIAMO IL NUOVO SCHEMA QUI 👇
import hero from './hero'
import wine from './wine'
import siteConfig from './siteConfig' // <--- AGGIUNGI QUESTO RIGA


export const schemaTypes = [service, hero, wine, siteConfig] // 👈 Aggiungi , hero qui