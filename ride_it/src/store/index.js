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

    loggedIn: false,

    advertisedRides: []
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
    },

    addRide(state, infos) {
      console.log('Add ride:')
      let ride = {
        from: infos.from,
        to: infos.to,
        when: infos.when,
        spaces: infos.spaces,
        car: infos.car,
        description: infos.description,
        driverName: state.account.firstName + ' ' + state.account.secondName
      }
      state.advertisedRides.push(ride)
      console.log(ride)
    }
  },
  actions: {
    setAccount(context) {
      context.commit('setAccount')
    },
    setCurrentUser(context) {
      context.commit('setCurrentUser')
    },
    addRide(context) {
      context.commit('addRide')
    }
  },
  modules: {},
  getters: {
    loggedIn: state => {
      return state.loggedIn
    }
  }
})
