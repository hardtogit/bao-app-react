import React from 'react'
import NavBar from '../../../../components/NavBar'
import Calculator from '../../../../components/Calculator'
import styles from './index.styl'
import classNames from 'classnames'
import Store from '../../../../components/Dialog/store'
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
import IsAuth from '../../../../components/isAuth'
import setUrl from '../../../../components/setUrl'
import {platFormGetAuthDetail,getAuthDetail} from '../../../../components/Permission'
import {Link} from 'react-router'
class ProductDetail extends React.Component {

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
      const {params:{type,productId},getList,get,getB}=this.props;
      const depositbs=JSON.parse(sessionStorage.getItem('bao-depositbs'));
     if (type=='B'){
         getB(productId);
         if (depositbs==null){
             getList();
         }
     }
     if (type=='A'){
         get(productId)
     }
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
      console.log(data)
      const {
          startTime,
          endTime
      }=data.data;
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
  loadEnd=(depositbs,isbuy,num)=>{
      const {
          push,
          deposit,
          datas,
          datasB,
          new_deposit,
          params: {
              id,
              type:lx
          },
      } = this.props;
      const {type}=this.state;
      let rate = 0;
      let month = 0;
      let qt=1000;
      let depositN=deposit;
      let periods=datas;
      if (lx=='B'){
           depositN=depositbs;
          periods=datasB
      }
      if (id!=5){
          rate = depositN[id].rate;
          month = depositN[id].month;
      }else {
          rate=new_deposit.rate;
          month=new_deposit.month;
          qt=50;
      }
      rate=parseFloat(rate).toFixed(2);
      const {
          startTime,
          endTime
      }=this.Timer(month,depositN);
      const money=this.moneyFn(rate,month);
      const textTz=lx=='A'?'锁定时间':'出借时间';
      const bData=[{name:'起投金额',val:qt},{name:textTz,val:month+'个月'}];
      let text='马上出借';
      let flag=false
      if (isbuy&&num==0){
          text='已售罄'
          flag=true
      }else if (!isbuy){
          text='未开始'
          flag=true
      }
      return(
      <div>
          <Header rate={rate}  data={bData}/>
          <div className={styles.timeBox}>
          <DepTime startTime={startTime} endTime={endTime} type={type}/>
          </div>
          <div className={styles.depositBox}>
              <div className={styles.profit}>
                  <p>
                      收益估算
                  </p>
              </div>
              <div className={styles.profitContent}>
                  <p className={styles.profitText}>出借10000元，{month}个月后到期预计预期可赚</p>
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
                         风险控制
                     </span>
                  </li>
                  <li onClick={()=>{push('/depositDetails')}}>
                     <span>
                      <img src={introduce}/>
                  </span>
                      <span>
                         定存宝介绍
                     </span>
                  </li>
                  <li onClick={()=>{push('/planDetails/'+id+'/'+this.props.params.type)}}>
                      <span>
                      <img src={details}/>
                  </span>
                      <span>
                        计划详情
                   </span>
                  </li>
                  <li onClick={()=>{push('/demand-related-projects/'+periods.data.periods+'/'+lx)}}>
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
              累计加入{periods.data.total}人
          </div>
          <div className={styles.bottom}>
              <div onClick={() => this.refs.calculator.show()} className={styles.calculator}></div>
              <button onClick={()=>{this.purchase(id,lx,push)}} disabled={flag} style={flag&&{backgroundColor:'#aaa'}||{}}>{text}</button>
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
          <IsAuth ref="isAuth"/>
      </div>)
  }
  purchase=(id,lx,push)=>{
      switch (platFormGetAuthDetail()){
          case 1:
              this.refs.isAuth.Verification(`/deposit-buy/${id}/${lx}/${this.props.params.productId}`, push, this.succsseFn, this.props.location.pathname)
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
        datas,
        pop,
        datasB,
        backgroundColor,
        params:{type:lx,id}
    }=this.props;
    const {
        type
    }=this.state;
    let Dom=this.loading();
    if (lx=='A'){
        const deposit=JSON.parse(sessionStorage.getItem('bao-deposit'));
        if (datas){
            let bool=true;
            if (id!=5){
                bool=deposit.deposit[id].isBuy;
            }else {
               bool=deposit.new_deposit.isBuy;
            }
            Dom=this.loadEnd('',bool,datas.data.quantity)
        }
    }else {
        const depositbs=JSON.parse(sessionStorage.getItem('bao-depositbs'));
        if (datasB&&depositbs){
            Dom=this.loadEnd(depositbs.list,depositbs.list[id].isBuy,datasB.data.remain)
        }
    }
    let backSty=backgroundColor?{borderRightColor:backgroundColor}:{borderRightColor:"#00a6e2"}
    return (
      <div className={styles.root}>
          <Store ref="store"></Store>
          <NavBar leftNode={<Link className={styles.leftNode} to="/home/productIndex">
              <span ><span className={styles.backBefore} >  </span> <span className={styles.backAfter}  style={backSty}></span></span>
          </Link>}>
            {type=='A'&&(id==5&&'新手标计划详情'||'定存宝A计划详情')||'定存宝B计划详情'}</NavBar>
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
    datas:state.infodata.getIn(['DEPOSIT_DETAILS','data']),
    datasB:state.infodata.getIn(['DEPOSITBS_DETAILS','data'])
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
    getB(id){
      dispatch({
          type:'DEPOSITBS_DETAILS',
          params:[id]
      })
    },
    getList(){
        dispatch({
            type:'DEPOSITBS_PLANB'
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(wrap(ProductDetail))
