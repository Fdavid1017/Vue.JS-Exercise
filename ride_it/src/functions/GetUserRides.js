/* eslint-disable space-before-function-paren */
import {
  GetUserRidesByEmail,
  GetUserPassengersByEmail,
  GetRideById
} from './ApiController.js'

export async function getUserRides(email, passenger) {
  /* let driverId = store.getters.loggedInUser
  let rides = []
  console.log(store.getters.rides)
  if (passenger) {
    let temp = store.getters.rides
    for (let i = 0; i < temp.length; i++) {
      for (let k = 0; k < temp[i].passengerIds.length; k++) {
        if (temp[i].passengerIds[k].id === driverId) {
          rides.push(temp[i])
        }
      }
    }
  } else {
    rides = store.getters.rides.filter(ride => {
      return ride.driverId === driverId
    })
  } */

  let result = []
  let connection
  if (passenger) {
    connection = await GetUserPassengersByEmail(email)
  } else {
    connection = await GetUserRidesByEmail(email)
  }

  for (let i = 0; i < connection.length; i++) {
    let ride = await GetRideById(connection[i].rideId)
    result.push(ride)
  }

  return result
}
