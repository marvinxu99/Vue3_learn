<template>
  <div>
    <button @click="fetchData" :disabled="state.loading">
      {{ state.loading ? 'Loading...' : 'Fetch Data' }}
    </button>
    <p>Response: {{ state.loading ? '' : state.data }}</p>
    <p v-if="state.data">Response: {{ state.data }}</p>
  </div>
</template>

<script setup lang="ts">
import { useExampleStore } from '@/stores/examplestore'

const exampleStore = useExampleStore()
const { state, fetchData } = exampleStore
</script>
