<!-- components/Pug.vue -->
<template lang="pug">
div.component 
    h1.pug ✅ Pug Template 
    h3 {{ message }} 

    h3.perf Performance Measurement 
    p Function result: {{ result }}
    p Execution time: {{ timeTaken }} milliseconds

</template>

<script setup>
import { ref, onMounted } from 'vue'
const message = ref('Hello from Pug+Vue3 Component inside Bridge :)')

import { usePerformance } from '../composables/usePerformance'
import { useConstants } from '../composables/useConstants'

const { result, timeTaken, measurePerformance } = usePerformance()
const { perMaxLen } = useConstants()
const count = ref(0)

const runTest = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum
}

onMounted(() => {
  measurePerformance(runTest, perMaxLen)
})

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

.perf {
    margin-top: 1em;
}

</style>