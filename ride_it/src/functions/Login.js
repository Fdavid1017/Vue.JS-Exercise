/* eslint-disable space-before-function-paren */

export function login(store, account) {
  let errors = []

  if (account.password === '') {
    errors.push('passwordError')
  }

  if (account.email === '') {
    errors.push('emailError')
  }

  if (errors.length > 0) {
    return errors
  }

  if (
    account.email !== store.getters.account.email ||
    account.password !== store.getters.account.password
  ) {
    errors.push('noAccountError')
  }

  if (errors.length > 0) {
    return errors
  }

  let user = {
    email: account.email,
    password: account.password
  }

  store.commit('setCurrentUser', user)
  return []
}
