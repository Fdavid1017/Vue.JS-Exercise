/* eslint-disable space-before-function-paren */
import axios from 'axios'

const BASE_URL = 'http://localhost:8081/'

export function AddUser(user) {
  let t = axios.post(BASE_URL + 'user/create', user)
  return t
}

export async function GetUserByEmail(email) {
  let t = await axios.get(BASE_URL + 'user/email/' + email)
  return t
}
