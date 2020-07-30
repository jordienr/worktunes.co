<template>
  <div id="app" class="app">
    <main-layout>
      <router-view/>
    </main-layout>
  </div>
</template>

<script>
import MainLayout from '@/components/Layouts/MainLayout'

export default {
  name: 'App',
  components: {
    MainLayout
  }
}
</script>

<style lang="scss">
.app {
  // This line of code is necessary for vue to load the global styles like reset.scss or base.scss
}
</style>

<style lang="scss" scoped>
.app {
}
</style>
