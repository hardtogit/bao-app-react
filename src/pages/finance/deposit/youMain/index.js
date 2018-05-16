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
import BaseText from '../../../../components/BaseText'
import security from '../../../../assets/images/gather/icon-01.png'
import introduce from '../../../../assets/images/gather/icon-02.png'
import details from '../../../../assets/images/gather/icon-03.png'
import project from '../../../../assets/images/gather/icon-04.png'
import Loading from '../../../../components/pageLoading'
import Header from '../../../../components/depositBanner'
import SimpleDepTime from '../../../../components/simpleDepTime'
import IsAuth from '../../../../components/isAuth'
import setUrl from '../../../../components/setUrl'
import {getAuthDetail} from '../../../../components/Permission'
import {Link} from 'react-router'
class GatherMain extends React.Component {
  state = {
    descActive: false,
    type:2
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
          value_start_date,
          value_end_date,
          type,
          has_money,
          money,
          price,
          title,
          month
            }=data.data;
      rate=parseFloat(rate).toFixed(2);
      const bData=[{name:'出借方式',val:"1000元起投1元递增"},{name:'服务时间',val:month+'个月'}];
      let text='';
      let flag=true;
      if(buy_status==0){
          if(parseInt(has_money)>=parseInt(money)){
              text='已售罄'
              flag=true
          }else{
              text='马上出借'
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
          <SimpleDepTime startLabel="服务开始" repayment="每月还息到期还本" endTime={value_end_date} startTime={value_start_date} endLabel="服务结束" type={type}/>
          </div>
          <BaseText className={styles.barText} onClick={()=>{this.props.push('/safeplan')}} label="多重风控保障体系"></BaseText>
          <div className={styles.depositBox}>
              <div className={styles.profit}>
                  <p>
                      收益估算
                  </p>
              </div>
              <div className={styles.profitContent}>
                  <p className={styles.profitText}>投资10000元，{month}个月后到期预期可赚</p>
                  <p className={styles.profitText1}>具体收益以实际到账为准</p>
                  <p className={styles.profitNum}>
                      {this.moneyFn(rate,month)}
                      <span>元</span>
                  </p>
              </div>
          </div>
          <div className={classNames(styles.depositBox,styles.pdAll)}>
              <ul className={styles.iconUl}>
                  <li onClick={()=>{push('/youDetail/'+id)}}>
                  <span>
                      <img src={security}/>
                  </span>
                      <span>
                         产品详情
                     </span>
                  </li>
                  <li onClick={()=>{push('/youDeposits/'+id)}}>
                     <span>
                      <img src={introduce}/>
                  </span>
                      <span>
                         标的详情
                     </span>
                  </li>
                  <li onClick={()=>{push('/youJoin/'+id)}}>
                      <span>
                      <img src={details}/>
                  </span>
                      <span>
                        加入记录
                   </span>
                  </li>
                  <li onClick={()=>{push('/youProblems')}}>
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
      let type=this.props.params.type;
      switch (getAuthDetail()){
          case 1:
              this.refs.isAuth.Verification(`/youBuy/${id}/${type}`,push,this.succsseFn,this.props.location.pathname)
              break;
          case 2:
              push('/user/setting/authorization');
              break;
          case 3:
              this.refs.store.show();
              break;
          default:
              break
      }

  }
  succsseFn=(url)=>{
        setUrl.setUrl(url)
    }
  render() {
    const {
        data,
        pop,
        backgroundColor,
    }=this.props;
    const {
        type
    }=this.state;
    let Dom=this.loading();
    if (data){
        Dom=this.loadEnd()
    }
      let backSty=backgroundColor?{borderRightColor:backgroundColor}:{borderRightColor:"#00a6e2"}
    return (
      <div className={styles.root}>
          <NavBar leftNode={<Link className={styles.leftNode} to="/home/productIndex">
              <span ><span className={styles.backBefore} >  </span> <span className={styles.backAfter}  style={backSty}></span></span>
            </Link>}>{type==5?'新手标计划详情':"优享+详情"}
          </NavBar>
          {
              Dom
          }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      data:state.infodata.getIn(['YOU_DETAIL','data']),
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
        type:'YOU_DETAIL',
        params:[id]

    })
  }

})

export default connect(mapStateToProps, mapDispatchToProps)(wrap(GatherMain))
