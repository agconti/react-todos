'use strict'
import { connect } from 'react-redux'
import { Link } from './components'
import {changeFilter} from './actions'


const mapStateToProps = (state, ownProps) => {
  return { active: state.filter === ownProps.filter }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  let onClick = () => dispatch(changeFilter(ownProps.filter))
  return { onClick }
}

export const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link)
