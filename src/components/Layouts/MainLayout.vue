<template>
    <div class="main-layout">
        <div class="bgcol"></div>
        <!-- Header? -->
        <main>
            <header>
                <h1 class="logo">
                    <router-link to="/">worktunes</router-link>
                </h1>
                <div class="menu-wrapper" >
                    <button class="menu-btn"  @click.stop="showMenu = !showMenu" >
                        <v-icon :name="showMenu ? 'window-close' : 'hamburger'" height="24"></v-icon>
                    </button>
                    <div class="menu-list" v-if="showMenu" tabindex="0" @focusout="showMenu = false">
                        <router-link to="about">About</router-link>
                        <div class="bottom-menu">
                            <button @click.prevent="sendFeedback">Send feedback</button>
                        </div>
                    </div>
                </div>
            </header>
            <slot></slot>
        </main>
        <div class="player-wrapper">
            <player></player>
        </div>

        <!-- Modal -->
        <modal v-if="modalOpen" @close="modalOpen = false" title="Send feedback">
            <contact-form></contact-form>
        </modal>
    </div>
</template>

<script>
import Player from '@/components/Player'
import Modal from '@/components/Organisms/Modal'
import ContactForm from '@/components/Organisms/ContactForm'

export default {
    name: 'MainLayout',
    components: {
        Player,
        Modal,
        ContactForm
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
            font-size: 1.2rem;
            letter-spacing: 1px;
        }
        .menu-wrapper {
            position: relative;
            .menu-btn {
                padding: 1rem;
                color: $gray-100;
                background: transparent;
                border: none;
            }
            .menu-list {
                position: absolute;
                right: 1rem;
                top: 2.37rem;
                display: flex;
                flex-direction: column;
                background-color: $gray-700;
                box-shadow: 0 4px 12px -4px #000;
                width: 200px;
                border-radius: 2px;
                > * {
                    padding: 1rem;
                }
                .bottom-menu {
                    button {
                        background-color: transparent;
                        border: none;

                        color: $gray-100;
                    }
                }
            }
        }
    }
}


@media only screen and (max-width: 600px) {
  .player-wrapper {
      z-index: 100;
      margin-bottom: 150px;
  }
}
</style>