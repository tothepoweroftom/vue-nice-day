import Vue from 'vue'
import actions from '../../../src/store/index'



describe('actions', () => {
    it('tests with a mock commit', () => {
        let count = 0
        let data

        let mockCommit = (state, payload) => {
          data = payload
          count += 1
        }
         actions.fetchWeatherData({ commit: mockCommit })
           .then(() => {
             expect(count).toBe(1)
             expect(data).toEqual({ title: 'Mock with Jest' })
           })
      })
})
