<!-- components/MyHeader.vue -->
<template>
  <header class="main-header">
    <div class="container">
      
      <!-- Qui puntiamo al Logo. Dato che il server è nuovo, l'auto-import dovrebbe funzionare -->
      <TheLogo />

       <nav class="nav-menu">
        <ul>
          <!-- Home: Torna in cima -->
          <li><a href="/">Home</a></li>
          <!-- Servizi: Scorre alla sezione Servizi -->
          <li><a href="#servizi">Servizi</a></li>
          <!-- Chi Siamo: Scorre in fondo (al footer se metti un ID, o usiamo #wines per ora) -->
          <li><a href="#footer">Chi Siamo</a></li>
          <!-- Prenota: Apre l'email (Il modo elegante per i siti di lusso senza form) -->
          <li><a href="mailto:info@catamaranluxury.com?subject=Richiesta%20Catamarano" class="btn-prenota">Prenota</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.main-header {
  background-color: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  padding: 0.5rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-menu ul {
  display: flex;
  list-style: none;
  gap: 2rem;
  align-items: center;
  margin: 0;
  padding: 0;
}

.nav-menu a {
  text-decoration: none;
  color: #334155;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.nav-menu a:hover {
  color: #0f172a;
}

.btn-prenota {
  background-color: #0f172a;
  color: #fff !important;
  padding: 0.5rem 1.2rem;
  border-radius: 4px;
}

.btn-prenota:hover {
  background-color: #1e293b;
}
</style>