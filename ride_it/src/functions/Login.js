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

  let user = store.getters.accounts.filter(acc => {
    return acc.email === account.email && acc.password === account.password
  })

  if (user.length !== 1) {
    errors.push('noAccountError')
  }

  if (errors.length > 0) {
    return errors
  }

  store.commit('setCurrentUser', user[0])
  return []
}
