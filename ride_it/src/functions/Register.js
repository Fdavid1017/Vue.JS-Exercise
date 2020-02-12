/* eslint-disable space-before-function-paren */
import { AddUser } from './ApiController.js'

export function register(account) {
  let errors = []

  if (account.firstName === '') {
    errors.push('firstNameError')
  }

  if (account.secondName === '') {
    errors.push('secondNameError')
  }

  if (account.password === '') {
    errors.push('passwordError')
  }

  if (account.passwordAgain === '') {
    errors.push('passwordAgainError')
  }

  if (account.password !== account.passwordAgain) {
    errors.push('passwordsNotMachingError')
  }

  if (account.email === '') {
    errors.push('emailError')
  }

  if (errors.length > 0) {
    return errors
  }

  let user = {
    firstName: account.firstName,
    secondName: account.secondName,
    password: account.password,
    email: account.email
  }

  let result = AddUser(user)
  console.log(result)
  return []
}
