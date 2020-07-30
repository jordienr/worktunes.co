<template>
    <div class="main-layout">
        <!-- Header? -->
        <h1 class="logo">
            <router-link to="/">worktunes</router-link>
        </h1>
        <slot></slot>
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
    background: $gray-800;
    height: 100vh;
    .player-wrapper {
        position: fixed;
        bottom: 1rem;
        left: 1rem;
        right: 1rem;
    }
    .logo {
        font-size: 1.2rem;
        padding: 1rem;
        background-color: $gray-900;
        letter-spacing: 1px;
    }
}
</style>