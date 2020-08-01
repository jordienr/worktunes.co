<template>
    <div class="cookie-noti">
        This website uses cookies to ensure you get the best experience on our website. <router-link to="/cookies">Learn more</router-link>
        <button @click="$emit('accept')">Okay!</button>
    </div>
</template>

<style lang="scss" scoped>
.cookie-noti {
    background-color: $gray-700;
    color: $gray-100;
    padding: 1rem;
    z-index: 1000;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    font-family: $sans-serif;
    display: flex;
    flex-direction: column;
    button {
        display: block;
        padding: 1rem;
        margin-top: 1rem;
        background: $gray-900;
        color: $gray-100;
        font-size: 1.2rem;
        border: none;
    }
}
</style>