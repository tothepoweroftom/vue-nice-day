<template>
    <div>
        <button @click="navigatePreferences">Change Preferences</button>

        <h1> From the preferences that you have set I can tell you that it is a...</h1>
       
        <template v-if="result.total">
            <h2 style="color:green">Nice Day!!</h2>
        </template>
        <template v-else>
            <h2 style="color:red">Not a nice day :(</h2>
        </template>
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

</style>
