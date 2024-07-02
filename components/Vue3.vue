<!-- components/Vue3.vue -->
<template>
  <div class="component">
    <h1>✅ Vue3 Component</h1>
    <h3>{{ message }}</h3>
    <p>Component using Vue3 latest Composition API</p>
    <button @click="count++">Clicked {{ count }} times</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('Hello from Vue3Component')
const count = ref(0)
</script>

<style>
.component {
    border: 1px solid black;
    margin: 2em;
    padding: 2em;
    border-radius: 15px;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    margin-bottom: 2em;
    margin-top: 2em;
}
</style>