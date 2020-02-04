/* eslint-disable space-before-function-paren */

export function getUserRides(store, passenger) {
  let driverId = store.getters.loggedInUser
  let rides
  console.log(store.getters.rides)
  if (passenger) {
    rides = store.getters.rides.filter(ride => {
      for (let user in ride.passengerIds) {
        console.log(user)
        if (user.id === driverId) {
          return ride
        }
      }
    })
  } else {
    rides = store.getters.rides.filter(ride => {
      return ride.driverId === driverId
    })
  }

  return rides
}
