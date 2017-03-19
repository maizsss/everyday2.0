'use strict';
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
	state: {
		title: 'everyday',
		content: '2.0'
	},
	mutations: {
    ['CHANGE_TITLE'] (state, data) { 
      state.title = data.title;
      state.content = data.content;
    }
	},
	actions: {
		change (context, data) {
			context.commit('CHANGE_TITLE', data);
		}
	}
});

export default store;