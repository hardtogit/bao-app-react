//选着加息券
import React from 'react'
import NavBar from '../../components/NavBar'
import styles from './selectCoupon.less'
import * as actionTypes from '../../actions/actionTypes'
import {connect} from 'react-redux'
import wrap from '../../utils/pageWrapper'
import {goBack, push} from 'react-router-redux'
import Dimensions from 'react-dimensions'
import Selectedimg from '../../assets/images/0k2.png'
import unSelectimg from '../../assets/images/circle.png'
import utils from '../../utils/utils'

class RatesCell extends React.Component {

  renderVoucher(data, index) {
    const { selected ,money} = this.props;
      const {amount,apply,end_date,start_date,id,invest_money,type}=data;
      let Dom;
      if (money<parseFloat(invest_money)){
        Dom=<span className={styles.noUse}>不可用</span>
      }else {
        Dom=selected.id == id ? <img src={Selectedimg} alt="选中"/> :
            <img onClick={()=>{this.props.onSelect(data)}} src={unSelectimg} />
      }
    return (
      <div className={styles.rateCell} key={index} style={{width:this.props.screenW}}>
        <div>
          <div>
            <p>{amount+'元'+type}</p>
              {Dom}
          </div>
          <div>
            <p>投资{invest_money}即可使用</p>
            <p>{apply}</p>
          </div>
        </div>
        <div style={{backgroundColor:'rgb(125,206,159)'}}>
          <p>有效期{start_date}到{end_date}</p>
        </div>
      </div>
    )
  }

  renderInterestRate(data, index) {
    const { selected,money} = this.props;
      const {rate,apply,end_date,start_date,id,invest_money,type}=data;
      let Dom;
      if (money<parseFloat(invest_money)){
          Dom=<span className={styles.noUse}>不可用</span>
      }else {
          Dom=selected.id == id ? <img src={Selectedimg} alt="选中"/> :
              <img onClick={()=>{this.props.onSelect(data)}} src={unSelectimg} />
      }
    return (
      <div className={styles.rateCell} key={index} style={{width:this.props.screenW}}>
        <div>
          <div>
            <p>{rate+'%'+type}</p>
              {Dom}
          </div>
          <div>
            <p>投资{invest_money}即可使用</p>
            <p>{apply}</p>
          </div>
        </div>
        <div style={{backgroundColor:'#feb178'}}>
          <p>有效期{start_date}到{end_date}</p>
        </div>
      </div>
    )
  }
  nullDom=(src)=>{
    return(<img src={src} className={styles.nullImg}/>)
  }
  render() {
    const { type } = this.props
    if (!this.props.datas) return null
    let dy=[],
          jx=[]
      this.props.datas.map((data, index) => {
          if (type == 1){
              dy.push(this.renderVoucher(data, index))
          }else {
            jx.push(this.renderInterestRate(data,index))
          }
      })
    return(
      <div className={styles.listBox}>
        {
            dy
        }{
          jx
      }
      </div>
    )
  }
}

// const ArriveCell = (props) => (
  
//   )

class SelectCoupon extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      selectID: 1,
      selectedCoupon: this.props.selectedCoupon
    }
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  changeType=(ele)=>{
    if (ele != this.state.selectID) {
      this.setState({
        selectID:ele
      })
    }
  }

  // 选中优惠券
  selectHandle = (counpon) => {
    this.setState({selectedCoupon: counpon})
  }

  useCouponHandle = () => {
    this.props.setUseCoupons(this.state.selectedCoupon, true);
    this.props.useFn(this.state.selectedCoupon);
    this.props.click();
    this.props.useCoupon();
  }

  unUseCouponHandle = () => {
    this.setState({selectedCoupon: ''})
    this.props.setUseCoupons('', false)
    this.props.goBack()
  }
  nullCoupon =()=>{
     this.props.nullCoupon()
      this.props.useFn(null);
  }
  render(){
     const {click,money}=this.props;
    return(
      <div className={styles.root}>
        <NavBar title="选择优惠券"  leftNode={<span style={{paddingLeft:'15px'}}>关闭</span>}
             onLeft={click}   style={{position:'absolute',left:'0px',top:'0px'}}></NavBar>
        <div style={{height:44}}></div>

        <div className={styles.selectDiv}>
          <div style={{borderBottomColor:this.state.selectID===1?'#00a6e2':'transparent'}} onClick={() => {this.changeType(1)}}>
            <p style={{color:this.state.selectID===1?'#00a6e2':'#626262'}}>抵用券</p>
          </div>
          <div style={{borderBottomColor:this.state.selectID===2?'#00a6e2':'transparent'}} onClick={() => {this.changeType(2)}}>
            <p style={{color:this.state.selectID===2?'#00a6e2':'#626262'}}>加息券</p>
          </div>
        </div>
        
        <div style={{flex:1,overflowY:'scroll',position:'relative'}}>
          <RatesCell
            onSelect={this.selectHandle}
            datas={this.state.selectID == 1 ? this.props.vouchers : this.props.interestRates}
            type={this.state.selectID}
            money={money}
            selected={this.state.selectedCoupon || ''} 
          />
        </div>

        <div style={{height:50}}></div>
        <div className={styles.sure}>
          <div onClick={this.nullCoupon}>
            <p>不使用优惠</p>
          </div>
          <div onClick={this.useCouponHandle}>
            <p>使用</p>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const couponsData = state.infodata.getIn([actionTypes.AVAILABLE_COUPONS, 'data'])

  return {
    vouchers: couponsData && couponsData.data && couponsData.data.filter(coupon => coupon.type === '抵用券'),
    interestRates: couponsData && couponsData.data && couponsData.data.filter(coupon => coupon.type === '加息券'),
    selectedCoupon: state.useCoupons.getIn(['coupons', 'selectedCoupon']),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  setAppointPassword(value){
    dispatch({
      type: actionTypes.SET_APPOINT_PASSWORD,
      payload:value
    })
  },

  push(path) {
    dispatch(push(path))
  },

  goBack() {
    dispatch(goBack())
  },

  setUseCoupons(selectedCoupon, useCoupon) {
    dispatch({
      type: actionTypes.SET_USE_COUPONS,
      useCoupon,
      selectedCoupon
    })
  }
})

export default Dimensions()(connect(mapStateToProps, mapDispatchToProps)(wrap(SelectCoupon)))