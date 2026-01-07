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
/* 1. Importiamo i font da Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');

:root {
  /* Palette Catamarano Luxury */
  --color-ocean: #0f172a;
  --color-cork: #d2b48c; 
  --color-sand: #f8fafc;
  --color-gold: #c5a059;

  /* 2. Applichiamo i nuovi Font alle Variabili */
  --font-serif: 'Playfair Display', serif;      /* Sostituisce Georgia */
  --font-sans: 'Inter', sans-serif;            /* Sostituisce Arial */
}

/* Stile per la sezione servizi (manteniamo quello che c'era) */
.services-section {
  max-width: 1000px;
  margin: 50px auto;
  padding: 0 20px;
}
</style>