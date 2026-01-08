<!-- pages/index.vue -->
<script setup>
// Importiamo i componenti necessari
import HeroSection from '~/components/HeroSection.vue'
import TheServices from '~/components/TheServices.vue'
import TheWine from '~/components/TheWine.vue'
</script>

<template>
  <div class="page-home">
    <!-- Contenuto Principale -->
    <HeroSection />
    <TheServices />
    <TheWine />
  </div>
</template>

<style scoped>
/* Stili specifici per la home se servono */
.page-home {
  min-height: 100vh;
}
</style>