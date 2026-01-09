<!-- components/TheLogo.vue -->
<template>
  <div class="logo-wrapper">
    <!-- Immagine diretta (Vettoriale ma non codice) -->
    <img 
      src="/logo.png" 
      alt="Catamarano Luxury Logo"
      class="logo-img"
    >
  </div>
</template>

<style scoped>
.logo-wrapper {
  display: flex;
  align-items: center;
}

/* La tua immagine sara' alta 60px per adattarsi all'header */
.logo-img {
  height: 60px;
  width: auto;
  cursor: pointer;
  object-fit: contain;
}
</style>
