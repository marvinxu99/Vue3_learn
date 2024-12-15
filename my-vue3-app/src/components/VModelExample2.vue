<script setup lang="ts">
// https://vuejs.org/guide/components/v-model.html

const firstName = defineModel('firstName')
const lastName = defineModel('lastName')
</script>

<template>
  <input type="text" v-model="firstName" />
  <input type="text" v-model="lastName" />
</template>
