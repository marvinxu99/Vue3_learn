// mouse.js
import { ref } from 'vue'
import { useEventListener } from './event2'

export function useMouse(target: EventTarget | null = window) {
  const x = ref(0)
  const y = ref(0)

  useEventListener(target, 'mousemove', (event: Event) => {
    const mouseEvent = event as MouseEvent // Explicitly cast to MouseEvent
    x.value = mouseEvent.pageX
    y.value = mouseEvent.pageY
  })

  return { x, y }
}
