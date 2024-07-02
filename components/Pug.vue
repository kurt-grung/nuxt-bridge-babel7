<!-- components/Pug.vue -->
<template lang="pug">
div.component 
    h1.pug ✅ Pug Template 
    h3 {{ message }} 
</template>

<script setup>
import { ref } from 'vue'
const message = ref('Hello from Pug+Vue3 Component inside Bridge :)')
</script>

<style scoped>

.pug {
    color: black;
    font-size: 1.5em;
}

.component {
    border: 1px solid black;
    margin: 2em;
    padding: 2em;
    border-radius: 15px;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    height: auto;
    margin-bottom: 2em;
    margin-top: 2em;
}

</style>