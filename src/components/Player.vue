<template>
    <div class="player">
        <div class="controls">
            <button :class="{playing: state === 'playing'}" @click="buttonHandler">           
                <v-icon :name="icon" :pulse="state === 'loading'"></v-icon>
            </button>
            <div class="volume">
                <button @click="toggleMute">
                    <v-icon :name="muted ? 'volume-mute' : 'volume-up'"></v-icon>
                </button>
                <div class="volume-input" :class="{'volume-muted': muted}">
                    <v-slider v-model="volume" dotSize="24" width="120px" height="24px" dragOnClick tooltip="hover"></v-slider>
                </div>
            </div>
        </div>

        <div v-if="!!$store.state.currentStation.length" class="youtube-wrapper">
            <div class="youtube-overlay"></div>
            <div class="iframe-wrapper" ref="iframewrapper">
                <youtube 
                    class="yt-player"
                    ref="player"
                    @playing="() => { stateHandler('playing') }"
                    @paused="() => { stateHandler('paused') }"
                    @buffering="() => { stateHandler('loading') }"
                    @error="() => { stateHandler('error') }"
                    @ended="() => { stateHandler('ended') }"
                    @cued="() => { stateHandler('cued') }"
                    :video-id="$youtube.getIdFromUrl($store.state.currentStation)"
                ></youtube>    
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Player',
    data: () => ({
        playing: false,
        muted: false,
        loading: false,
        volume: 0,
        state: 'paused',
        icon: 'play'
    }),
    updated() {
    },
    methods: {
        toggleMute() {
            this.muted = !this.muted
        },
        buttonHandler() {
            if (!this.currentStation.length) {
                window.alert('Select a station first!')
            } else {
                if (this.state === 'paused') {
                    this.player.playVideo()    
                    this.player.getVolume().then(vol => this.volume = vol)
                } else if (this.state === 'playing') {
                    this.player.pauseVideo()
                }
            }
        },
        stateHandler(val) {
            this.state = val
        }
    },
    computed: {
        player() {
            return this.$refs.player.player
        },
        currentStation() {
            return this.$store.getters.currentStation
        },
    },
    watch: {
        muted(val) {
            val ? this.player.mute() : this.player.unMute()
        },
        volume(val) {
            this.player.setVolume(val)
        },
        state (val) {
            if (val === 'paused') {
                this.icon = 'play'
            } else if (val === 'loading') {
                this.icon = 'spinner'
            } else if (val === 'playing') {
                this.icon = 'pause'
            } else if (val === 'error') {
                window.alert('This station is not responding, please try another one.')
                this.state = 'paused'
            } else if (val === 'cued') {
                this.state = 'paused'
            }
        }
    },
    mounted() {
        // Necesary for iOS devices
        this.$refs.player.player.getIframe().then(iframe => iframe.src = iframe.src + '&playsinline=1')
    }
}
</script>

<style lang="scss" scoped>
.player {
    display: flex;
    align-items: center;
    justify-content: center;
    .youtube-wrapper {
        z-index: -100;
        .youtube-overlay {
            position: fixed;
            background-color: $gray-800;
            opacity: .8;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
        }
        .iframe-wrapper {
            position: fixed;
            bottom: 0;
            top: 0;
            left: 0;
            right: 0;
            filter: blur(12px);
            z-index: -1;
        }
    }
    .controls {
        position: fixed;
        display: flex;
        align-items: center;
        bottom: 1rem;
        z-index: 1000;
        button {
            height: 100px;
            width: 100px;
            background-color: $gray-900;
            opacity: .8;
            color: $gray-100;
            font-size: 1.2rem;
            transition: .1s;
            border: none;
            &:hover {
                opacity: 1;
                transition: .1s;
            }
        }
        .volume {
            display: flex;
            align-items: center;
            background-color: $gray-900;
            opacity: .8;
            &:hover {
                opacity: 1;
            }
            button {
                width: 64px;
            }
            .volume-input {
                padding: 0 1rem;
            }
        }
        .volume-muted {
            opacity: .5;
            pointer-events: none;
        }
    }
    /deep/ iframe {
        height: 100vh;
        width: 100vw;
    }
}


@media only screen and (max-width: 600px) {
  .youtube-wrapper {
      display: none
  }
  .player {
    .controls {
        button {
            opacity: 1;
        }
        .volume-input {
            span {
                opacity: 1
            }
        }
    }
  }
}

</style>