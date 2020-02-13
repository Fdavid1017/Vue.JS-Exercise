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
    advertisedRides: [],
    acceptResponse: false
  },
  mutations: {
    register(state, user) {
      state.accountsId++
      user.id = state.accountsId
      state.accounts.push(user)
    },
    setCurrentUser(state, user) {
      state.loggedInUser = user.email
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
      state.acceptResponse = false
      let found = false
      for (let i = 0; i < state.advertisedRides.length && !found; i++) {
        if (state.advertisedRides[i].rideId === rideId) {
          if (state.advertisedRides[i].spaces > 0) {
            let contains = false
            let temp = state.advertisedRides
            for (let i = 0; i < temp.length; i++) {
              for (let k = 0; k < temp[i].passengerIds.length; k++) {
                if (temp[i].passengerIds[k].id === state.loggedInUser) {
                  contains = true
                }
              }
            }
            if (!contains) {
              state.advertisedRides[i].passengerIds.push(
                state.accounts[state.loggedInUser]
              )
              state.advertisedRides[i].spaces--
              state.acceptResponse = true
              found = true
            }
          }
        }
      }
    },
    logOut(state) {
      state.loggedInUser = -1
    },
    removeRide(state, rideId) {
      let found = false
      for (let i = 0; i < state.advertisedRides.length && !found; i++) {
        if (state.advertisedRides[i].rideId === rideId) {
          state.advertisedRides.splice(i, 1)
          found = true
        }
      }
    },
    removePassanger(state, rideId) {
      let found = false
      let temp = state.advertisedRides
      for (let i = 0; i < temp.length && !found; i++) {
        for (let k = 0; k < temp[i].passengerIds.length && !found; k++) {
          if (temp[i].passengerIds[k].id === state.loggedInUser) {
            found = false
            state.advertisedRides[i].passengerIds.splice(k, 1)
            state.advertisedRides[i].spaces++
          }
        }
      }
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
    },
    removeRide(context) {
      context.commit('removeRide')
    },
    removePassanger(context) {
      context.commit('removePassanger')
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
    },
    acceptResponse: state => {
      return state.acceptResponse
    }
  }
})
