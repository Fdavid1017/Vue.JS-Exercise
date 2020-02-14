/* eslint-disable space-before-function-paren */
import axios from 'axios'

const BASE_URL = 'http://localhost:8081/'

export async function AddUser(user) {
  let t = await axios.post(BASE_URL + 'user/create', user)
  return t
}

export async function GetUserByEmail(email) {
  let t = await axios.get(BASE_URL + 'user/email/' + email)
  return t
}

export async function AddRide(ride) {
  let t = await axios.post(BASE_URL + 'ride/create', ride)
  console.log('Ride data:')
  console.log(t.data)
  return t
}

export async function AddUserRide(userRide) {
  let t = await axios.post(BASE_URL + 'userRide/create', userRide)
  console.log('User ride data:')
  console.log(t.data)
  return t
}

export async function SearchRide(searchParams) {
  console.log(searchParams)
  let t = await axios.get(
    BASE_URL +
      'ride/findRidesByLocationAndTime/' +
      searchParams.from +
      '/' +
      searchParams.to +
      '/' +
      searchParams.betweenFrom +
      '/' +
      searchParams.betweenTill
  )

  return t.data
}

export async function RemoveSpace(ride) {
  let result = await axios.get(
    BASE_URL + 'ride/updateSpace/' + ride.id + '/' + (ride.spaces - 1)
  )
  console.log('Updated ride infos:')
  console.log(result.data)
  return result.data
}

export async function AddSpace(ride) {
  let result = await axios.get(
    BASE_URL + 'ride/updateSpace/' + ride.id + '/' + (ride.spaces + 1)
  )
  console.log('Updated ride infos:')
  console.log(result.data)
  return result.data
}

export async function AddRidePassenger(currentRideId, currentEmail) {
  let ridePassenger = {
    rideId: currentRideId,
    email: currentEmail
  }
  let result = await axios.post(
    BASE_URL + 'ridePassenger/create',
    ridePassenger
  )

  return result
}

export async function GetUserRidesByEmail(email) {
  let result = await axios.get(BASE_URL + 'userRide/byEmail/' + email)
  return result.data
}

export async function GetUserPassengersByEmail(email) {
  let result = await axios.get(BASE_URL + 'ridePassenger/byEmail/' + email)
  return result.data
}

export async function GetRideById(id) {
  let result = await axios.get(BASE_URL + 'ride/id/' + id)
  return result.data
}

export async function GetUserRidesByRideIdAndEmail(rideId, email) {
  let result = await axios.get(
    BASE_URL + 'userRide/rideIdAndEmail/' + rideId + '/' + email
  )
  return result.data
}

export async function GetPassengerRidesByRideIdAndEmail(rideId, email) {
  let url = BASE_URL + 'ridePassenger/rideIdAndEmail/' + rideId + '/' + email
  let result = await axios.get(url)
  return result.data
}

export async function GetPassengerRidesByRideId(rideId) {
  let url = BASE_URL + 'ridePassenger/byRideId/' + rideId
  let result = await axios.get(url)
  return result.data
}

export async function GetPassengerRidesById(id) {
  let result = await axios.get(BASE_URL + 'ridePassenger/id/' + id)
  return result.data
}

export async function DeletePassenger(id) {
  let result = await GetPassengerRidesById(id)
  result = await GetRideById(result.rideId)
  await AddSpace(result)

  await axios.delete(BASE_URL + 'ridePassenger/delete/' + id)
}

export async function DeleteRide(id) {
  await axios.delete(BASE_URL + 'userRide/delete/' + id)
}
