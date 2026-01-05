Copia e incolla questo nel tuo README.MD:

🌊 Catamarano Luxury Landing Page
🚩 Obiettivo
Realizzare una Landing Page professionale per presentare servizi di "Conscious Luxury" su catamarano.

🛠 Stack Tecnologica
Frontend: Nuxt.js (Vue)
CMS: Sanity.io
Editor: VS Code
Hosting: Vercel (Gratuito)
✅ Checklist Avanzamento (Progressivo)
 Setup: Installazione VS Code, Git, Node.js e Nuxt.
 Giorno 1 (Parziale): Setup Nuxt, Concetti JS base (ref, array, oggetti), Componente HTML/CSS base.
 Giorno 2: Layout Landing Page e Integrazione Sanity.
 Giorno 3: Configurazione Sanity e Modello Dati "Servizio".
 Giorno 4: Connessione Nuxt-Sanity e Rendering dinamico.
 Giorno 5: Interattività, Styling finale e Pubblicazione (Deploy).
📝 Log Sessioni (Diario di Bordo)
Qui archiviamo i concetti imparati giorno per giorno.

Sessione 1: Le Fondamenta
Argomenti trattati:

Reactività: Uso di ref per creare variabili che aggiornano la pagina automaticamente.
Struttura Dati: Array (liste) e Oggetti (proprietà come nome/prezzo).
Direttive Vue: v-for per ciclare gli elementi, {{ }} per stamparli, @click per interagire.
CSS: Classi, display: block, margin vs padding.
Componenti: Anatomia di un file .vue (Template, Script, Style scoped).
Risultato: Creata una lista di servizi (Nome, Prezzo, Descrizione) visualizzata come Card stilizzate.

📘 Appunti Tecnici (Riepilogo)
Comandi (Terminale)
git add . && git commit -m "messaggio": Salva il lavoro (Aggiorna il diario).
npm run dev: Accende il sito su http://localhost:3000/.
Anatomia File .vue
<template>: La vista (HTML).
<script setup>: La logica (JS). Import ref da Vue.
<style scoped>: Lo stile (CSS, valido solo per questo file).
Concetti JS
ref("valore"): Variabile reattiva. Per modificarla si usa .value.
{ chiave: valore }: Oggetto (raccolta di dati).
[ elem1, elem2 ]: Array (lista di dati).
Accesso proprietà: oggetto.chiave.
Direttive Vue (dentro HTML)
{{ variabile }}: Stampa il valore.
v-for="item in list": Ripete l'elemento per ogni item.
:key="id": Identificativo univoco (obbligatorio per v-for).
@click="func": Gestore di evento clic.
class="nome": Collega allo stile CSS.
🚀 Come avviare il progetto
Apri il terminale.
Assicurati di essere nella cartella CatamaranLuxury.
Scrivi: npm run dev
Apri il browser su `http://localhost:3000/
Fammi sapere quando l'hai incollato e salvato. Poi possiamo chiudere la sessione aggiornando Git un'ultima volta! 🚀
aggiornato al 05 gen 26 ore 23:31


