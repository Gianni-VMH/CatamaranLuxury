<template>
  <div>
    <h1>Catamarano Luxury</h1>
    
    <h2>I nostri servizi:</h2>
    
    <ul>
           <li v-for="s in servizi" :key="s.nome" class="card">
        <strong>{{ s.nome }}</strong> - {{ s.prezzo }}
        <p>{{ s.descrizione }}</p>
      </li>
    </ul>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const servizi = ref([
  { nome: "Crociera al tramonto", prezzo: "150€", descrizione: "special edition" },
  { nome: "Tour snorkeling", prezzo: "80€", descrizione: "exclusive services" },
  { nome: "Pranzo a bordo", prezzo: "60€", descrizione: "standard services" }
])
</script>



<style scoped>
/* Stile generale della pagina */
div {
  font-family: Arial, sans-serif; /* Tipo di carattere */
  max-width: 600px;               /* Larghezza massima del contenuto */
  margin: 0 auto;                 /* Centratura orizzontale */
  padding: 20px;
}

/* Stile specifico della class="card" */
.card {
  background-color: #f9f9f9;      /* Sfondo grigio chiaro */
  border: 1px solid #ddd;         /* Bordo grigio */
  border-radius: 8px;              /* Angoli arrotondati */
  padding: 15px;                   /* Spazio interno */
  margin-bottom: 15px;            /* Spazio sotto ogni card */
  box-shadow: 2px 2px 5px rgba(0,0,0,0.1); /* Ombreggiatura leggera */
}

.card strong {
  display: block;                 /* Porta il prezzo a capo sotto il nome */
  font-size: 1.2em;               /* Titolo più grande */
  margin-bottom: 5px;
}

.card p {
  color: #666;                    /* Testo descrizione grigio scuro */
  margin-top: 10px;
}
</style>

