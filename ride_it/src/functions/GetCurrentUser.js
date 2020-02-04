/* eslint-disable space-before-function-paren */

export function getCurrentUser(store) {
  let currentUserId = store.getters.loggedInUser
  let users = store.getters.accounts

  console.log(currentUserId)
  console.log(users)
  console.log(users[currentUserId])
  return users[currentUserId]
}
