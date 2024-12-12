<script setup lang="ts">
import TheExample from '../components/ExampleComponent.vue'
import HelloWorld from '../components/HelloWorld.vue'
import CounterComponent from '../components/CounterComponent.vue'
</script>

<template>
  <main>
    <h2>TheExample Component</h2>
    <TheExample />
    <br />
    <h2>CounterComponent</h2>
    <CounterComponent />
    <br />
    <div class="about">
      <h1>This is an about page</h1>
    </div>
    <HelloWorld msg="Test Msg" />
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
