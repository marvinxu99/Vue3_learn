<script setup lang="ts">
// example of supporting v-model modifier

const [model, modifiers] = defineModel({
  set(value: string) {
    if (modifiers.capitalize) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
    return value
  },
})

console.log(modifiers) // { capitalize: true }
</script>

<template>
  <input type="text" v-model="model" />
  <p>Fallthrough attributes: {{ $attrs }}</p>
</template>
