import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentStation: '',
    playing: false,
    volume: 0
  },
  mutations: {
    setCurrentStation(state, payload) {
      state.currentStation = payload
    },
    setPlaying(state, payload) {
      state.playing = payload
    },
    setVolume(state, payload) {
      state.volume = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
