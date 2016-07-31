'use strict'
import React from 'react'
import { connect } from 'react-redux'
import { showVisibleItems } from './showVisibleItems'
import { TodoList } from './components'
import { addTodo, removeTodo, toggleTodo } from './actions'

const mapStateToProps = ({todos, filter}) => {
  return { todos: showVisibleItems(todos, filter) }
}

const mapDispatchToProps = dispatch => {
  return {
    removeTodo: id => dispatch(removeTodo(id))
  , toggleTodo: id => dispatch(toggleTodo(id))
  }
}

export const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export let AddTodo = ({ dispatch }) => {
  let input
  return (
    <div>
      <header>
        <h1>Todo:</h1>
      </header>
      <form onSubmit={e => {
        e.preventDefault()
        
        if (!input.value.trim()) {
          return
        }

        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input type="text" ref={node => input = node} />
        <button>Add Todo</button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)
