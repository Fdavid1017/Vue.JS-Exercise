/* eslint-disable space-before-function-paren */
import { DeleteRide } from './ApiController.js'

export async function removeRide(rideId) {
  await DeleteRide(rideId)
  console.log('deleted ride')
}
