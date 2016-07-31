'use strict'
import React, { PropTypes } from 'react'


export function TodoList ({todos, removeTodo, toggleTodo}) {
  return (
    <ul>
      {todos.map(todo => {
        return <TodoItem key={todo.id}
                         {...todo}
                         removeTodo={() => removeTodo(todo.id)}
                         toggleTodo={() => toggleTodo(todo.id)} />
      })}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired
  , complete: PropTypes.bool.isRequired
  , message: PropTypes.string.isRequired
  }).isRequired).isRequired
, removeTodo: PropTypes.func.isRequired
, toggleTodo: PropTypes.func.isRequired
}


export function TodoItem ({complete, message, removeTodo, toggleTodo}) {
  return (
    <li style={{ textDecoration: complete? 'line-through': ''}}>
      {message} <button onClick={removeTodo}>X</button>
                <button onClick={toggleTodo}>&#10003;</button>
    </li>
  )
}

TodoItem.propTypes = {
  complete: PropTypes.bool.isRequired
, message: PropTypes.string.isRequired
, removeTodo: PropTypes.func.isRequired
, toggleTodo: PropTypes.func.isRequired
}
