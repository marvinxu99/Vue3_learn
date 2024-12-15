<script setup lang="ts">
import { useTemplateRef, onMounted } from 'vue'

// the first argument must match the ref value in the template
const input = useTemplateRef('my-input')

onMounted(() => {
  if (input.value) {
    input.value.focus()
  }
})
</script>

<template>
  <h2>Template Ref Example</h2>
  <input ref="my-input" />
</template>
