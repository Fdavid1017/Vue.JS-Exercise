/* eslint-disable space-before-function-paren */
import axios from 'axios'

const BASE_URL = 'localhost:8081/'

export function AddUser(user) {
  axios.post(BASE_URL + 'user/create', user).catch(e => console.log(e))
}
