import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

let state = {

};

const mutations = {
	setState(state, params) {
		for (let k in params) {
			state[k] = params[k];
		}
	},
};


const actions = {

};

export default new Vuex.Store({
	state,
	mutations,
	actions,
});
