<!-- components/TheLogo.vue -->
<template>
  <div class="logo-wrapper">
    <svg viewBox="0 0 300 60" xmlns="http://www.w3.org/2000/svg">
      <!-- Sole -->
      <circle cx="35" cy="20" r="10" fill="#d4af37" />
      <!-- Scafo Sinistro -->
      <path d="M10 35 Q 25 50, 45 35" fill="none" stroke="#0f172a" stroke-width="3" stroke-linecap="round"/>
      <!-- Scafo Destro -->
      <path d="M25 35 Q 40 50, 60 35" fill="none" stroke="#0f172a" stroke-width="3" stroke-linecap="round"/>
      <!-- Linea del mare -->
      <line x1="10" y1="45" x2="60" y2="45" stroke="#cbd5e1" stroke-width="1" />
      <!-- Testo CATAMARAN -->
      <text x="75" y="32" font-family="Arial, sans-serif" font-weight="bold" font-size="24" fill="#0f172a" letter-spacing="1">CATAMARAN</text>
      <!-- Testo LUXURY -->
      <text x="76" y="48" font-family="Georgia, serif" font-weight="normal" font-size="14" fill="#64748b" letter-spacing="4">LUXURY</text>
    </svg>
  </div>
</template>

<style scoped>
.logo-wrapper {
  display: flex;
  align-items: center;
}
svg {
  height: 60px;
  width: auto;
  cursor: pointer;
}
</style>