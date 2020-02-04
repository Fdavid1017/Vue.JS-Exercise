/* eslint-disable space-before-function-paren */

export function getCurrentUser(store) {
  let currentUserId = store.getters.loggedInUser
  let users = store.getters.accounts

  return users[currentUserId]
}
