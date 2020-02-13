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
