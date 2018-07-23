<template>
  <div id="app">

    <!-- Taking this out, ran into difficulties -->
    <!-- <visualizer></visualizer> -->
    <div id="content">
        <router-view/>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import Visualizer from './components/Visualizer/Visualizer'
import _ from 'lodash'
export default {
  name: 'App',
  methods: {
    ...mapActions(['fetchWeatherData']),
        ...mapActions(['calculateDay'])

  },
  components: {
    Visualizer,
  },
  created() {
    this.fetchWeatherData();

    // If we already have set preferences - > results
    if (_.isEmpty(this.userPreferences) === false) {
      this.calculateDay();
      this.$router.push({name:"ResultsPage"})
    }
  },
  computed: {
    ...mapState(['userPreferences']),
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Raleway|Ubuntu');
@import './assets/styles/variables.scss';
@import './assets/styles/main.scss';
@import './assets/styles/animations.scss';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text;
  align-items: center;
  display: flex;
  flex-direction: column;
}

#content {
  background-color: $background;
  display: flex;
  flex-direction: column;
  margin-top: 20vh;
  max-width: 800px;
  min-height: 510px;
  padding: 32px;
  position: relative;
  width: 100%;
  z-index: 1;
}
</style>
