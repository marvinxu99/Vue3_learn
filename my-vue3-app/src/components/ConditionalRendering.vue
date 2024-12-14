<script setup lang="ts">
// https://vuejs.org/guide/essentials/conditional.html

import { ref } from 'vue'

const awesome = ref(true)
const type = ref('C')
</script>

<template>
  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else>Oh no 😢</h1>
  <div v-if="type === 'A'">A</div>
  <div v-else-if="type === 'B'">B</div>
  <div v-else-if="type === 'C'">C</div>
  <div v-else>Not A/B/C</div>
  <button @click="type = 'A'">Set to A</button>
  <button @click="type = 'B'">Set to B</button>
  <button @click="type = 'C'">Set to C</button>
  <button @click="type = 'D'">Set to D</button>
</template>
