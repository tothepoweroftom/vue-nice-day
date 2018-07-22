<template>
  <div class="hello">
    
  </div>
</template>

<script>
import axios from '../plugins/axios.js'

export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },

  mounted() {
    this.getWeatherData();
  },

  methods: {
    async getWeatherData() {
      let apiKey = '9c509a497e575d217c615e84e05679ea'

      let city = 'budapest'; 
        let response = await axios.get(`?q=${city}&appid=${apiKey}`)
        console.log(response);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
