/* eslint-disable space-before-function-paren */

export function getUserRides(store, passenger) {
  let driverId = store.getters.loggedInUser
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
  }

  return rides
}
