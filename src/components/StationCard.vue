<template>
    <div class="station-card" @click="clickHandler" :class="{selected: selected}" @mouseover="hover = true" @mouseleave="hover = false">
        {{this.name}}
        <div class="emoji-wrapper" v-if="hover">
            <span v-for="(hashtag, index) in hashtags" :key="index">
                {{getEmoji(hashtag)}}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StationCard',
    props: {
        url: String,
        id: String,
        name: String,
        hashtags: Array
    },
    data: () => ({
        hover: false
    }),
    methods: {
        clickHandler() {
            this.$store.commit('setCurrentStation', this.url)
        },
        getEmoji(hashtag) {
            switch (hashtag) {
                case 'jazz':
                    return '🎺'
                case 'lofi':
                    return '🎧'
                case 'guitar':
                    return '🎸'
                case 'piano':
                    return '🎹'
            }
        }
    },
    mounted() {
    },
    computed: {
        selected() {
            if (this.$store.state.currentStation === this.url) { return true }
            else { return false }
        },
        emoji() {
            console.log(this.hashtags)
            return '💫'
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
    display: flex;
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