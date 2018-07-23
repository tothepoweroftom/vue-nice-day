<template>
    <div>
        <button @click="navigatePreferences">Change Preferences</button>

        <h1> From the preferences that you have set I can tell you that it is a...</h1>
        <h2 style="color:green">{{result}}</h2>
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


    }

}
</script>

<style>

</style>
