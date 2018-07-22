import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../plugins/axios'

Vue.use(Vuex)

const API_KEY = '9c509a497e575d217c615e84e05679ea'

const store = new Vuex.Store({
    state: {
        weatherData: {},
        location: {
            name: 'lispole'
        },
        errorStatus: '',
        userPreferences: {

        },

    },

    actions: {

        async fetchWeatherData({state,commit}) {
            try {
                const response = await axios.get(`?q=${state.location.name}&appid=${API_KEY}&units=metric`)
                state.weatherData = response.data;

            } catch(err) {
                commit('setErrorStatus', err)
            }
     
        }

    },

    mutations: {
        initialiseStore(state) {
			// Check if the ID exists
			if(localStorage.getItem('store')) {
                // Replace the state object with the stored item
                this.replaceState(
                    Object.assign(state, JSON.parse(localStorage.getItem('store')))
                );
			}
		},
        setErrorStatus: (state, status) => {
            state.errorStatus = status
        },
    },

})

// Subscribe to store updates
store.subscribe((mutation, state) => {
	// Store the state object as a JSON string
	localStorage.setItem('store', JSON.stringify(state));
});


export default store