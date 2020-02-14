/* eslint-disable space-before-function-paren */
import { RemoveSpace, AddRidePassenger } from './ApiController.js'

export async function acceptRide(email, ride) {
  // store.commit('acceptRide', ride.rideId)

  if (ride.spaces < 1) {
    return ride
  }

  let result = await RemoveSpace(ride)
  let passenger = await AddRidePassenger(ride.id, email)
  console.log('Passenger ride infos:')
  console.log(passenger.data)

  return result
}
