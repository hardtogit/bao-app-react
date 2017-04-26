import React from 'react';
import styles from './index.styl';
import {connect} from 'react-redux'
import {push, goBack} from 'react-router-redux'
import List from '../../../../components/depositList/index'
import {RATE, USER_INFO} from '../../../../actions/actionTypes'
//import type_hongwu from '../../../assets/images/type_hongwu.png'
class DepositIndex extends React.Component {
      render(){
          const {push}=this.props;
          return(<div>
               <p className={styles.title}>
                   您当前有<span>4张抵用券</span>和<span>1张加息券</span>未使用
               </p>
              <List go={(index)=>{push(`/deposit-product/${index}/A`)}}  goBuy={(index)=>{push(`/deposit-buy/${index}/A`)}}/>
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
