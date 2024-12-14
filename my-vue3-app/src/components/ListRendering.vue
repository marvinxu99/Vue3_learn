<script setup lang="ts">
// https://vuejs.org/guide/essentials/list.html

import { ref, reactive } from 'vue'

const items = ref([
  { id: 1, message: 'Foo' },
  { id: 2, message: 'Bar' },
])

const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10',
})
</script>

<template>
  <h2>List Rendering</h2>
  <ul v-if="items.length">
    <li v-for="item in items" :key="item.id">item #{{ item.id }} - {{ item.message }}</li>
  </ul>
  <button @click="items.push({ id: 3, message: 'Baz' })">Add New Value</button>
  <button v-if="items.length" @click="items.pop()">Remove Value</button>
  <ul>
    <li v-for="(value, key) in myObject" :key="key">{{ key }}: {{ value }}</li>
  </ul>
  <div>
    V-for with a range:
    <span v-for="n in 10" :key="n">{{ n }} {{ ' ' }} </span>
  </div>
  <ul>
    <template v-for="item in items" :key="item.id">
      <li>{{ item.message }}</li>
      <li class="divider" role="presentation"></li>
    </template>
  </ul>
</template>
