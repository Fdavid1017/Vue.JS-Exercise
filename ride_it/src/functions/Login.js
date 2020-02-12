/* eslint-disable space-before-function-paren */
import { GetUserByEmail } from './ApiController.js'

export function login(store, account, errors, router) {
  if (account.password === '') {
    errors.push('passwordError')
  }

  if (account.email === '') {
    errors.push('emailError')
  }

  if (errors.length > 0) {
    return
  }

  GetUserByEmail(account.email).then(user => {
    console.log('User data:')
    console.log(user.data)
    if (
      typeof user.data === 'string' ||
      user.data instanceof String ||
      user.data.password !== account.password
    ) {
      console.log('No account found error')
      errors.push('noAccountError')
    }

    console.log(errors.length)
    if (errors.length > 0) {
      return
    }

    console.log('Errors array is empty so commiting userData')
    store.commit('setCurrentUser', user.data)
    router.push('/')
  })
}
