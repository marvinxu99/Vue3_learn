// import { defineStore } from 'pinia'
// import { ref } from 'vue'

// export const useExampleStore = defineStore('examplestore', () => {
//   // State
//   const loading = ref(false)
//   const data = ref(null)

//   //Actions
//   const fetchData = async () => {
//     try {
//       loading.value = true // Set loading flag
//       // Simulated API call
//       const response = await new Promise((resolve) =>
//         setTimeout(() => resolve({ message: 'Hello from API' }), 2000),
//       )
//       data.value = response.message
//     } catch (error) {
//       console.error('Error fetching data:', error)
//     } finally {
//       loading.value = false // Reset loading flag
//     }
//   }

//   // Return State and Actions
//   return { loading, data, fetchData }
// })

import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useExampleStore = defineStore('examplestore', () => {
  // State
  const state = reactive({
    loading: false,
    data: null as string | null,
  })

  // heper function
  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

  // Actions
  const fetchData = async () => {
    try {
      state.loading = true // Set loading flag

      // Use the delay utility
      await delay(2000)

      // Simulated API response
      state.data = 'Hello from API'
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      state.loading = false // Reset loading flag
    }
  }

  // Return State and Actions
  return { state, fetchData }
})
