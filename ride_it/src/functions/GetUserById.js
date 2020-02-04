/* eslint-disable space-before-function-paren */

export function getUserById(store, id) {
  let account = store.getters.accounts.filter(acc => {
    return acc.id === id
  })
  return account
}
