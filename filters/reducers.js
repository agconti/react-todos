'use strict'

function filter(state = 'SHOW_ALL', action) {
  if (action.filter) {
    return action.filter
  }
  return state
}
