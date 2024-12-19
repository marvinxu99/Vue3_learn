<template>
  <div ref="box" style="width: 200px; height: 200px; border: 1px solid black">
    Mouse Position in Box: X = {{ x }}, Y = {{ y }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useMouse } from '@/composables/mouse2'

const box = ref<HTMLElement | null>(null)

const { x, y } = useMouse(box)
</script>
