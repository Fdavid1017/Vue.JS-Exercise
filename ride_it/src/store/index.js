/* eslint-disable space-before-function-paren */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    account: {
      firstName: '1',
      secondName: '1',
      password: '1',
      email: '1',
      profilePicture: '1'
    },

    loggedInUser: {
      email: '',
      password: ''
    },

    loggedIn: false
  },
  mutations: {
    setAccount(state, user) {
      console.log('Set account:')
      state.account = user
      console.log(state.account)
    },
    setCurrentUser(state, user) {
      console.log('Set current user:')
      state.loggedInUser = user
      state.loggedIn = true
      console.log(state.loggedInUser)
      console.log(state.loggedIn)
    }
  },
  actions: {
    setAccount(context) {
      context.commit('setAccount')
    },
    setCurrentUser(context) {
      context.commit('setCurrentUser')
    }
  },
  modules: {},
  getters: {
    loggedIn: state => {
      return state.loggedIn
    }
  }
})
