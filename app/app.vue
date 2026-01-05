<template>
  <div>
    <h1>{{ titolo }}</h1>
    <p>Benvenuto a bordo della tua nuova avventura.</p>
     <button @click="cambiaTitolo">Cambia Stagione</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// --- VECCHIO CODICE (Commentato, non si esegue) ---
/*
const titolo = ref("Titolo Vecchio")

function cambiaTitolo() {
  // Vecchia logica qui...
}
*/

// --- NUOVO CODICE (Attivo, viene eseguito) ---
const titolo = ref("Catamarano Luxury")

function cambiaTitolo() {
  titolo.value = "Catamarano Luxury - Winter Edition"
}
</script>








<style scoped>
/* Qui inizieremo a scrivere il CSS */
h1 {
  color: #0077b6; /* Un bel blu mare */
}
</style>

