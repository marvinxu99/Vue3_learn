<script setup lang="ts">
import { ref } from 'vue'

const items = ref(['Apple', 'Orange', 'Mango', 'Strawberry'])

const addItem = () => items.value.push('other')

const removeItem = () => items.value.pop()
</script>

<template>
  <div>
    <button @click="addItem">Add an Item</button>
    <button @click="removeItem">Remove an Item</button>
  </div>
  <TransitionGroup name="list" tag="ul">
    <li v-for="item in items" :key="item">
      {{ item }}
    </li>
  </TransitionGroup>
</template>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
