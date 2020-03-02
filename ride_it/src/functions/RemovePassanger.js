/* eslint-disable space-before-function-paren */
import { RemovePassenger } from './ApiController.js'

export async function removePassanger(rideId, email) {
  let result = await RemovePassenger(rideId, email)
  console.log(result)
}
