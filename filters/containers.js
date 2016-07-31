'use strict'
import { connect } from 'react-redux'
import { Link } from './components'

function changeFilter(dispatch, ownProps) {
     let { filter } = ownProps.filter
     console.log(filter)
     dispatch({type: "CHANGE:FILTER", filter})
}

const mapStateToProps = (state, ownProps) => {
  return { active: state.filter === ownProps.filter }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  let onClick = () => changeFilter( dispatch, ownProps)
  return {onClick}
}

export const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link)
