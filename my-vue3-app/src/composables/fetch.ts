import { ref, watchEffect, toValue, type ComputedRef } from 'vue'

export function useFetch(url: string | ComputedRef) {
  const data = ref(null) // Use `any` for data
  const error = ref(null)

  const fetchData = () => {
    data.value = null
    error.value = null

    fetch(toValue(url)) // Automatically resolve Ref or static URL
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`)
        }
        return res.json()
      })
      .then((json) => {
        data.value = json
      })
      .catch((err) => {
        error.value = err
      })
  }

  watchEffect(() => {
    fetchData()
  })

  return { data, error }
}
