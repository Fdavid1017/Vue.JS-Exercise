/* eslint-disable space-before-function-paren */

export function addRide(store, ride) {
  let errors = []
  if (!store.getters.isloggedIn) {
    errors.push('notLoggedInError')
    return errors
  }

  if (ride.from === '') {
    errors.push('fromError')
  }

  if (ride.to === '') {
    errors.push('toError')
  }

  if (ride.when === '') {
    errors.push('whenError')
  }

  if (ride.spaces === '') {
    errors.push('spacesError')
  }

  if (ride.description === '') {
    errors.push('descriptionError')
  }

  if (errors.length > 0) {
    return errors
  }

  store.commit('addRide', ride)
  return []
}
