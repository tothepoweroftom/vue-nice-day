<template>
  <div id="app">
    <div id="content">
        <transition name="shrink" mode="out-in">
        <router-view/>
        </transition>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import _ from 'lodash'
export default {
  name: 'App',
  methods: {
    ...mapActions(['fetchWeatherData'])
  },
  created() {
    this.fetchWeatherData();
    if (_.isEmpty(this.userPreferences) === false) {
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
  border: 1px solid rgb(201, 200, 200);
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
