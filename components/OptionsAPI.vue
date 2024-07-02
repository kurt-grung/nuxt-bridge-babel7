<template>
    <div class="component">
      <h1>✅ Vue2 Component</h1>
      <h3>{{ message }}</h3>
      <p>Component using Vue2 Options API</p>
      <button @click="incrementCount">Clicked {{ count }} times</button>
  
      <h3 class="perf">Performance Measurement</h3> 
      <p>Function result: {{ result }}</p> 
      <p>Execution time: {{ timeTaken }} milliseconds</p>
    </div>
  </template>
  
  <script>
  import { useConstants } from '../composables/useConstants'
  
  export default {
    data() {
      return {
        message: 'Hello from Vue2Component',
        count: 0,
        result: null,
        timeTaken: 0
      }
    },
    methods: {
      incrementCount() {
        this.count++
      },
      runTest(n) {
        let sum = 0
        for (let i = 1; i <= n; i++) {
          sum += i
        }
        return sum
      },
      measurePerformance(fn, arg) {
        const startTime = performance.now()
        this.result = fn(arg)
        const endTime = performance.now()
        this.timeTaken = endTime - startTime
        console.log(`Function executed with result: ${this.result}`)
        console.log(`Execution time: ${this.timeTaken.toFixed(2)} milliseconds`)
      }
    },
    mounted() {
      const { perMaxLen } = useConstants()
      this.measurePerformance(this.runTest, perMaxLen)
    }
  }
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