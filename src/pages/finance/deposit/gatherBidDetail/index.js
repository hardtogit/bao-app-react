import React from 'react'
import NavBar from '../../../../components/NavBar'
import Calculator from '../../../../components/Calculator'
import styles from './index.styl'
import classNames from 'classnames'
import wrap from '../../../../utils/pageWrapper'
import {push, goBack} from 'react-router-redux'
import {connect} from 'react-redux'
import {DEPOSIT_DETAIL, RATE, USER_INFO} from '../../../../actions/actionTypes'
import arrow2 from '../../../../assets/images/arrow2.png'
import security from '../../../../assets/images/gather/icon-05.png'
import introduce from '../../../../assets/images/gather/icon-06.png'
import details from '../../../../assets/images/gather/icon-07.png'
import Loading from '../../../../components/pageLoading'
import Header from '../../../../components/depositBanner'
import SimpleDepTime from '../../../../components/simpleDepTime'
import Utils from '../../../../utils/utils'
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
      const {params:{id},get}=this.props;
      get(id)//获取聚点+详情
  }
  loading(){
      return(<Loading/>)
  }

  moneyFn=(rate,month)=>{
      let money=parseFloat(10000*rate/100*(month/12)).toString();
      if (money.indexOf('.')!=-1){
          money=money.substring(0,money.indexOf('.')+3)
      }
      return money
  }
  loadEnd=()=>{
      Date.prototype.format = function(fmt) {
          var o = {
              "M+" : this.getMonth()+1,                 //月份
              "d+" : this.getDate(),                    //日
              "h+" : this.getHours(),                   //小时
              "m+" : this.getMinutes(),                 //分
              "s+" : this.getSeconds(),                 //秒
              "q+" : Math.floor((this.getMonth()+3)/3), //季度
              "S"  : this.getMilliseconds()             //毫秒
          };
          if(/(y+)/.test(fmt)) {
              fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
          }
          for(var k in o) {
              if(new RegExp("("+ k +")").test(fmt)){
                  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
              }
          }
          return fmt;
      };
      const {
        data,
        params:{id},
        push
      } = this.props;
      let {
          rate,
          type,
          name,
          repayment_type,
          end_time,
          start_time,
          total,
          price,
          title,
          month
            }=data.data
      console.log(data)
      rate=parseFloat(rate).toFixed(2);
      const money=this.moneyFn(rate,month);
      const bData=[{name:'借款金额',val:total},{name:'借款期限',val:month+'个月'}];
      return(
      <div>
          <Header rate={rate}  data={bData}/>
          <div className={styles.timeBox}>
          </div>
          <div className={styles.depositBox}>
              <div className={styles.suBox} onClick={()=>{push('/safeplan')}}>
                  安全保障计划
                  <img src={arrow2} className={styles.suJt}/>
              </div>
          </div>
          <div className={styles.listInfo}>
              <div className={styles.item}>
                  <div className={styles.left}>产品类型</div>
                  <div className={styles.right}>{(()=>{
                           if(type=='1'){
                               return "信用"
                           }else if(type=='5'){
                               return "抵押"
                           }else{
                               return "信用"
                           }
                  })()}</div>
              </div>
              <div className={styles.item}>
                  <div className={styles.left}>还款方式</div>
                  <div className={styles.right}>{(()=>{
                      if(repayment_type=='1'){
                          return "按天到期还款"
                      }else if(repayment_type=='2'){
                          return "按月分期还款"
                      }else if(repayment_type=='3'){
                          return "按季分期还款"
                      }else if(repayment_type=='4'){
                          return "每月还息到期还本"
                      }else{
                          return ''
                      }

                  })()}</div>
              </div>
              <div className={styles.item}>
                  <div className={styles.left}>起息日期</div>
                  <div className={styles.right}>{new Date(start_time*1000).format("yyyy-MM-dd")}</div>
              </div>
              <div className={styles.item}>
                  <div className={styles.left}>结束日期</div>
                  <div className={styles.right}>{new Date(end_time*1000).format("yyyy-MM-dd")}</div>
              </div>

          </div>
          <div className={classNames(styles.depositBox,styles.pdAll)}>
              <ul className={styles.iconUl}>
                  <li onClick={()=>{push('/gatherBorrowDetail/'+id)}} >
                  <span>
                      <img src={security}/>
                  </span>
                      <span>
                         借款详情
                     </span>
                  </li>
                  <li onClick={()=>{push('/gatherDeposits/'+id)}}>
                     <span>
                      <img src={introduce}/>
                  </span>
                      <span>
                         还款详情
                     </span>
                  </li>
                  <li onClick={()=>{push('/gatherJoin/'+id)}}>
                      <span>
                      <img src={details}/>
                  </span>
                      <span>
                        投资记录
                   </span>
                  </li>
              </ul>
          </div>
          <div className={styles.tip}>
              温馨提示：理财有风险 投资需谨慎
          </div>
      </div>)
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
        <NavBar onLeft={pop}>{data&&data.data.name}</NavBar>
          {
              Dom
          }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      data:state.infodata.getIn(['GATHER_BID_DETAIL','data']),
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
        type:'GATHER_BID_DETAIL',
        params:[id]

    })
  }

})

export default connect(mapStateToProps, mapDispatchToProps)(wrap(GatherMain))
