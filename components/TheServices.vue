<!-- components/TheServices.vue -->
<script setup>
const { data: serviziData } = await useAsyncData('services', () => {
  return $fetch('https://mlgxcumg.api.sanity.io/v2021-10-21/data/query/production', {
    method: 'POST',
    body: {
      query: '*[_type == "service"] | order(order asc) { ..., image { asset->{ url } } }'
    }
  })
})
</script>

<template>
 <section id="servizi" class="services-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Esperienze a Bordo</h2>
        <p class="section-subtitle">Il lusso di vivere il mare in modo consapevole.</p>
      </div>

      <div class="services-grid">
        <div v-for="s in serviziData?.result" :key="s._id" class="service-card">
          
          <div class="service-image-box">
            <img 
              v-if="s.image" 
              :src="`${s.image.asset.url}?w=800&q=80`" 
              :alt="s.title" 
              class="service-img"
            >
          </div>

          <div class="service-content">
            <h3 class="service-title">
              <span class="dot"></span>
              {{ s.title }}
            </h3>
            <p class="service-desc">{{ s.description }}</p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  background-color: white;
  padding: 100px 20px;
  color: var(--color-ocean);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-title {
  font-family: var(--font-serif);
  font-size: 2.5rem;
  color: var(--color-ocean);
  margin-bottom: 15px;
}

.section-subtitle {
  color: var(--color-gold);
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 0.9rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

.service-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.service-image-box {
  height: 250px;
  overflow: hidden;
}

.service-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.service-card:hover .service-img {
  transform: scale(1.05);
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  border-color: var(--color-cork);
}

.service-content {
  padding: 30px;
  text-align: left;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  background-color: var(--color-cork);
  border-radius: 50%;
  margin-right: 10px;
  vertical-align: middle;
}

.service-title {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: var(--color-ocean);
  display: flex;
  align-items: center;
}

.service-desc {
  font-size: 1rem;
  color: #64748b;
  line-height: 1.7;
  font-weight: 300;
}
</style>