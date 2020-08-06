<template>
    <div class="station-card" @click="clickHandler" :class="{selected: selected}" @mouseover="hover = true" @mouseleave="hover = false">
        <p class="title">
            {{this.name}}
        </p>
        <div class="hashtag-wrapper" v-if="hover || selected">
            <span v-for="(hashtag, index) in hashtags" :key="index">
                {{hashtag}}
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
            this.$analytics.logEvent('Select station', {
                station_name: this.name
            })
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
            return '💫'
        }
    }
}
</script>

<style lang="scss" scoped>
.station-card {
    height: 100px;
    padding: .25rem .5rem;
    font-family: $sans-serif;
    transition: .1s;
    border-radius: 2px;
    letter-spacing: .5px;
    color: $gray-100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    &:hover {
        transition: .1s;
        cursor: pointer;
        background-color: $gray-850;
    }
    .title {
        font-size: 1.4rem;
        margin-bottom: .5rem;
    }
    .hashtag-wrapper {
        position: absolute;
        bottom: 1.6rem;
        span {
            color: $gray-400;
            margin-right: .5rem;
        }
        span::before {
            margin: 0;
            content: '#';
            color: $gray-600;
        }
    }
}
.selected {
    background-color: $gray-900;
}
</style>