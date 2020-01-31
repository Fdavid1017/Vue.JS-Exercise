/* eslint-disable space-before-function-paren */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    account: {
      firstName: '',
      secondName: '',
      password: '',
      email: '',
      profilePicture: ''
    },

    loggedInUser: {
      email: '',
      password: ''
    }
  },
  mutations: {
    setAccount(state, user) {
      console.log(user)
      state.account = user
    },
    setCurrentUser(state, user) {
      console.log(user)
      state.account = user
    }
  },
  actions: {
    setCurrentUser(context) {
      context.commit('setCurrentUser')
    }
  },
  modules: {}
})
