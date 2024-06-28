<!-- components/Vue3Component.vue -->
<template>
  <div class="component">
    <h1>Vue3 Component</h1>
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
    margin-bottom: 2em;
}
</style>