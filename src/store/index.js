import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../plugins/axios'

Vue.use(Vuex)

const API_KEY = '9c509a497e575d217c615e84e05679ea'

export default new Vuex.Store({
    state: {
        weatherData: {},
        location: {
            name: 'amsterdam'
        },
        errorStatus: ''


    },

    actions: {

        async fetchWeatherData({state,commit}) {
            try {
                const response = await axios.get(`?q=${state.location.name}&appid=${API_KEY}`)
                state.weatherData = response.data;

            } catch(err) {
                commit('setErrorStatus', err)
            }
     
        }

    },

    mutations: {
        setErrorStatus: (state, status) => {
            state.errorStatus = status
        }
    },

})