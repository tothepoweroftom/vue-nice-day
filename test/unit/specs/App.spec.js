import Vue from 'vue'
import Vuex from 'vuex'
import store from '../../../src/store/index'
import App from '../../../src/App'



describe('App.vue', () => {
    it('test initial rendering with api', (done) => {
        const vm = new Vue({
          template: '<div><test></test></div>',
          store,
          components: {
            'test': App
          }
        }).$mount()
        Vue.nextTick()
        .then(() => {
            done()
        })
        .catch(done)
    })
})
