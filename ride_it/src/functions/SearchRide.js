/* eslint-disable space-before-function-paren */

export function searchRide(store, search) {
  let rides = store.getters.rides.filter(ride => {
    /* let date=ride.when.split('T')[0]
        let time=ride.when.split('T')[1] */
    return ride.from === search.from && ride.to === search.to && ride.spaces > 0
  })
  return rides
}
