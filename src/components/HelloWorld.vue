<template>
  <div class="hello">
    {{weatherData}}
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },

  computed: { 
        ...mapState(['weatherData', 'errorStatus']),
        // ...map
  },

    methods: {
    ...mapActions(['fetchWeatherData'])
  },

  created() {
    this.fetchWeatherData();
    
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
