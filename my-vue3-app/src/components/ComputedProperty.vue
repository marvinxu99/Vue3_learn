<script setup lang="ts">
//https://vuejs.org/guide/essentials/computed.html

import { ref, reactive, computed } from 'vue'

const author = reactive({
  name: 'John Doe',
  books: ['Vue 2 - Advanced Guide', 'Vue 3 - Basic Guide', 'Vue 4 - The Mystery'],
})

// a computed ref
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})

const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value
  },
  // setter
  set(newValue) {
    // Note: we are using destructuring assignment syntax here.
    ;[firstName.value, lastName.value] = newValue.split(' ')
  },
})

const changeName = () => (fullName.value = 'Wesley Xu')
</script>

<template>
  <p>
    Has published books: <span>{{ publishedBooksMessage }}</span>
  </p>
  <p>Full name is: {{ fullName }}</p>
  <button @click="changeName">Change Name</button>
</template>
