import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { App } from './App'
import { todos } from './todos/reducers'
import { filter } from './filters/reducers'

const app = document.getElementById('app')
const store = createStore(combineReducers({todos, filter}))

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), app)
