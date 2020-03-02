/* eslint-disable space-before-function-paren */
import { AddRide } from './ApiController.js'

export async function addRide(store, ride) {
  let errors = []
  if (store.getters.loggedInUser === -1) {
    errors.push('notLoggedInError')
    return errors
  }

  if (ride.from === '') {
    errors.push('fromError')
  }

  if (ride.to === '') {
    errors.push('toError')
  }

  if (ride.when === '') {
    errors.push('whenError')
  }

  if (ride.spaces === '') {
    errors.push('spacesError')
  }

  if (ride.description === '') {
    errors.push('descriptionError')
  }

  if (errors.length > 0) {
    return errors
  }

  let temp = {
    driver: {
      email: store.getters.loggedInUser
    },
    fromLocation: ride.from,
    toLocation: ride.to,
    whenTime: ride.when,
    spaces: ride.spaces,
    car: ride.car,
    description: ride.description
  }

  // store.commit('addRide', ride)
  let rideTemp = await AddRide(temp)
  console.log(rideTemp.data)

  return []
}
