/* eslint-disable space-before-function-paren */
import {
  GetPassengerRidesByRideIdAndEmail,
  DeletePassenger
} from './ApiController.js'

export async function removePassanger(rideId, email) {
  let result = await GetPassengerRidesByRideIdAndEmail(rideId, email)
  await DeletePassenger(result.id)
  console.log('deleted')
}
