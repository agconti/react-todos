import React from 'react'
import { VisibleTodoList, AddTodo } from './todos/containers'
import { Footer } from './Footer'

export const App = () => {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  )
}
