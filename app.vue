<!-- app.vue -->
<script setup>
import MyHeader from '~/components/MyHeader.vue'

// Scorrimento Liscio (JavaScript forzato)
onMounted(() => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const targetId = this.getAttribute('href').substring(1)
      const target = document.getElementById(targetId)
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        })
      }
    })
  })
})
</script>

<template>
  <div>
    <!-- Header (Visibile sempre) -->
    <MyHeader />

    <!-- 👇 QUI NUXT CAMBIA AUTOMATICAMENTE IL CONTENUTO 👇 -->
    <!-- Se vai su / carica index.vue -->
    <!-- Se vai su /prezzi carica prezzi.vue -->
    <NuxtPage />

    <!-- FOOTER (Visibile sempre) -->
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
/* ELIMINAZIONE DEI FONT DI SISTEMA - BLOCCO GLOBALE */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 100 900;
  src: url('https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hi2jW7i9QZiLc.woff2') format('woff2');
  font-display: swap;
}

@font-face {
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 400;
  src: url('https://fonts.gstatic.com/s/playfairdisplay/v30/nuFkD-vysZiWQgB6lFzZsP.woff2') format('woff2');
  font-display: swap;
}

@font-face {
  font-family: 'Playfair Display';
  font-style: italic;
  font-weight: 400;
  src: url('https://fonts.gstatic.com/s/playfairdisplay/v30/nuFvD-vysZiWQgA6lFzZsK7kRiUd.woff2') format('woff2');
  font-display: swap;
}

@font-face {
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 700;
  src: url('https://fonts.gstatic.com/s/playfairdisplay/v30/nuFvD-vysZiWQgA6lFzZsA7kRiUd.woff2') format('woff2');
  font-display: swap;
}

:root {
  /* Palette Colori */
  --color-ocean: #0f172a;
  --color-cork: #d2b48c; 
  --color-sand: #f8fafc;
  --color-gold: #c5a059;

  /* VARIABILI FONT (Adesso puntano ai file sopra, non a System) */
  --font-serif: 'Playfair Display', serif;      
  --font-sans: 'Inter', sans-serif;            
}

html, body {
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
}

/* Stile Footer */
.site-footer {
  background-color: var(--color-ocean);
  color: white;
  padding: 60px 20px 40px;
  margin-top: auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content h3 {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: var(--color-cork);
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