<!-- app.vue -->
<script setup>
// Manteniamo l'import pulito che ha funzionato
import MyHeader from '~/components/MyHeader.vue'
</script>

<template>
  <div>
    <MyHeader />
    <HeroSection />
    <TheServices />
    <TheWine />

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

/* Scorrimento liscio per tutto il sito */
html {
  scroll-behavior: smooth;

}
}
</style>