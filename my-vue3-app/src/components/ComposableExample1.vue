<template>
  <div>
    <p>Mouse Position: X = {{ x }}, Y = {{ y }}</p>
  </div>
</template>

<script setup lang="ts">
import { useMouse } from '@/composables/mouse'

const { x, y } = useMouse()
</script>
