<template>
    <div class="results">
        <button id="pref-btn" @click="navigatePreferences">Change Preferences</button>

        <h1> From the preferences that you have set I can tell you that it is a...</h1>
       
        <template v-if="result.total">
            <h1 style="color:green" class="text-focus-in">Nice Day!!</h1>
        </template>
        <template v-else>
            <h1 style="color:red" class="text-focus-in">Not a nice day :(</h1>
        </template>

        <div class="score-grid">
            <div id="temperature" class="score shadow-pop-bl" v-bind:class="{ 'nice': result.total===true, 'bad': result.total===false }">
                <h3 class="score-title">Temperature</h3>

                <h1 class="score-data">{{weatherData.main.temp}} &#176; C</h1>

                <img class="score-img" src="static/icons/thermometer.png"/>

            </div>
            <div id="wind" class="score shadow-pop-bl" v-bind:class="{ 'nice': result.total===true, 'bad': result.total===false }">
                <h3 class="score-title">Wind Speed</h3>
                <h1 class="score-data">{{weatherData.wind.speed}} km/h</h1>
                <img class="score-img" src="static/icons/flour-mill.png"/>

            </div>
            <div id="humidity" class="score shadow-pop-bl" v-bind:class="{ 'nice': result.total===true, 'bad': result.total===false }">
                <h3 class="score-title">Humidity</h3>
                <h1 class="score-data">{{weatherData.main.humidity}} %</h1>
                <img class="score-img" src="static/icons/rain.png"/>


            </div>

        </div>
    </div>
</template>

<script>

import {mapState} from 'vuex'

export default {

    methods: {
        navigatePreferences() {
            this.$router.push({name: 'WelcomePage'})
        }
    },

    computed: {
        ...mapState(['userPreferences', 'weatherData', 'result'])
    },

    mounted() {
        console.log("Front", this.result)

    }

}
</script>

<style>
.results {
    display: flex;
    flex-direction: column;
}

#pref-btn {
flex-basis: 20px;
width: 120px;
}

.score-grid {
    display:flex;
    flex-direction: row;
    width: 100%;
}

.score {
    width: 33%;
    height:300px;
    margin: 10px;
    border: 1px solid black;
    padding: 14px;
}

.score-img {
    margin: 40px 50px;
    width: 50%;
}

.nice {
    background: rgb(227, 255, 184);
}

.bad {
    background: rgb(255, 184, 184);
}

</style>
