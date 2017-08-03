/**
 * Created by xiangguo .
 * time:2017/7/23 0023.
 * email:413401168@qq.com.
 * use:auto...
 */
import React from 'react'
import NavBar from '../../../../components/NavBar'
import Calculator from '../../../../components/Calculator'
import styles from './index.styl'
import classNames from 'classnames'
import wrap from '../../../../utils/pageWrapper'
import {push, goBack} from 'react-router-redux'
import {connect} from 'react-redux'
import Store from '../../../../components/Dialog/store'
import {DEPOSIT_DETAIL, RATE, USER_INFO} from '../../../../actions/actionTypes'
import security from '../../../../assets/images/gather/icon-01.png'
import introduce from '../../../../assets/images/gather/icon-02.png'
import details from '../../../../assets/images/gather/icon-03.png'
import project from '../../../../assets/images/gather/icon-04.png'
import Loading from '../../../../components/pageLoading'
import Header from '../../../../components/depositBanner'
import SimpleDepTime from '../../../../components/simpleDepTime'
import IsAuth from '../../../../components/isAuth'
import setUrl from '../../../../components/setUrl'
class GatherMain extends React.Component {

  state = {
    descActive: false,
    type:'A'
  }
  componentWillMount(){
      this.setState({
          type:this.props.params.type
      })
  }
  componentDidMount() {
      const {params:{productId},get}=this.props;
      get(productId)//获取聚点+详情
  }
  loading(){
      return(<Loading/>)
  }
  Timer=(monthN)=>{
      const {
          datas,
          datasB,
          params:{
              id,
              type
          }
      }=this.props;
      let data=datas;
      if (type=='B'){
          data=datasB
      }
      const {
          currentTime
      }=data.data;
      let startTime,
          endTime,
          time=new Date(parseInt(currentTime)*1000),
          year=time.getFullYear(),
          month=time.getMonth()+1,
          date=time.getDate();
          startTime=year+'年'+month+'月'+date+'日';
          month=month+parseInt(monthN);
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
        data,
        push
      } = this.props;
      let {
          id,
          rate,
          buy_total,
          buy_status,
          type,
          has_money,
          money,
          price,
          title,
          month
            }=data.data
      console.log(data)
      rate=parseFloat(rate).toFixed(2);
      //const {
      //    startTime,
      //    endTime
      //}=this.Timer(month,depositN);
      const textTz='锁定时间';
      const bData=[{name:'起投金额',val:price},{name:textTz,val:month+'个月'}];
      let text='';
      let flag=true;
      if(buy_status==0){
          if(parseInt(has_money)>=parseInt(money)){
              text='已售罄'
              flag=true
          }else{
              text='马上买入'
              flag=false
          }
      }else if (buy_status==1){
          text='未开始'
          flag=true
      }else if(buy_status==2){
          text='已结束'
          flag=true
      }
      return(
      <div>
          <Header rate={rate}  data={bData}/>
          <div className={styles.timeBox}>
          <SimpleDepTime startTime={'ds'} endTime={'dsa'} type={type}/>
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
                      {this.moneyFn(rate,month)}
                      <span>元</span>
                  </p>
              </div>
          </div>
          <div className={classNames(styles.depositBox,styles.pdAll)}>
              <ul className={styles.iconUl}>
                  <li onClick={()=>{push('/gatherDetail/'+title+'/'+month)}}>
                  <span>
                      <img src={security}/>
                  </span>
                      <span>
                         产品详情
                     </span>
                  </li>
                  <li onClick={()=>{push('/gatherDeposits/'+id)}}>
                     <span>
                      <img src={introduce}/>
                  </span>
                      <span>
                         标的详情
                     </span>
                  </li>
                  <li onClick={()=>{push('/gatherJoin/'+id)}}>
                      <span>
                      <img src={details}/>
                  </span>
                      <span>
                        加入记录
                   </span>
                  </li>
                  <li onClick={()=>{push('/gatherProblems')}}>
                   <span>
                      <img src={project}/>
                  </span>
                      <span>
                         常见问题
                     </span>
                  </li>
              </ul>
          </div>
          <div className={classNames(styles.depositBox,styles.pdAll1)}>
              累计加入{buy_total}人
          </div>
          <div className={styles.bottom}>
              <div onClick={() => this.refs.calculator.show()} className={styles.calculator}></div>
              <button onClick={()=>{this.purchase(id,push)}} disabled={flag} style={flag&&{backgroundColor:'#aaa'}||{}}>{text}</button>
          </div>
          <Calculator
              ref="calculator"
              unit="m"
              rate={rate}
              term={month}
              amount={10000}
             // rateMap={deposit.map(({rate, month}) => ({term: month, rate}))}
              modalStyle={styles.modalStyle}
              modalBody={styles.modalBody}
          />
          <IsAuth ref="isAuth"/>
          <Store ref="store"> </Store>
      </div>)
  }
  purchase=(id,push)=>{
      let storeData=JSON.parse(sessionStorage.getItem('bao-store'));
      if(storeData&&storeData.isRegister&&storeData.isBindBankcard){
          this.refs.isAuth.Verification(`/gatherBuy/${id}/2`,push,this.succsseFn,this.props.location.pathname)
      }else{
          this.refs.store.show();
      }


  }
  succsseFn=(url)=>{
        setUrl.setUrl(url)
    }
  render() {
    const {
        data,
        pop,
    }=this.props;
    const {
        type
    }=this.state;
    let Dom=this.loading();
    if (data){
        Dom=this.loadEnd()
    }

    return (
      <div className={styles.root}>
        <NavBar onLeft={pop}>聚点+详情</NavBar>
          {
              Dom
          }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      data:state.infodata.getIn(['GATHER_DETAIL','data']),
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
        type:'GATHER_DETAIL',
        params:[id]

    })
  }

})

export default connect(mapStateToProps, mapDispatchToProps)(wrap(GatherMain))
