<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
    likes?: number
  }>(),
  {
    title: 'Default Title',
    likes: 0,
  },
)
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Likes: {{ likes }}</p>
  </div>
</template>
