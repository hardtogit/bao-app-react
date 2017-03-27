import React from 'react'
import Nav from '../../components/NavBar'
import wrap from '../../utils/pageWrapper'
import { connect } from 'react-redux'
import { goBack } from 'react-router-redux'

const activityDetail = React.createClass({
	render() {
		const {
			hasBack,
			
		} = this.props
	}
})

const mapStateToProps = (state, ownProps) => {
  return {
    hasBack: state.hasBack
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  goBack() {
    dispatch(goBack())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(wrap(activityDetail))
