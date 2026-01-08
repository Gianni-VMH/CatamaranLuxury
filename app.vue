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
   <!-- FOOTER (Nuovo Chi Siamo) -->
    <footer id="footer" class="site-footer">
      <div class="container">
        <div class="footer-content">
          <h3>Catamarano Luxury</h3>
          <p>Lusso consapevole nel cuore del Mediterraneo.</p>
        </div>
        <div class="footer-copyright">
          <p>© 2026 Catamarano Luxury. All rights reserved.</p>
        </div>
      </div>
    </footer>
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

/* Stile Footer */
.site-footer {
  background-color: var(--color-ocean); /* Blu Navy */
  color: white;
  padding: 60px 20px 40px;
  margin-top: auto; /* Spinge il footer in fondo */
}

.footer-content h3 {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: var(--color-cork); /* Titolo Sughero */
}

.footer-copyright {
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 20px;
  margin-top: 40px;
  text-align: center;
  font-size: 0.85rem;
  color: rgba(255,255,255,0.6);
}

</style>