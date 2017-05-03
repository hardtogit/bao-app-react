import React from 'react';
import styles from './index.styl';
import {connect} from 'react-redux'
import {push, goBack} from 'react-router-redux'
import List from '../../../../components/depositList/index'
import {RATE, USER_INFO} from '../../../../actions/actionTypes'
import Loading from '../../../../components/pageLoading'
class DepositIndex extends React.Component {
    componentDidMount(){
        const deposit=JSON.parse(sessionStorage.getItem("bao-deposit"));
        if (deposit==null){
            this.props.getList();
        }
    }
    loadDom=()=>{
        return <Loading/>
    }
    loadEndDom=(deposit)=>{
        const {push}=this.props;
        return(<div style={{marginTop:'10px'}}>
            <List go={(index,id)=>{push(`/deposit-product/${index}/A/${id}`)}}  goBuy={(index,id)=>{push(`/deposit-buy/${index}/A/${id}`)}} data={deposit.deposit}/>
        </div>)
    }
      render(){
          const deposit=JSON.parse(sessionStorage.getItem("bao-deposit"));
          let Dom=this.loadDom();
          if (deposit){
              Dom=this.loadEndDom(deposit)
          }
          return Dom
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
    },
    getList(){
        dispatch({
            type:'RATE'
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(DepositIndex)
