/* eslint-disable space-before-function-paren */
import { SearchRide } from './ApiController.js'

export async function searchRide(search) {
  /* let rides = store.getters.rides.filter(ride => {
    let date = new Date(ride.when)
    return (
      ride.from === search.from &&
      ride.to === search.to &&
      ride.spaces > 0 &&
      date > new Date(search.betweenFrom) &&
      date < new Date(search.betweenTill) &&
      !ride.passengerIds.includes(store.getters.loggedInUser)
    )
  }) */
  let params = {
    from: search.from,
    to: search.to,
    betweenFrom: search.betweenFrom,
    betweenTill: search.betweenTill
  }
  let rides = await SearchRide(params)

  return rides
}
