<!-- pages/prezzi.vue -->
<script setup>
const inputPass = ref('')
const isAuthorized = useCookie('catamaran_auth')

// Chiediamo al server (server/api/login.post.ts)
const login = async () => {
  try {
    const response = await $fetch('/api/login', {
      method: 'POST',
      body: { password: inputPass.value }
    })

    if (response.success) {
      isAuthorized.value = true
    }
  } catch (error) {
    alert('Password errata')
    inputPass.value = ''
  }
}
</script>

<template>
  <main class="content">
    
    <!-- CASO A: UTENTE NON AUTORIZZATO -->
    <div v-if="!isAuthorized" class="login-box">
      <h1>Area Riservata</h1>
      <p>Inserisci la password per visualizzare i prezzi e i servizi esclusivi.</p>
      
      <input 
        type="password" 
        v-model="inputPass" 
        placeholder="Password..."
        class="pass-input"
      >
      <button @click="login" class="btn-login">Sblocca</button>
    </div>

    <!-- CASO B: UTENTE AUTORIZZATO -->
    <div v-else class="secret-content">
      <h1>Listino Prezzi & Up-Selling</h1>
      <p>Ecco i dettagli e i costi dei servizi speciali (Chef, Massaggi, etc.).</p>

      <!-- ESEMPIO DI LISTINO -->
      <div class="price-list">
        <div class="price-item">
          <strong>Chef a Bordo (Cena 5 Portate)</strong>
          <span>€ 450,00</span>
        </div>
        <div class="price-item">
          <strong>Percorso Benessere (1 ora)</strong>
          <span>€ 180,00</span>
        </div>
        <div class="price-item">
          <strong>Pack "Romantico" (Spumante + Fiori)</strong>
          <span>€ 120,00</span>
        </div>
      </div>
    </div>

  </main>
</template>

<style scoped>
.content {
  max-width: 800px;
  margin: 100px auto;
  padding: 0 20px;
  text-align: center;
  min-height: 60vh;
}

/* Stile Login */
.login-box {
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  border: 1px solid #e2e8f0;
}

.pass-input {
  padding: 12px;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  margin: 0 10px;
  font-size: 1rem;
  width: 200px;
}

.btn-login {
  padding: 12px 24px;
  background-color: var(--color-ocean);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
}

/* Stile Prezzi */
.price-list {
  margin-top: 40px;
  text-align: left;
}

.price-item {
  background: white;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #e2e8f0;
  font-size: 1.1rem;
}
</style>