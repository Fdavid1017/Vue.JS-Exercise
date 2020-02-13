/* eslint-disable space-before-function-paren */
import { GetUserByEmail } from './ApiController.js'

export async function getCurrentUser(email) {
  let user = await GetUserByEmail(email)
  return user.data
}
