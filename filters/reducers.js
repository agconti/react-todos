'use strict'

export function filter(state = 'SHOW_ALL', action) {
  switch (action.type) {
   case 'CHANGE:FILTER':
     return action.filter
   default:
     return state
 }
}
