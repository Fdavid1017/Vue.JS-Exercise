/* eslint-disable space-before-function-paren */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accountsId: -1,
    accounts: [],

    loggedInUser: -1,

    ridesId: -1,
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
      state.ridesId++
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
        driverId: state.loggedInUser,
        rideId: state.rideId,
        passengerIds: []
      }
      state.advertisedRides.push(ride)
    },
    acceptRide(state, rideId) {
      console.log()
      let found = false
      for (let i = 0; i < state.advertisedRides.length && !found; i++) {
        if (state.advertisedRides[i].rideId === rideId) {
          found = true
          state.advertisedRides[i].passengerIds.push(
            state.accounts[state.loggedInUser]
          )
          if (state.advertisedRides[i].spaces > 0) {
            state.advertisedRides[i].spaces--
          }
        }
      }
      console.log('Accept: ' + found)
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
    },
    acceptRide(context) {
      context.commit('acceptRide')
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
