/* eslint-disable space-before-function-paren */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accountsId: -1,
    accounts: [],

    loggedInUser: -1,

    advertisedRides: []
  },
  mutations: {
    register(state, user) {
      state.accountsId++
      user.id = state.accountsId
      state.accounts.push(user)
    },

    setCurrentUser(state, user) {
      state.loggedInUser = user.id
    },

    addRide(state, infos) {
      let ride = {
        from: infos.from,
        to: infos.to,
        when: infos.when,
        spaces: infos.spaces,
        car: infos.car,
        description: infos.description,
        driverName:
          state.accounts[state.loggedInUser].firstName +
          ' ' +
          state.accounts[state.loggedInUser].secondName,
        driverId: state.loggedInUser
      }
      state.advertisedRides.push(ride)
    }
  },
  actions: {
    register(context) {
      context.commit('register')
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
    loggedInUser: state => {
      return state.loggedInUser
    },
    accounts: state => {
      return state.accounts
    },
    rides: state => {
      return state.advertisedRides
    }
  }
})
