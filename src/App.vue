<template>
  <div id="app" class="app">
    <main-layout>
      <router-view/>
    </main-layout>
      <cookie-notif v-if="showCookieNotif" @accept="acceptCookies"></cookie-notif>
  </div>
</template>

<script>
import MainLayout from '@/components/Layouts/MainLayout'
import CookieNotif from '@/components/CookieNotif'
import {setCookie, getCookie} from '@/services/cookies.js'

export default {
  name: 'App',
  components: {
    MainLayout,
    CookieNotif
  },
  data: () => ({
    showCookieNotif: true
  }),
  methods: {
    acceptCookies() {
      setCookie('cookiesAccepted', 'true', 30)
      this.showCookieNotif = false
    }
  },
  mounted() {
    let cookie = getCookie('cookiesAccepted')

    console.log(cookie)

    if (cookie) {
      this.showCookieNotif = false
    }
  }
}
</script>

<style lang="scss">
.app {
  // This line of code is necessary for vue to load the global styles like reset.scss or base.scss
}
</style>

<style lang="scss" scoped>
  .cookie-wrapper {
  }
</style>
