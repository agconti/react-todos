'use strict'
import React from 'react'


export function TodoList ({todos, removeTodo, toggleTodo}) {
  return (
    <ul>
    {todos.map(todo => {
      return <TodoItem key={todo.id}
                       {...todo}
                       removeTodo={removeTodo}
                       toggleTodo={toggleTodo} />
    })}
    </ul>
  )
}


export function TodoItem ({complete, message, removeTodo, toggleTodo}) {
  return (
    <li style={{ textDecoration: complete? 'line-through': ''}}>
      {message} <button onClick={removeTodo}>X</button>
                <button onClick={toggleTodo}>&#10003;</button>
    </li>
  )
}
