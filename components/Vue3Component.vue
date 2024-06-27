<!-- components/Vue3Component.vue -->
<template>
  <div>
    <h1>{{ message }}</h1>
    <p>This is a Nuxt3 component using the Composition API.</p>
    <button @click="count++">Clicked {{ count }} times</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('Hello from Vue3Component')
const count = ref(0)
</script>