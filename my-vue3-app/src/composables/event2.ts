// event.ts
// support selector strings as target.
//    useEventListener('#myButton', 'click', () => {
//       console.log('Button clicked!');
//    });

import { onMounted, onUnmounted } from 'vue'

type EventTargetType = EventTarget | null

export function useEventListener(
  target: EventTargetType | string,
  event: string,
  callback: EventListener,
): void {
  const resolveTarget = (): EventTargetType => {
    if (typeof target === 'string') {
      return document.querySelector(target)
    }
    return target
  }

  onMounted(() => {
    const resolvedTarget = resolveTarget()
    if (resolvedTarget) {
      resolvedTarget.addEventListener(event, callback)
    }
  })

  onUnmounted(() => {
    const resolvedTarget = resolveTarget()
    if (resolvedTarget) {
      resolvedTarget.removeEventListener(event, callback)
    }
  })
}
