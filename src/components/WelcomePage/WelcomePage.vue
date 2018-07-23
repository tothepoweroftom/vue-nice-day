<template>
  <div class="hello">
    <h1>{{message}} I'm here to tell you if today's weather in {{location.name | capitalize }} will be a nice day for you!</h1>
    <h3 class="text-focus-in"> All I need from you is to answer a few questions.</h3>
    <ul class="text-focus-in">
      <li>
          <div class="question">
            
          <p class="text">Please select your ideal temperature range in degrees Celsius </p>

           <vue-slider class="preference-slider"  v-model="temperature" v-bind="temperatureSlider"></vue-slider>
        </div>
      </li>
      <li>
        <div class="question">

          <p class="text"> Please select your ideal wind speed range in km/h </p>

           <vue-slider  class="preference-slider"  v-model="windSpeed" v-bind="windSlider"></vue-slider>
  

        </div>
      </li>
      <li>
        <div class="question">
         <p class="text">Please select your ideal humidity % </p>
           <vue-slider class="preference-slider"   v-model="humidity" v-bind="humiditySlider"></vue-slider>

        </div>


      </li>
    </ul>
    <button id="submit-btn" @click="submit">Submit</button>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import VueSlider from 'vue-slider-component'
import SliderStyling from './SliderStyling.js'
import _ from 'lodash'

export default {
  name: 'HelloWorld',
  components: {
    VueSlider
  },
  data () {
    return {
      temperature: [10,20],
      windSpeed: [10,30],
      humidity: [50,60],

      temperatureSlider: SliderStyling.temperature,
      windSlider: SliderStyling.wind,
      humiditySlider: SliderStyling.humidity,
      message: 'Welcome!'

    }
  },

  mounted() {
    // Check user pref if exist, display as slider ranges
    if (_.isEmpty(this.userPreferences) === false) {
      this.message = 'Welcome back!'
      this.temperature = this.userPreferences.temperature
      this.windSpeed = this.userPreferences.wind.speed
      this.humidity = this.userPreferences.humidity
    }
  },

  computed: { 
        ...mapState(['weatherData', 'errorStatus', 'location', 'userPreferences']),
        // ...map
  },

    methods: {

      ...mapActions(['setUserPreferences']),

      ...mapActions(['calculateDay']),

      setDirection() {
        console.log()
      },

      submit() {

        // Set user preferences
        let preferences = {
          wind: {
            speed: this.windSpeed,
          },
          temperature: this.temperature,
          humidity: this.humidity
        }
        this.setUserPreferences(preferences)
        this.calculateDay()

        this.$router.push({ name: 'ResultsPage' })

      }
  },

  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#hello {
    text-align: left;
}

.question {
  display: flex;
 flex-direction: row;
 justify-content: flex-start;
 min-width:250px;
}

.select-style {
    border: 1px solid rgb(44, 44, 44);
    width: 100px;
    height:25px;
    overflow: hidden;
    margin-left:20px;
}

.select-style select {
    padding: 5px 8px;
    width: 130%;
    border: none;
    box-shadow: none;
    background: transparent;
    background-image: none;
    -webkit-appearance: none;
    cursor: pointer;

}

.select-style select:focus {
    outline: none;
}
.preference-slider {
  flex-basis: 50%;
  right:40px;
  margin-left: 100px;

}
#submit-btn {
  position: relative;
  left:85%;
  bottom:20px;
  width:100px;
  height:40px;
  font-size: 15px;
}
</style>
