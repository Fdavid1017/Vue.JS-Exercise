/* eslint-disable space-before-function-paren */

export function searchRide(store, search) {
  let rides = store.getters.rides.filter(ride => {
    let date = new Date(ride.when)
    return (
      ride.from === search.from &&
      ride.to === search.to &&
      ride.spaces > 0 &&
      date > new Date(search.betweenFrom) &&
      date < new Date(search.betweenTill)
    )
  })
  return rides
}
