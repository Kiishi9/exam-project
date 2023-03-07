import { computed } from 'vue'
import { useStore } from 'vuex'

export default function useCounter() {
  const store = useStore()

  const count = computed(() => store.getters.getCount)

  const increment = () => {
    store.dispatch('increment')
  }

  const decrement = () => {
    store.dispatch('decrement')
  }

  const reset = () => {
    store.dispatch('reset')
  }

  const setValue = value => {
    store.dispatch('setValue', value)
  }

  return {
    count,
    increment,
    decrement,
    reset,
    setValue
  }
}
