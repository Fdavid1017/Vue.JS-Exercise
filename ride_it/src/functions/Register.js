/* eslint-disable space-before-function-paren */

export function register(store, account) {
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
    email: account.email,
    profilePicture: account.profilePicture,
    id: -2
  }

  store.commit('register', user)
  return []
}
