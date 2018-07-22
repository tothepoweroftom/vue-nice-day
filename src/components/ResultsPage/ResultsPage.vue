<template>
    <div>
        <button @click="navigatePreferences">Change Preferences</button>

        <h1> From the preferences that you have set I can tell you that it is a...</h1>
        <h2 style="color:green">Nice Day!</h2>
    </div>
</template>

<script>

import DayChecker from './DayChecker'
import {mapState} from 'vuex'

export default {

    methods: {
        navigatePreferences() {
            this.$router.push({name: 'WelcomePage'})
        }
    },

    computed: {
        ...mapState(['userPreferences', 'weatherData'])
    },

    created() {
        console.log(DayChecker.result(this.weatherData, this.userPreferences))


    }

}
</script>

<style>

</style>
