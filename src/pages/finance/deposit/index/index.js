import React from 'react';
import styles from './index.styl';
import {connect} from 'react-redux'
import {push, goBack} from 'react-router-redux'
import classnames from 'classnames'
import {RATE, USER_INFO} from '../../../../actions/actionTypes'
class DepositIndex extends React.Component {
      render(){
          return(<div>
               <p className={styles.title}>
               </p>
          </div>)
      }
}
const mapStateToProps = (state) => {
    return {
        rate: state.infodata.getIn([RATE, 'data']) && state.infodata.getIn([RATE, 'data']).data.deposit || [],
        serverTime: state.infodata.getIn([RATE, 'data']) && state.infodata.getIn([RATE, 'data']).data['server_time'] || 0,
        userInfoCode: state.infodata.getIn([USER_INFO, 'data']) && state.infodata.getIn([USER_INFO, 'data']).code || 0,
        pageIndex:state.global.getIn(['PRODUCT_INDEX_PAGE'])
    }
}

const mapDispatchToProps = (dispatch) => ({
    push(path) {
        dispatch(push(path))
    },

    pop() {
        dispatch(goBack())
    },
    pageIndexs(){
        dispatch({
            type:'PRODUCT_INDEX_PAGE',
            index:1
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(DepositIndex)
