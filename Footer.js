import React from 'react'
import {FilterLink} from './filters/containers'

export const Footer = () => {
  return (
    <p>
      Show: <FilterLink filter="SHOW_ALL">All</FilterLink>,
            <FilterLink filter="SHOW_COMPLETE">Complete</FilterLink>,
            <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
    </p>
  )
}
