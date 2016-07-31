'use strict'
import { v4 } from 'uuid'


export function addTodo(value) {
  return {
    type: 'ADD:TODO',
    todo: {
      id: v4(),
      message: value
    }
  }
}


export function removeTodo(id) {
  return { type: 'DEL:TODO', id }
}


export function toggleTodo(id) {
  return { type: 'TOG:TODO', id }
}
