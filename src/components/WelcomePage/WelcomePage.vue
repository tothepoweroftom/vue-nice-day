<template>
  <div class="hello">
    <h1>Welcome! I'm here to tell you if today's weather in {{location.name | capitalize }} will be a nice day for you!</h1>
    <h3> All I need from you is to answer a few questions.</h3>
    <ul>
      <li>
          <div class="question">

          Please select your ideal temperature range in degrees Celsius

           <vue-slider  v-model="temperaturePreference" v-bind="temperatureSlider"></vue-slider>
        </div>
      </li>
      <li>
        <div class="question">

          Please select your ideal wind speed range and direction.

           <vue-slider  v-model="windSpeed" v-bind="windSlider"></vue-slider>
  

        </div>
      </li>
      <li>
        <div class="question">
        Please select your ideal rain range in mm
           <vue-slider  v-model="rainfallPreference" v-bind="rainSlider"></vue-slider>

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

export default {
  name: 'HelloWorld',
  components: {
    VueSlider
  },
  data () {
    return {
      temperaturePreference: [10,20],
      windSpeed: [10,30],
      rainfallPreference: [0,5],

      temperatureSlider: SliderStyling.temperature,
      windSlider: SliderStyling.wind,
      rainSlider: SliderStyling.rain,

    }
  },

  computed: { 
        ...mapState(['weatherData', 'errorStatus', 'location']),
        // ...map
  },

    methods: {

      ...mapActions(['setUserPreferences']),


      setDirection() {
        console.log()
      },

      submit() {

        // Set user preferences
        let preferences = {
          wind: {
            speed: this.windSpeed,
          },
          temperature: this.temperaturePreference,
          rain: this.rainfallPreference
        }
        this.setUserPreferences(preferences)

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
 margin:0px -0px;
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

#submit-btn {
  position: relative;
  left:85%;
  bottom:20px;
  width:100px;
  height:40px;
  font-size: 15px;
}
</style>
