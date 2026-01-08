<!-- components/TheServices.vue -->
<script setup>
// Ricollegamento ai dati (simile a prima)
const { data: serviziData } = await useAsyncData('services', () => {
  return $fetch('https://mlgxcumg.api.sanity.io/v2021-10-21/data/query/production', {
    method: 'POST',
    body: {
      query: '*[_type == "service"]'
    }
  })
})
</script>

<template>
  <section class="services-section">
    <div class="container">
      
      <!-- Header Sezione -->
      <div class="section-header">
        <h2 class="section-title">Esperienze a Bordo</h2>
        <p class="section-subtitle">Il lusso di vivere il mare in modo consapevole.</p>
      </div>

      <!-- Griglia Servizi -->
      <div class="services-grid">
        <div v-for="s in serviziData?.result" :key="s._id" class="service-card">
          
          <!-- Testo -->
          <div class="service-content">
            <!-- Titolo con accento color sughero -->
            <h3 class="service-title">
              <span class="dot"></span>
              {{ s.title }}
            </h3>
            
            <!-- Descrizione pulita -->
            <p class="service-desc">{{ s.description }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Container Principale */
.services-section {
  background-color: white; /* Bianco per contrasto con la sezione vini sopra */
  padding: 100px 20px;
  color: var(--color-ocean);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Header */
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

/* Griglia (3 colonne su PC, 1 su cellulare) */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

/* Card Singola */
.service-card {
  background: #f8fafc; /* Un grigio chiarissimo appena accennato */
  border: 1px solid #e2e8f0;
  padding: 40px 30px;
  border-radius: 8px; /* Angoli dolci */
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

/* Effetto Hover elegante */
.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  border-color: var(--color-cork); /* Bordo sughero al passaggio */
}

/* Dettaglio decorativo (Pallino) */
.dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  background-color: var(--color-cork);
  border-radius: 50%;
  margin-right: 10px;
  vertical-align: middle;
}

/* Tipologia Card */
.service-content {
  text-align: left; /* Titolo a sinistra per questo stile */
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