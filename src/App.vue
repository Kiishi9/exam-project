<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import router from '@/router'

export default {
  name: 'App',
  setup() {
    return { }
  },
  components: { },
  router
}
</script>
