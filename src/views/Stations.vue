<template>
  <div class="stations">
    <div v-if="loading">
      <v-icon name="spinner" pulse></v-icon>
    </div>
    <div v-else class="station-grid">
      <div v-for="station in stationList" :key="station.id">
        <station-card :name="station.name" :id="station.id" :url="station.url"></station-card>
      </div>
    </div>



  </div>
</template>

<script>
import { getStations } from '@/services/stations.js'
import StationCard from '@/components/StationCard'

export default {
  name: 'Stations',
  components: {
    StationCard
  },
  data: () => ({
    stationList: [],
    loading: false
  }),
  mounted() {
    this.loading = true
    getStations.then(stationList => {
      this.stationList = stationList
      this.loading = false
      }).catch(err => console.error(err))
  }
}
</script>

<style lang="scss" scoped>
.stations {
 .station-grid {
    max-width: 1100px;
    margin: auto;
    display: grid;
    padding: .5rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
    z-index: 1000;
 }
}
</style>
