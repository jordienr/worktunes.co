<template>
    <div class="station-card" @click="clickHandler" :class="{selected: selected}">
        {{this.name}}
        <span v-if="selected">🎶</span>
    </div>
</template>

<script>
export default {
    name: 'StationCard',
    props: {
        url: String,
        id: String,
        name: String,
    },
    methods: {
        clickHandler() {
            this.$store.commit('setCurrentStation', this.url)
        }
    },
    mounted() {
    },
    computed: {
        selected() {
            if (this.$store.state.currentStation === this.url) { return true }
            else { return false }
        }
    }
}
</script>

<style lang="scss" scoped>
.station-card {
    padding: 2rem;
    font-family: $sans-serif;
    font-size: 1.2rem;
    transition: .1s;
    border-radius: 2px;
    letter-spacing: .5px;
    color: $gray-100;
    &:hover {
        transition: .1s;
        cursor: pointer;
        background-color: $gray-850;
    }
}
.selected {
    background-color: $gray-900;
}
</style>