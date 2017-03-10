/**
 * 网页支付
 *
 */
import React from 'react'
import { connect } from 'react-redux'
import { push, goBack } from 'react-router-redux'
import config from '../../../config'
import NavBar from '../../components/NavBar'
import utils from '../../utils/utils.js'
import commonStyles from '../../css/common.styl'

const {width, height} = utils.dimension()
const ROOT_URL =  config.requestUrl + 'common/pay-excess'

class PayWeb extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  getSource = () => {
    const type = this.props.query && this.props.query.type || ''
    let url, params = utils.getParams()

    return ROOT_URL + '?' + location.search.slice(1)
  }

  render() {
    return (
      <div className={commonStyles.panel}>
        <NavBar title='支付' />
        <div style={{flex: 1, overflowY: 'scroll'}}>
          <iframe src={this.getSource()} style={{border:0, width: width, height: height - 44}}>
          </iframe>
        </div>    
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  push(path) {
    dispatch(push(path))
  },

  goBack() {
    dispatch(goBack())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PayWeb)
