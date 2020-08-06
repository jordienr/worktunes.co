<template>
  <div id="app" class="app">
    <div class="info" v-if="technicalProblems">
      ⚠ We are having some technical problems and are currently working on fixing it.
      <span @click="technicalProblems = false">Close</span>
    </div>
    <div class="info" v-if="isMobile">
      ⚠ Due to mobile limitations worktunes might not work on your mobile device. We recommend you use it from a PC or Mac 😢
      <span @click="isMobile = false">Okay</span>
    </div>
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
import { isMobile } from '@/util/browser.js'

export default {
  name: 'App',
  components: {
    MainLayout,
    CookieNotif,
  },
  data: () => ({
    showCookieNotif: true,
    technicalProblems: false,
    isMobile: false
  }),
  methods: {
    acceptCookies() {
      setCookie('cookiesAccepted', 'true', 30)
      this.showCookieNotif = false
    }
  },
  mounted() {
    let cookie = getCookie('cookiesAccepted')

    if (cookie) {
      this.showCookieNotif = false
    }

    this.isMobile = isMobile()
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
  .info {
    background-color: $main-100;
    padding: .4rem;
    font-family: $sans-serif;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      color: $gray-900;
      background-color: $main-300;
      border-radius: 4px;
      padding: .5rem;
      &:hover {
        cursor: pointer;
      }
    }
  }
</style>
