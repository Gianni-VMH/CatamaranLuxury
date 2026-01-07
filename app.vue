<!-- app.vue -->
<script setup>
// Manteniamo l'import pulito che ha funzionato
import MyHeader from '~/components/MyHeader.vue'
</script>

<template>
  <div>
    <!-- NUOVA SEZIONE HEADER -->
    <MyHeader />
    <!-- NUOVO: Inseriamo la Hero Section qui -->
    <HeroSection />

    <!-- NUOVA SEZIONE VINI -->
    <TheWine />

    <!-- Sezione Servizi (quella che avevi prima) -->
    <div class="services-section">
      <h2>I nostri servizi esclusivi:</h2>
      <ul>
        <li v-for="s in servizi" :key="s._id" class="card">
          <strong>{{ s.title }}</strong> - {{ s.price }}
          <p>{{ s.description }}</p>
        </li>
      </ul>
    </div>

  </div>
</template>

<style>
:root {
  /* Palette Catamarano Luxury */
  
  /* 1. Ocean Navy (Mare profondo, Testo, Footer) */
  --color-ocean: #0f172a;
  
  /* 2. Cork Tan (Sughero caldo, Accenti, Bordi) */
  --color-cork: #d2b48c; 
  
  /* 3. Golden Sand (Sfondo chiaro, rilassante) */
  --color-sand: #f8fafc;

  /* 4. Sunset Gold (Dettagli preziosi) */
  --color-gold: #c5a059;

  /* Font (Sarà importante dopo, ma prepariamolo) */
  --font-serif: 'Georgia', serif;
  --font-sans: 'Arial', sans-serif;
}


/* Qui puoi mettere un po' di padding per spaziare le sezioni */
.services-section {
  max-width: 1000px;
  margin: 50px auto;
  padding: 0 20px;
}
</style>