<script setup lang="ts">
// https://vuejs.org/guide/essentials/event-handling.html

import { ref } from 'vue'

function warn(message: string, event: Event) {
  // now we have access to the native event
  if (event) {
    event.preventDefault()
  }
  alert(message)
}

const text = ref('input')
</script>

<template>
  <h2>Event Handling</h2>

  <!-- using $event special variable -->
  <button @click="warn('Form cannot be submitted yet.', $event)">Submit</button>

  <!-- using inline arrow function -->
  <button @click="(event) => warn('Form cannot be submitted yet.', event)">Submit</button>

  <input v-model="text" />
  <p>text = {{ text }}</p>
</template>
