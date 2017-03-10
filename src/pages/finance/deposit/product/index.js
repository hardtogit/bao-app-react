import React from 'react'
import NavBar from '../../../../components/NavBar'
import Calculator from '../../../../components/Calculator'
import styles from './index.styl'
import classNames from 'classnames'
import wrap from '../../../../utils/pageWrapper'
import {push, goBack} from 'react-router-redux'
import {connect} from 'react-redux'
import {DEPOSIT_DETAIL, RATE, USER_INFO} from '../../../../actions/actionTypes'
import security from '../../../../assets/images/security.png'
import introduce from '../../../../assets/images/introduce.png'
import details from '../../../../assets/images/details.png'
import project from '../../../../assets/images/project.png'
import Loading from '../../../../components/pageLoading'
import Header from '../../../../components/depositBanner'
import DepTime from '../../../../components/depTime'
class ProductDetail extends React.Component {

  state = {
    descActive: false
  }

  componentDidMount() {
    this.props.get(this.props.params.id)
  }
  loading(){
      return(<Loading/>)
  }
  Timer=(monthN)=>{
      const {
          datas,
      }=this.props;
      const {
          currentTime
      }=datas.data;
      let startTime,
          endTime,
          time=new Date(parseInt(currentTime)*1000),
          year=time.getFullYear(),
          month=time.getMonth()+1,
          date=time.getDate();
          startTime=year+'年'+month+'月'+date+'日';
          month=month+monthN;
          if (month>12){
              month=month-12;
              year=year+1;
          }
          endTime=year+'年'+month+'月'+date+'日';
          return{
              startTime,
              endTime
          }
  }
  moneyFn=(rate,month)=>{
      let money=parseFloat(10000*rate/100*(month/12)).toString();
      if (money.indexOf('.')!=-1){
          money=money.substring(0,money.indexOf('.')+3)
      }
      return money
  }
  loadEnd=()=>{
      const {
          push,
          deposit,
          datas,
          new_deposit,
          params: {
              id,
          },
      } = this.props;
      let rate = 0;
      let month = 0;
      if (id!=5){
          deposit.some((item, i) => {
              if (item.id == id) {
                  rate = +item.rate
                  month = +item.month
                  return true
              }
              return false
          })
      }else {
          rate=new_deposit.rate;
          month=new_deposit.month;
      }
      rate=parseFloat(rate).toFixed(2);
      const {
          startTime,
          endTime
      }=this.Timer(month);
      const money=this.moneyFn(rate,month);
      const bData=[{name:'起投金额',val:1000},{name:'锁定时间',val:month+'个月'}];
      return(
      <div>
          <Header rate={rate}  data={bData}/>
          <div className={styles.timeBox}>
          <DepTime startTime={startTime} endTime={endTime}/>
          </div>
          <div className={styles.depositBox}>
              <div className={styles.profit}>
                  <p>
                      收益估算
                  </p>
              </div>
              <div className={styles.profitContent}>
                  <p className={styles.profitText}>投资10000元，{month}个月后到期预计预期可赚</p>
                  <p className={styles.profitText1}>具体收益以实际到账为准</p>
                  <p className={styles.profitNum}>
                      {money}
                      <span>元</span>
                  </p>
              </div>
          </div>
          <div className={classNames(styles.depositBox,styles.pdAll)}>
              <ul className={styles.iconUl}>
                  <li onClick={()=>{push('/safeplan')}}>
                  <span>
                      <img src={security}/>
                  </span>
                      <span>
                         安全保障
                     </span>
                  </li>
                  <li onClick={()=>{push('/depositDetails')}}>
                     <span>
                      <img src={introduce}/>
                  </span>
                      <span>
                         定存宝详情
                     </span>
                  </li>
                  <li onClick={()=>{push('/planDetails/'+id)}}>
                      <span>
                      <img src={details}/>
                  </span>
                      <span>
                        计划详情
                   </span>
                  </li>
                  <li onClick={()=>{push('/demand-related-projects/'+datas.data.periods)}}>
                   <span>
                      <img src={project}/>
                  </span>
                      <span>
                         涉及项目
                     </span>
                  </li>
              </ul>
          </div>
          <div className={classNames(styles.depositBox,styles.pdAll1)}>
              累计加入{datas.data.total}人
          </div>
          <div className={styles.bottom}>
              <div onClick={() => this.refs.calculator.show()} className={styles.calculator}></div>
              <button onClick={()=>{push('/deposit-buy/'+id)}}>马上买入</button>
          </div>
          <Calculator
              ref="calculator"
              unit="m"
              rate={rate}
              term={month}
              amount={10000}
              rateMap={deposit.map(({rate, month}) => ({term: month, rate}))}
              modalStyle={styles.modalStyle}
              modalBody={styles.modalBody}
          />
      </div>)
  }
  render() {
    const {
        datas,
        pop
    }=this.props;
    let Dom;
    if (!datas){
        Dom=this.loading()
    }else {
        Dom=this.loadEnd()
    }
    return (
      <div className={styles.root}>
        <NavBar onLeft={pop}>定存宝详情</NavBar>
          {
              Dom
          }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    deposit: state.infodata.getIn([RATE, 'data']) && state.infodata.getIn([RATE, 'data']).data.deposit || [],
    new_deposit:state.infodata.getIn([RATE, 'data']) && state.infodata.getIn([RATE, 'data']).data.new_deposit||{},
    // 累计加入人数
    total: state.infodata.getIn([DEPOSIT_DETAIL, 'data']) && state.infodata.getIn([DEPOSIT_DETAIL, 'data']).data.total || 0,
    userInfoCode: state.infodata.getIn([USER_INFO, 'data']) && state.infodata.getIn([USER_INFO, 'data']).code || 0,
    datas:state.infodata.getIn(['DEPOSIT_DETAILS','data'])
  }
}

const mapDispatchToProps = (dispatch) => ({
  push(path) {
    dispatch(push(path))
  },

  pop() {
    dispatch(goBack())
  },
  get(id){
    dispatch({
        type:'DEPOSIT_DETAILS',
        params:[id]

    })
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(wrap(ProductDetail))
