<script setup lang="ts">
import { ref } from 'vue'

// const props = defineProps(['api-url', 'per-page'])
// Define props with TypeScript types
// const props = defineProps<{
//   'api-url': string
//   'per-page': number
// }>()

const items = ref([])
const loading = ref(true)

// mock remote data fetching
setTimeout(() => {
  items.value = [
    { body: 'Scoped Slots Guide', username: 'Evan You', likes: 20 },
    { body: 'Vue Tutorial', username: 'Natalia Tepluhina', likes: 10 },
  ]
  loading.value = false
}, 1000)
</script>

<template>
  <ul>
    <li v-if="loading">Loading...</li>
    <li v-else-if="!items.length">No items available.</li>
    <li v-for="item in items" :key="item.username">
      <slot name="item" v-bind="item" />
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 5px;
  background: linear-gradient(315deg, #42d392 25%, #647eff);
}
li {
  padding: 5px 20px;
  margin: 10px;
  background: #fff;
}
</style>
