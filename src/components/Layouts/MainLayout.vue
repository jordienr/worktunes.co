<template>
    <div class="main-layout">
        <div class="bgcol"></div>
        <!-- Header -->
        <main>
            <header>
                <h1 class="logo">
                    <router-link to="/">worktunes</router-link>
                </h1>
                <div class="menu-wrapper" >
                    <button class="feedback-btn" data-feedback-fish>Send feedback</button>
                    <router-link to="/about">About</router-link>
                </div>
                <FeedbackFish projectId="daee8d096c5a99" />
            </header>
            <slot></slot>
        </main>
        <div class="player-wrapper">
            <player></player>
        </div>
        <marquee class="marquee" width="100%" direction="left">
            If you want to support worktunes you can <a href="https://twitter.com/jrd_nrc" target="_blank">follow me on twitter</a> or <a href="https://buymeacoffee.com/joen">buy me a coffee</a>
        </marquee>
    </div>
</template>

<script>
import Player from '@/components/Player'
import Modal from '@/components/Organisms/Modal'
import { ContactForm } from '@/components/Organisms/'
import { FeedbackFish } from "@feedback-fish/vue";

export default {
    name: 'MainLayout',
    components: {
        Player,
        Modal,
        ContactForm,
        FeedbackFish
    },
    data: () => ({
        modalOpen: false,
        showMenu: false
    }),
    methods: {
        sendFeedback() {
            this.modalOpen = true
        }
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
        background-color: $gray-900;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;
        z-index: 1000;
        .logo {
            font-size: 1.4rem;
            margin: 0;
            letter-spacing: .4px;
            font-style: italic;
        }
        .menu-wrapper {
            position: relative;
            .feedback-btn {
                
            }
            a, button {
                padding: .8rem;
                color: $gray-100;
                background: transparent;
                border: none;
                font-family: $sans-serif;
                font-weight: 500;
                font-size: 1rem;
            }
        }
    }
}

.marquee {
    width: 100%;
    background-color: $gray-900;
    bottom: 0;
    color: $gray-300;
    padding: .4rem;
    font-family: 'Courier New', Courier, monospace;
    position: fixed;
}

@media only screen and (max-width: 600px) {
  .player-wrapper {
      z-index: 100;
      margin-bottom: 150px;
  }
}
</style>