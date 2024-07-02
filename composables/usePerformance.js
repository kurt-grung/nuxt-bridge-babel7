import { ref } from 'vue'

export function usePerformance() {

    const result = ref(null)
    const timeTaken = ref(0)

    const measurePerformance = (fn, ...args) => {
        const startTime = performance.now()
        
        result.value = fn(...args)
        
        const endTime = performance.now()
        timeTaken.value = endTime - startTime

        console.log(`Function executed with result: ${result.value}`)
        console.log(`Execution time: ${timeTaken.value.toFixed(2)} milliseconds`)

    }

    return {
        result,
        timeTaken,
        measurePerformance,
    }
}