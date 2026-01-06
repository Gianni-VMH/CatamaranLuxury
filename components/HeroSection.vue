<!-- components/HeroSection.vue -->
<script setup>
// Collegamento DIRETTO all'API esterna di Sanity
const projectId = 'mlgxcumg'
const dataset = 'production'

const { data: heroData } = await useAsyncData('hero', () => {
  return $fetch(`https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}`, {
    method: 'POST',
    body: {
      query: '*[_type == "hero"][0] { ..., image { asset->{ url } } }'
    }
  })
})
</script>

<template>
  <section class="hero">
    
    <!-- RIMUOVI IL DEBUG (<pre>). Mantiene QUESTA riga corretta: -->
    <div 
      class="hero-bg"
      :style="{ backgroundImage: heroData && heroData.image ? `url(${heroData.image.asset.url}?w=1600&q=80&auto=format)` : 'none' }"
    ></div>

    <div class="container">
      <h1 class="title">{{ heroData?.title || 'Navigare è un Arte' }}</h1>
      <h2 class="subtitle">{{ heroData?.subtitle || 'Vivi l\'esperienza del Conscious Luxury' }}</h2>
      
      <div class="actions">
        <button class="btn-primary">Scopri i Servizi</button>
        <button class="btn-secondary">Contattaci</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  /* Il contenitore è relativo, ma alto 600px */
  position: relative;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1f5f9; /* Colore di riserva se l'immagine non carica */
  text-align: center;
  color: white; /* Il testo deve essere bianco perché sopra la foto */
}

/* Questo è il layer dell'immagine di sfondo */
.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover; /* Copre tutto senza deformare */
  background-position: center;
  z-index: 1; /* Dietro a tutto */
}






/* Maschera scura per rendere il testo leggibile sopra la foto */
.hero-bg::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 23, 42, 0.5); /* Blu scuro semi-trasparente */
}

.container {
  position: relative;
  z-index: 2; /* Il testo sopra l'immagine e la maschera */
  max-width: 800px;
  padding: 0 20px;
}

.title {
  font-size: 3.5rem;
  color: #ffffff;
  margin-bottom: 1rem;
  line-height: 1.1;
  font-family: Georgia, serif;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.subtitle {
  font-size: 1.25rem;
  color: #e2e8f0;
  margin-bottom: 2.5rem;
  font-weight: 300;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

.actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.btn-primary {
  background-color: #fff;
  color: #0f172a; /* Testo scuro su bottone bianco */
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
}

.btn-secondary {
  background-color: transparent;
  border: 2px solid #ffffff;
  color: #ffffff;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
}
</style>