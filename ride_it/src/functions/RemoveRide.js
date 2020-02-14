/* eslint-disable space-before-function-paren */
import {
  GetUserRidesByRideIdAndEmail,
  DeleteRide,
  GetPassengerRidesByRideId,
  DeletePassenger
} from './ApiController.js'

export async function removeRide(rideId, email) {
  let result = await GetUserRidesByRideIdAndEmail(rideId, email)
  let resultId = result.id
  result = await GetPassengerRidesByRideId(rideId)
  for (let i = 0; i < result.length; i++) {
    await DeletePassenger(result[i].id)
  }
  console.log('Deleted passengers for ride')

  await DeleteRide(resultId)
  console.log('deleted ride')
}
