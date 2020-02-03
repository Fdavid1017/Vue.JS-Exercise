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
      for (let i = 0; i < state.advertisedRides.length; i++) {
        if (state.advertisedRides[i].rideId === rideId) {
          if (state.advertisedRides[i].spaces < 1) {
            return false
          }
          state.advertisedRides[i].passengerIds.push(
            state.accounts[state.loggedInUser]
          )

          state.advertisedRides[i].spaces--

          return true
        }
      }
      return false
    },
    logOut(state) {
      state.loggedInUser = -1
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
    },
    logOut(context) {
      context.commit('logOut')
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
