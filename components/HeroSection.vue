<!-- components/HeroSection.vue -->
<template>
  <section class="hero">
    <div class="container">
      <h1 class="title">Navigare è un Arte</h1>
      <h2 class="subtitle">Vivi l'esperienza del Conscious Luxury nel blu del Mediterraneo</h2>
      
      <div class="actions">
        <button class="btn-primary">Scopri i Servizi</button>
        <button class="btn-secondary">Contattaci</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  /* Sfondo leggerissimo, tipo carta avorio o mare calmo */
  background: linear-gradient(180deg, #f1f5f9 0%, #ffffff 100%);
  padding: 100px 20px; /* Spazio sopra e sotto ampio */
  text-align: center; /* Tutto centrato */
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.title {
  font-size: 3.5rem;
  color: #0f172a; /* Blu scuro */
  margin-bottom: 1rem;
  line-height: 1.1;
  font-family: Georgia, serif; /* Font serif per il tocco elegante */
}

.subtitle {
  font-size: 1.25rem;
  color: #475569; /* Grigio medio */
  margin-bottom: 2.5rem;
  font-weight: 300;
}

.actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

/* Bottone Scuro (Primario) */
.btn-primary {
  background-color: #0f172a;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-primary:hover {
  background-color: #334155;
}

/* Bottone Chiaro (Secondario) */
.btn-secondary {
  background-color: transparent;
  border: 1px solid #0f172a;
  color: #0f172a;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-secondary:hover {
  background-color: #f1f5f9;
}
</style>