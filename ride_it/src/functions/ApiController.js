/* eslint-disable space-before-function-paren */
import axios from 'axios'

const BASE_URL = 'https://ride-it-app.herokuapp.com/api/'

export async function AddUser(user) {
  let t = await axios.post(BASE_URL + 'user', user)
  return t
}

export async function GetUserByEmail(email) {
  let t = await axios.get(BASE_URL + 'user/' + email)
  return t
}

export async function AddRide(ride) {
  let t = await axios.post(BASE_URL + 'ride', ride)
  console.log('Ride data:')
  console.log(t.data)
  return t
}

export async function SearchRide(searchParams) {
  console.log(searchParams)
  // {fromLocation}/{toLocation}/{fromTime}/{tillTime}
  let url =
    BASE_URL +
    'ride/' +
    searchParams.from +
    '/' +
    searchParams.to +
    '/' +
    searchParams.betweenFrom +
    ':00/' +
    searchParams.betweenTill +
    ':00'
  console.log(url)
  let t = await axios.get(url)

  return t.data
}

export async function RemovePassenger(id, email) {
  let result = await axios.put(
    BASE_URL + 'ride/removePassenger/' + id + '/' + email
  )
  console.log('Updated ride infos:')
  console.log(result.data)
  return result.data
}

export async function AddPassenger(id, email) {
  let result = await axios.put(
    BASE_URL + 'ride/addPassenger/' + id + '/' + email
  )
  console.log('Updated ride infos:')
  console.log(result.data)
  return result.data
}

export async function GetUserRidesByEmail(email) {
  let result = await axios.get(BASE_URL + 'ride/driver/' + email)
  return result.data
}

export async function GetUserPassengersByEmail(email) {
  let result = await axios.get(BASE_URL + 'ride/passenger/' + email)
  return result.data
}

export async function GetRideById(id) {
  let result = await axios.get(BASE_URL + 'ride/' + id)
  return result.data
}

export async function DeleteRide(id) {
  await axios.delete(BASE_URL + 'ride/' + id)
}
