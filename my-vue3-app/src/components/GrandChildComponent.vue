<script setup lang="ts">
import { inject } from 'vue'

const message = inject('message')

const { location, updateLocation } = inject('location')
</script>

<template>
  <p>Message to grand child: {{ message }}</p>

  <p>Location is: {{ location }}</p>
  <button @click="updateLocation">Update Location from GrandChildComponent</button>
</template>
