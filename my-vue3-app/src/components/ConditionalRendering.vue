<script setup lang="ts">
// https://vuejs.org/guide/essentials/conditional.html

import { ref } from 'vue'

const awesome = ref(true)
</script>

<template>
  <h1 v-if="awesome">Vue is awesome!</h1>
</template>
