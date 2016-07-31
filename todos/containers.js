'use strict'
import React from 'react'
import { connect } from 'react-redux'
import {showVisibleItems} from './showVisibleItems'
import {TodoList} from './components'

function removeTodo(id) {
  store.dispatch({type: 'DEL:TODO', id})
}

function toggleTodo(id) {
  store.dispatch({type: 'TOG:TODO', id})
}

const mapStateToProps = ({todos, filter}) => {
  return { todos: showVisibleItems(todos, filter)}
}
const mapDispatchToProps = dispatch => {
  return {
    removeTodo: id => dispatch({type: 'DEL:TODO', id})
  , toggleTodo: id => dispatch({type: 'TOG:TODO', id})
  }
}
export const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)


let nextTodoId = 0
export let AddTodo = ({ dispatch }) => {
  let input
  return (
    <div>
      <header>
        <h1>Todo:</h1>
      </header>
      <input type="text" ref={node => input = node} />
      <button onClick={() => {
        dispatch({
          type: 'ADD:TODO',
          todo: {
            id: nextTodoId++,
            message: input.value
          }
        })
        input.value = ''
      }}>Add Todo</button>
    </div>
  )
}
AddTodo = connect()(AddTodo)
