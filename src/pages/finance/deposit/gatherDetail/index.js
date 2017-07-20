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
import SimpleDepTime from '../../../../components/simpleDepTime'
import IsAuth from '../../../../components/isAuth'
import setUrl from '../../../../components/setUrl'
class GatherDetail extends React.Component {

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
        data
      } = this.props;
      let {
          rate,
          buyTotal,
          type,
          has_money,
          price,
          month
            }=data.data
      console.log(data)
      rate=parseFloat(rate).toFixed(2);
      //const {
      //    startTime,
      //    endTime
      //}=this.Timer(month,depositN);
      const money=this.moneyFn(rate,month);
      const textTz='锁定时间';
      const bData=[{name:'起投金额',val:price},{name:textTz,val:month+'个月'}];
      let text='马上买入';
      let flag=false;
      let isbuy=true;
      if (isbuy&&has_money>=money){
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
              累计加入{buyTotal}人
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
             // rateMap={deposit.map(({rate, month}) => ({term: month, rate}))}
              modalStyle={styles.modalStyle}
              modalBody={styles.modalBody}
          />
          <IsAuth ref="isAuth"/>
      </div>)
  }
  purchase=(id,lx,push)=>{
      this.refs.isAuth.Verification(`/deposit-buy/${id}/${lx}/${this.props.params.productId}`,push,this.succsseFn,this.props.location.pathname)
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

export default connect(mapStateToProps, mapDispatchToProps)(wrap(GatherDetail))
