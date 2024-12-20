<script setup lang="ts">
import ComponentDemo from '@/components/ComponentDemo.vue'
</script>

<template>
  <main>
    <h1>Component Demo View</h1>
    <br />
    <ComponentDemo />
    <br />
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 50vh;
    display: flex;
    align-items: center;
  }
}
</style>
