<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
    likes?: number
    greetingMessage?: string
  }>(),
  {
    title: 'Default Title',
    likes: 0,
    greetingMessage: 'Greetings',
  },
)

//const { foo = 'hello' } = defineProps<{ foo?: string }>()

// defineProps({
//   greetingMessage: String
// })
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Likes: {{ likes }}</p>
    <p>Greeting Message: {{ greetingMessage }}</p>
  </div>
</template>
