//选着加息券
import React from 'react'
import NavBar from '../../components/NavBar'
import styles from './selectCoupon.less'
import * as actionTypes from '../../actions/actionTypes'
import Fetch from '../../request/fetch'
import {connect} from 'react-redux'
import wrap from '../../utils/pageWrapper'
import {goBack, push} from 'react-router-redux'
import Dimensions from 'react-dimensions'
import AutoSizeInfinite from '../../components/AutoSizeInfinite/'
import Selectedimg from '../../assets/images/0k2.png'
import unSelectimg from '../../assets/images/circle.png'
import utils from '../../utils/utils'
import nullJx from '../../assets/images/nojiaxi1.png'
import nullDy from '../../assets/images/nodiyong.png'

class RatesCell extends React.Component {

  renderVoucher(data, index) {
    const { selected } = this.props
      const {amount,apply,end_date,start_date,id,invest_money,type}=data;
    return (
      <div className={styles.rateCell} key={index} style={{width:this.props.screenW}}>
        <div>
          <div>
            <p>{amount+'元'+type}</p>
            {selected.id == id ? <img src={Selectedimg} alt="选中"/> :
            <img onClick={()=>{this.props.onSelect(data)}} src={unSelectimg} />}
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
    const { selected } = this.props;
      const {amount,apply,end_date,start_date,id,invest_money,type}=data;
    return (
      <div className={styles.rateCell} key={index} style={{width:this.props.screenW}}>
        <div>
          <div>
            <p>{amount+'%'+type}</p>
            {selected.id == id ? <img src={Selectedimg} alt="选中"/> :
            <img onClick={()=>{this.props.onSelect(data)}} src={unSelectimg} />}
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
      // if (dy.length==0){
      //    dy=this.nullDom(nullJx);
      // }
      // if (jx.length==0){
      //    jx=this.nullDom(nullDy);
      // }
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
    if (!this.props.vouchers && !this.props.interestRates) { // 如果为空，去垃取数据
      const params = utils.getParams()
      this.props.getAvailableCoupons(params.product, params.month)
    }
  }

  componentWillUnmount() {

  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
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
    this.props.setUseCoupons(this.state.selectedCoupon, true)
    this.props.goBack()
  }

  unUseCouponHandle = () => {
    this.setState({selectedCoupon: ''})
    this.props.setUseCoupons('', false)
    this.props.goBack()
  }
 
  render(){
    const screenW=this.props.containerWidth

    return(
      <div className={styles.root}>
        <NavBar title="选择优惠券" onLeft={()=>this.props.goBack()}></NavBar>
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
            selected={this.state.selectedCoupon || ''} 
          />
        </div>

        <div style={{height:50}}></div>
        <div className={styles.sure}>
          <div onClick={this.unUseCouponHandle}>
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

  getAvailableCoupons(type, month) {
    dispatch({
      type: actionTypes.AVAILABLE_COUPONS,
      params: [type, month]
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