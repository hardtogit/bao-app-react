import React from 'react'
import styles from './buyInput.less'
import Utils from '../../utils/utils.js'
import * as actionTypes from '../../actions/actionTypes'
import {connect} from 'react-redux'
import Infinite from 'react-infinite'
import wrap from '../../utils/pageWrapper'

class BuyInout extends React.Component{

  changeInput = (ele) => {
    const value = ele.target.value
    const {product} = this.props

    if(value.length > 0){
      if (product === 'demand'){
        Utils.checkNumber(value)? 99999999>value  ?
          this.props.changeValue(value) : null
        :null
      }else{
        Utils.checkInteger(value)? 99999999>value  ?
          this.props.changeValue(value) : null
        :null
      }
    }else{
      this.props.changeValue(value)
    }
  }
  countInput = (ele) => {
    this.props.countValue(ele)
  }
  endInput = (ele) => {
    const value = ele.target.value
    const {product} = this.props
    
    if(product === 'demand'){
        if (value === '' || value <100) {
          this.props.intputOver(100)
        }
      }else{
        if (value === '' || value <1) {
          this.props.intputOver(1)
        }
      }
  }

  render(){
    const {product} =this.props
    switch (product){
      case 'direct':
      case 'creditor':
      case 'deposit':
        return(
          <div className={styles.buyDiv}>
            <div onClick={() => this.countInput('-')}>-</div>
            <input type={
                (Utils.checkPlantForm()==='ios'?'tel':'number')
            } value={this.props.value} onChange={(ele) => this.changeInput(ele)} onBlur={(ele) => this.endInput(ele)}/>
            <div onClick={() => this.countInput('+')}>+</div>
          </div>
        )
        break;
      case 'demand':
        return(
          <div className={styles.demandBuyDiv}>
            <input type={
                (Utils.checkPlantForm()==='ios'?'tel':'number')
            } value={this.props.value} onChange={(ele) => this.changeInput(ele)} onBlur={(ele) => this.endInput(ele)}/>
          </div>
        )
        break;
      default:
        return null
    }
  }
}
const mapStateToProps = (state,ownProps)=>{
    const {product} = ownProps
    return{
      value:state.finance.getIn(['buyIuputProject',product,'value']),
    }
}
const mapDispatchToProps = (dispatch,ownProps)=>({
  changeValue(ele){
    dispatch({
          type:actionTypes.BUYINPUT_VALUE_CHANGE,
          product:ownProps.product,
          payload:ele,
    })
  },

  countValue(ele){
    dispatch({
          type:actionTypes.BUYINPUT_VALUE_COUNT,
          product:ownProps.product,
          payload:ele,
    })
  },
  intputOver(ele){
    dispatch({
          type:actionTypes.BUYINPUT_OVER,
          product:ownProps.product,
          payload:ele,
    })
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(BuyInout)
  
