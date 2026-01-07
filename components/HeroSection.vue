<!-- components/HeroSection.vue -->
<script setup>
const projectId = 'mlgxcumg'
const dataset = 'production'

const { data: heroData } = await useAsyncData('hero', () => {
  return $fetch(`https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}`, {
    method: 'POST',
    body: {
      query: '*[_type == "hero"][0] { ..., image { asset->{ url } }, cta_primary, cta_secondary }'
    }
  })
})
</script>

<template>
  <section class="hero">
    <!-- Layer Sfondo -->
    <div 
      class="hero-bg"
      :style="{ backgroundImage: heroData && heroData.result ? `url(${heroData.result.image.asset.url})` : 'none' }"
    ></div>

    <!-- Contenitore Principale -->
    <div class="container">
      
      <!-- Titoli -->
      <h1 class="title">{{ heroData?.result?.title || 'Navigare è un Arte' }}</h1>
      <h2 class="subtitle">{{ heroData?.result?.subtitle || 'Vivi l\'esperienza del Conscious Luxury' }}</h2>
      
      <!-- Bottoni -->
      <div class="actions">
        <button class="btn-primary">{{ heroData?.result?.cta_primary || 'Scopri i Servizi' }}</button>
        <button class="btn-secondary">{{ heroData?.result?.cta_secondary || 'Contattaci' }}</button>
      </div>

    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1f5f9; 
  text-align: center;
  color: white;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: 1;
}

.hero-bg::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 23, 42, 0.5);
}

.container {
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 0 20px;
}

.title {
  font-size:3.5rem;
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
  color: #0f172a;
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