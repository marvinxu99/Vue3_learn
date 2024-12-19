import { ref, watch, onUnmounted } from 'vue'

export function useMouse(target: { value: EventTarget | null } = { value: window }) {
  const x = ref(0)
  const y = ref(0)

  const updateMousePosition = (event: Event) => {
    const mouseEvent = event as MouseEvent

    if (target.value instanceof HTMLElement) {
      const rect = target.value.getBoundingClientRect()
      x.value = mouseEvent.clientX - rect.left // X position relative to the box
      y.value = mouseEvent.clientY - rect.top // Y position relative to the box
    } else {
      x.value = mouseEvent.pageX
      y.value = mouseEvent.pageY
    }
  }

  // Watch for target changes and dynamically add/remove the event listener
  watch(
    () => target.value,
    (newTarget, oldTarget) => {
      if (oldTarget) {
        oldTarget.removeEventListener('mousemove', updateMousePosition)
      }
      if (newTarget) {
        newTarget.addEventListener('mousemove', updateMousePosition)
      }
    },
    { immediate: true },
  )

  // Cleanup on unmount
  onUnmounted(() => {
    if (target.value) {
      target.value.removeEventListener('mousemove', updateMousePosition)
    }
  })

  return { x, y }
}
