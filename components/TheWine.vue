<!-- components/TheWines.vue -->
<script setup>
const projectId = 'mlgxcumg'
const dataset = 'production'

const { data: winesData } = await useAsyncData('wines', () => {
  return $fetch(`https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}`, {
    method: 'POST',
    body: {
      query: '*[_type == "wine"] { ..., image { asset->{ url } } }'
    }
  })
})
</script>

<template>
  <section class="wine-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">La Cantina Galleggiante</h2>
        <p class="section-subtitle">Una selezione di eccellenze territoriali da accompagnare con il suono del mare.</p>
      </div>

      <div class="wines-grid">
        <div v-for="wine in winesData?.result" :key="wine._id" class="wine-card">
          <div class="wine-image-box">
            <img 
              v-if="wine.image" 
              :src="`${wine.image.asset.url}?w=400&q=80`" 
              :alt="wine.name" 
              class="wine-img"
            >
          </div>

          <div class="wine-info">
            <h3 class="wine-name">{{ wine.name }}</h3>
            <p class="wine-meta">{{ wine.vintage }} | {{ wine.region }}</p>
            <p class="wine-desc">{{ wine.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.wine-section {
  background-color: var(--color-sand);
  padding: 80px 20px;
  color: var(--color-ocean);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-family: var(--font-serif);
  font-size: 2.5rem;
  color: var(--color-ocean);
  margin-bottom: 10px;
}

.section-subtitle {
  font-family: var(--font-sans);
  color: var(--color-gold);
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 0.9rem;
}

.wines-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

.wine-card {
  background: white;
  border: 1px solid rgba(0,0,0,0.05);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.wine-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  border-color: var(--color-cork);
}

.wine-image-box {
  height: 300px;
  overflow: hidden;
  background-color: #f1f1f1;
}

.wine-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 20px;
}

.wine-info {
  padding: 20px;
  text-align: center;
}

.wine-name {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  color: var(--color-ocean);
  margin: 0 0 5px 0;
}

.wine-meta {
  font-size: 0.85rem;
  color: var(--color-cork);
  font-weight: bold;
  margin-bottom: 15px;
  text-transform: uppercase;
}

.wine-desc {
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.6;
}
</style>