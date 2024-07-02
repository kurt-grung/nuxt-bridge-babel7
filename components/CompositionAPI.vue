<template>
  <div class="component">
    <h1>✅ Vue3 Component</h1>
    <h3>{{ message }}</h3>
    <p>Component using Vue3 latest Composition API</p>
    <button @click="count++">Clicked {{ count }} times</button>

    <h3 class="perf">Performance Measurement</h3> 
    <p>Function result: {{ result }}</p> 
    <p>Execution time: {{ timeTaken }} milliseconds</p>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { usePerformance } from '../composables/usePerformance'
import { useConstants } from '../composables/useConstants'

const { result, timeTaken, measurePerformance } = usePerformance()
const { perMaxLen } = useConstants()

const message = ref('Hello from Vue3Component')
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

.perf {
  margin-top: 1em;
}
</style>
