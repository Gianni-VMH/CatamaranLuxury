<template>
  <div>
    <h1>Catamarano Luxury</h1>
    
    <h2>I nostri servizi:</h2>
    
    <!-- Cicliamo i dati ricevuti da Sanity -->
    <ul>
      <li v-for="s in servizi" :key="s._id" class="card">
        <!-- Nota: s.title e s.price (i nomi del database) -->
        <strong>{{ s.title }}</strong> - {{ s.price }}
        <p>{{ s.description }}</p>
      </li>
    </ul>

  </div>
</template>

<script setup>
import createClient from '@sanity/client'

const sanityClient = createClient({
  projectId: 'mlgxcumg',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false
})

const query = "*[_type == 'service']"
const { data: servizi } = await useAsyncData('servizi', () => sanityClient.fetch(query))
</script>

<style scoped>
/* CSS delle Card */
ul {
  list-style-type: none; /* Rimuove i pallini della lista */
  padding: 0;
}

div {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.card {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.1);
}

.card strong {
  display: block;
  font-size: 1.2em;
  margin-bottom: 5px;
}

.card p {
  color: #666;
  margin-top: 10px;
}
</style>