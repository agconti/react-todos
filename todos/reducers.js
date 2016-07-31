'use strict'

export function todo(state={}, action) {
  switch (action.type) {
    case 'ADD:TODO':
      return Object.assign({}, action.todo, {complete: false})
    case 'DEL:TODO':
      return state.id !== action.id
    case 'TOG:TODO':
      if (state.id === action.id) {
        return Object.assign({}, state, {complete: !state.complete})
      }
      return state
    default:
      return state
  }
}

export function todos (state = [], action) {
  switch (action.type) {
    case 'ADD:TODO':
      return state.concat(todo(action.todo, action))
    case 'DEL:TODO':
      return state.filter(item => todo(item, action))
    case 'TOG:TODO':
      return state.map(item => todo(item, action))
    default:
      return state
  }
}
