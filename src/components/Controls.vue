<template>
    <div class="controls">
        <button :class="{playing: $store.state.playing}" @click="play">Play</button>
    </div>
</template>

<script>
export default {
    name: 'Controls',
    methods: {
        play() {
            this.$store.commit('setPlaying', !this.$store.state.playing)
        }
    }
}
</script>

<style lang="scss" scoped>
.playing {
    background-color: #434343;
    color: whitesmoke;
}
</style>