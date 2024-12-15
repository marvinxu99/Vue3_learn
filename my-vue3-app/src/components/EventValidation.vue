<script setup lang="ts">
const emit = defineEmits({
  // No validation
  click: null,

  // Validate submit event with typed payload
  submit: (payload: { email: string; password: string }) => {
    const { email, password } = payload
    if (email && password) {
      return true
    } else {
      console.warn('Invalid submit event payload!')
      return false
    }
  },
})

function submitForm(email: string, password: string) {
  emit('submit', { email, password })
}
</script>

<template>
  <button @click="submitForm('test@example.com', 'password123')">Submit</button>
</template>
