<template>
    <div class="main-layout">
        <div class="bgcol"></div>
        <!-- Header? -->
        <main>
            <header>
                <h1 class="logo">
                    <router-link to="/">worktunes</router-link>
                </h1>
            </header>
            <slot></slot>
        </main>
        <div class="player-wrapper">
            <player></player>
        </div>
    </div>
</template>

<script>
import Player from '@/components/Player'

export default {
    name: 'MainLayout',
    components: {
        Player
    }
}
</script>

<style lang="scss" scoped>
.main-layout {
    .bgcol {
        background-color: $gray-800;
        position: fixed;
        left: 0;
        bottom: 0;
        right: 0;
        top: 0;
        z-index: -100;
    }
    header {
        position: sticky;
        top: 0;
    }
    .logo {
        font-size: 1.2rem;
        padding: 1rem;
        background-color: $gray-900;
        letter-spacing: 1px;
    }
}


@media only screen and (max-width: 600px) {
  .player-wrapper {
      z-index: 100;
      margin-bottom: 150px;
  }
}
</style>