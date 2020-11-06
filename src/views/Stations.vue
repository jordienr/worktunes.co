<template>
  <div class="stations">
    <div v-if="loading">
      <v-icon name="spinner" pulse></v-icon>
    </div>
    <div class="filters">
      <div class="input-group">
        <input type="checkbox" v-model="filters" name="filter" value="lofi" id="lofi">
        <label for="lofi">Lofi</label>
      </div>
      <div class="input-group">
        <input type="checkbox" v-model="filters" name="filter" value="jazz" id="jazz">
        <label for="jazz">Jazz</label>
      </div>
      <div class="input-group">
        <input type="checkbox" v-model="filters" name="filter" value="piano" id="piano">
        <label for="piano">Piano</label>
      </div>
      <div class="input-group">
        <input type="checkbox" v-model="filters" name="filter" value="guitar" id="guitar">
        <label for="guitar">Guitar</label>
      </div>
      <div class="input-group">
        <input type="checkbox" v-model="filters" name="filter" value="hasLyrics" id="hasLyrics">
        <label for="hasLyrics">hasLyrics</label>
      </div>
      <div class="input-group">
        <input type="checkbox" v-model="filters" name="filter" value="house" id="house">
        <label for="house">House</label>
      </div>
      <div class="input-group">
        <input type="checkbox" v-model="filters" name="filter" value="arcade" id="arcade">
        <label for="arcade">Arcade</label>
      </div>
    </div>
    <!--  -->
    <div v-if="!loading" class="station-grid">
      <div v-for="station in filteredStationList" :key="station.id">
        <station-card :name="station.name" :id="station.id" :url="station.url" :hashtags="station.hashtags"></station-card>
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
    filteredStationList: [],
    loading: false,
    filters: []
  }),
  computed: {
    mostPopular() {
      return this.stationList.filter(item => item.mostPopular === true)
    },
    otherStations() {
      return this.stationList.filter(item => !item.mostPopular)
    }
  },
  methods: {
    filter() {
      if (!this.filters.length) {
        this.filteredStationList = this.stationList
      } else {
        let newArr = []

        this.stationList.forEach(item => {          
          if (item.hashtags.some(hst => this.filters.some(filter => filter === hst))) {
            newArr.push(item)
          }
        })
        
        this.filteredStationList = newArr
      }
    }
  },
  mounted() {
    this.loading = true
    getStations.then(stationList => {
      this.stationList = stationList
      this.filteredStationList = stationList
      this.loading = false
      }).catch(err => console.error(err))
  },
  watch: {
    filters() {
      this.filter()
    }
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

.filters {
  display: flex;
  flex-wrap: wrap;
  margin: .5rem;
  max-width: 1100px;
  margin: .5rem auto;
  label {
    &::before {
      content: '#';
      color: $gray-500;
    }
  }
}
 .input-group {
   input {
     display: none;
   }
   input:checked + label {
     background-color: $gray-900;
   }
   label {
    padding: 10px 20px;
    color: white;
    font-family: $sans-serif;
    font-size: 1.2rem;
    letter-spacing: 1px;
    transition: .1s;
    display: inline-block;
    &:hover {
      cursor: pointer;
      transition: .1s;
      background: $gray-850;
    }
   }
 }
}
</style>
