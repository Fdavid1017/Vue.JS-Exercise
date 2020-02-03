/* eslint-disable space-before-function-paren */

export function acceptRide(store, ride) {
  store.commit('acceptRide', ride.rideId)
  return store.getters.acceptResponse
}
