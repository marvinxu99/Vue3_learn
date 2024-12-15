<script setup lang="ts">
import OptionsAPIExample from '../components/APIOptionsExample.vue'
import CompositionAPIExample from '../components/APICompositionExample.vue'
import HelloWorld from '../components/HelloWorld.vue'
import CounterComponent from '../components/CounterComponent.vue'
import ComputedProperty from '@/components/ComputedProperty.vue'
import ConditionalRendering from '@/components/ConditionalRendering.vue'
import ListRendering from '@/components/ListRendering.vue'
import EventHandling from '@/components/EventHandling.vue'
import FormInputBinding from '@/components/FormInputBinding.vue'
import WatchersExample from '@/components/WatchersExample.vue'
import TemplateRefExample from '@/components/TemplateRefExample.vue'
</script>

<template>
  <main>
    <h2>OptionsAPIExample Component</h2>
    <OptionsAPIExample />
    <br />
    <br />
    <h2>CompositionAPIExample Component</h2>
    <CompositionAPIExample />
    <br />
    <br />
    <h2>CounterComponent</h2>
    <CounterComponent />
    <br />
    <br />
    <h2>HelloWorld Component</h2>
    <HelloWorld msg="Test Msg" />
    <br />
    <br />
    <h2>Computed Property</h2>
    <ComputedProperty />
    <br />
    <h2>Conditonal Rendering</h2>
    <ConditionalRendering />
    <br />
    <list-rendering />
    <br />
    <EventHandling />
    <br />
    <FormInputBinding />
    <br />
    <WatchersExample />
    <br />
    <TemplateRefExample />
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
