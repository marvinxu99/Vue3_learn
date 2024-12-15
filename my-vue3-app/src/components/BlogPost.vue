<!-- BlogPost.vue -->
<script setup lang="ts">
defineProps(['title'])
defineEmits(['enlarge-text']) // Optional
</script>

<template>
  <div class="blog-post">
    <h4>{{ title }}</h4>
    <button @click="$emit('enlarge-text')">Enlarge text</button>
  </div>
</template>
