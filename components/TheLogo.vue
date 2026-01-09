<!-- components/TheLogo.vue -->
<template>
  <div class="logo-wrapper">
    <!-- Logo Vettoriale: Due scafi geometrici e sole color Sughero -->
    <svg viewBox="0 0 280 60" xmlns="http://www.w3.org/2000/svg">
      <!-- SOLE: E' diventato Sughero (d2b48c) per armonia con il sito Conscious Luxury -->
      <circle cx="35" cy="20" r="10" fill="#d2b48c" />
      
      <!-- SCAFO SINISTRO: Blu Navy (0f172a) -->
      <path d="M10 35 Q 25 50, 45 35" fill="none" stroke="#0f172a" stroke-width="3" stroke-linecap="round"/>
      
      <!-- SCAFO DESTRO: Blu Navy (0f172a) -->
      <path d="M25 35 Q 40 50, 60 35" fill="none" stroke="#0f172a" stroke-width="3" stroke-linecap="round"/>
      
      <!-- LINEA DEL MARE: Grigio chiaro (cbd5e1) -->
      <line x1="10" y1="45" x2="60" y2="45" stroke="#cbd5e1" stroke-width="1" />

      <!-- TESTO CATAMARAN: Blu Navy -->
      <text x="75" y="32" font-family="Arial, sans-serif" font-weight="bold" font-size="24" fill="#0f172a" letter-spacing="1">
        CATAMARAN
      </text>

      <!-- TESTO LUXURY: Grigio caldo/bronze (64748b) -->
      <text x="76" y="48" font-family="Georgia, serif" font-weight="normal" font-size="14" fill="#64748b" letter-spacing="4">
        LUXURY
      </text>
    </svg>
  </div>
</template>

<style scoped>
.logo-wrapper {
  display: flex;
  align-items: center;
}

/* Il SVG si adatta alla larghezza del contenitore */
svg {
  height: 60px;
  width: auto;
  cursor: pointer;
}
</style>
