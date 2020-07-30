<template>
    <div class="playing-now">
        <youtube width="100" ref="player" height="100" :video-id="$youtube.getIdFromUrl($store.state.currentStation)" ></youtube>
    </div>
</template>

<script>
export default {
    name: 'PlayingNow',
    mounted() {
        this.player.playVideo()
    },
    updated() {
        this.player.playVideo()
    },
    computed: {
        player() {
            return this.$refs.player.player
        }
    }
}
</script>

<style lang="scss" scoped>
.playing-now {
}
</style>