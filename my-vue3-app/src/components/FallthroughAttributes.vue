<script setup lang="ts">
import { useAttrs, computed } from 'vue'

defineOptions({
  inheritAttrs: false, // Prevent automatic application of $attrs to the root element
})

const attrs = useAttrs()
console.log(attrs)

const filteredAttrs = computed(() => {
  const rest = { ...attrs } // Exclude the `class` attribute
  delete rest.class
  return rest
})
</script>

<template>
  <div class="demo-wrapper">
    <div v-bind="$attrs">
      <input type="text" />
      <p v-bind="filteredAttrs">Fallthrough attributes: {{ $attrs }}</p>
      <p v-bind="filteredAttrs">Filtered Fallthrough attributes: {{ filteredAttrs }}</p>
    </div>
  </div>
</template>
