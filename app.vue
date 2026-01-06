<!-- app.vue -->
<script setup>
// Manteniamo l'import pulito che ha funzionato
import MyHeader from '~/components/MyHeader.vue'
</script>

<template>
  <div>
    <MyHeader />

    <!-- NUOVO: Inseriamo la Hero Section qui -->
    <HeroSection />

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
/* Qui puoi mettere un po' di padding per spaziare le sezioni */
.services-section {
  max-width: 1000px;
  margin: 50px auto;
  padding: 0 20px;
}
</style>