<script setup lang="ts">
import TheExample from '../components/ExampleComponent.vue'
</script>

<template>
  <main>
    <TheExample />
    <div class="about">
      <h1>This is an about page</h1>
    </div>
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
