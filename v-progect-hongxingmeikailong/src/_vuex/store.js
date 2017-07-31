

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import actions from './actions'
import mutations from './mutations'

const state ={
	data:[],
	mbmdata:[],
	mddata:[],
	mdb:[],
	mbest:[],
	mbanner:[],
	classlf:[],
	shoppinglist:[],
	shoppingslist:[]
}

const getters={

}

const store = new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})

export default store;
