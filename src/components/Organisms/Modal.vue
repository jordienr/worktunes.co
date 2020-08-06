<template>
    <div class="modal">
        <div class="backdrop" @click="close"></div>
        <div class="modal-content">
            <div class="header">
                <h2>{{title}}</h2>
                <button @click="close">Close</button>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    props: {
        title: String
    },
    methods: {
        close() {
            this.$emit('close')
        }
    }
}
</script>

<style lang="scss" scoped>
.modal {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    .backdrop {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
        background-color: $gray-900;
        opacity: .8;
    }
    .modal-content {
        .header {
            display: flex;
            padding-bottom: 1rem;
            border-bottom: 1px solid $gray-600;
            h2 {
                color: $gray-900;
                font-family: $sans-serif;
            }
            button {
                border: none;
                background: transparent;
                margin-left: auto;
            }
        }
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        position: fixed;
        z-index: 1000;
        background-color: $gray-500;
        padding: 1rem 2rem;
        box-shadow: 0 4px 12px -4px #000;
        border-radius: 2px;
    }
}
</style>