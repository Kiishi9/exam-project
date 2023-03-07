<template>
    <div class="counter">
      <h1>Counter: {{ count }}</h1>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="reset">Reset</button>
      <input type="number" v-model.number="value" />
      <button @click="setValue(value)">Set Value</button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import useCounter from '@/useCounter'
  
  export default {
    setup() {
      const { count, increment, decrement, reset, setValue } = useCounter()
  
      const value = ref(0)
  
      return {
        count,
        increment,
        decrement,
        reset,
        setValue,
        value
      }
    }
  }
  </script>
  
  <style>
  .counter {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  </style>
  