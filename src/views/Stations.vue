<template>
  <div class="stations">
    <h1>Stations</h1>
    <div v-for="station in stationList" :key="station.id">
      <p>{{station.id}}</p>
      <p>{{station.name}}</p>
      <p>{{station.url}}</p>
    </div>
  </div>
</template>

<script>
import { getStations } from '@/services/stations.js'

export default {
  name: 'Stations',
  components: {
  },
  data: () => ({
    stationList: [],
    loading: false
  }),
  mounted() {
    this.loading = true
    getStations.then(stationList => {
      this.stationList = stationList
      }).catch(err => console.error(err))
  }
}
</script>

<style lang="scss" scoped>
.stations {
}
</style>
