<template>
  <div :class="`alert-box alert-${type}`" role="alert">
    <p>
      <strong v-if="defaultMessage">{{ defaultMessage }}</strong>
    </p>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'error', // Default to "error" type
  },
})

const defaultMessage = computed(() => {
  switch (props.type) {
    case 'success':
      return 'This is a Success Message'
    case 'warning':
      return 'This is a Warning Message'
    default:
      return 'Error!'
  }
})
</script>

<style scoped>
.alert-box {
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 4px;
  font-family: Arial, sans-serif;
}

.alert-error {
  border: 1px solid red;
  background-color: #ffe6e6;
  color: #a94442;
}

.alert-warning {
  border: 1px solid orange;
  background-color: #fff4e6;
  color: #856404;
}

.alert-success {
  border: 1px solid green;
  background-color: #e6ffe6;
  color: #155724;
}
</style>
