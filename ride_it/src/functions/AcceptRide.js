/* eslint-disable space-before-function-paren */

export function acceptRide(store, ride) {
  /* let found = false
  for (let i = 0; i < store.getters.rides.length && !found; i++) {
    if (store.rides[i].rideId === ride.rideId) {
      found = true
      store.rides[i].passengerIds.push(
        store.getters.accounts[store.getters.loggedInUser]
      )
      store.rides[i].spaces--
    }
  }
  return found */
  store.commit('acceptRide', ride.rideId)
}
