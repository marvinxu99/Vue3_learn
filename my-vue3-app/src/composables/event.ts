// event.ts
import { onMounted, onUnmounted } from 'vue'

export function useEventListener(
  target: EventTarget | null,
  event: string,
  callback: EventListener,
): void {
  // Ensure target is valid before adding or removing the event listener
  onMounted(() => {
    if (target) {
      target.addEventListener(event, callback)
    }
  })

  onUnmounted(() => {
    if (target) {
      target.removeEventListener(event, callback)
    }
  })
}
