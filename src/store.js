import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Assume we have a universal API that returns Promises
// and ignore the implementation details
// import { fetchItem } from './api'

export function createStore () {
	return new Vuex.Store({
		state: {
			questions: []
		},
		actions: {
			fetchItem ({ commit }, id) {
				// return the Promise via `store.dispatch()` so that we know
				// when the data has been fetched
				var fetchItem = function(id) {
					return new Promise(function(resolve, reject) {
						resolve('bla');
					});
				}
				
				return fetchItem(id).then(item => {
					commit('setItem', { id, item })
				})
			}
		},
		mutations: {
			setItem (state, { id, item }) {
				Vue.set(state.items, id, item)
			}
		}
	})
}