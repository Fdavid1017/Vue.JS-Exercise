/* eslint-disable space-before-function-paren */
import { AddPassenger } from './ApiController.js'

export async function acceptRide(email, ride) {
  // store.commit('acceptRide', ride.rideId)

  if (ride.spaces < 1) {
    return ride
  }

  let result = await AddPassenger(ride.id, email)
  console.log('Passenger ride infos:')
  console.log(result.data)

  return result
}
