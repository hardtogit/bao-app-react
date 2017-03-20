//债权详情
import React from 'react'
import NavBar from '../../../../components/NavBar'
import styles from './index.less'
import * as actionTypes from '../../../../actions/actionTypes'
import Fetch from '../../../../request/fetch'
import {connect} from 'react-redux'
import Infinite from 'react-infinite'
import wrap from '../../../../utils/pageWrapper'
import {goBack, push} from 'react-router-redux'
import Goodimg from '../../../../assets/images/good.png'
import QuestionIMG from '../../../../assets/images/questionicon.png'
import CusDialog from '../../../../components/Dialog/alert.js'
import Load from '../../../../components/pageLoading'
import DepTime from '../../../../components/depTime'
import arrow2 from '../../../../assets/images/arrow2.png'
import Calculator from '../../../../components/Calculator'
class BorrowPeople extends React.Component{
  render(){
    const {data} =this.props
    let arr = data.authenticated ? data.authenticated:['','','','','','','','','','',]
    let arr1= arr.filter((ele,index)=>index%2 === 0)
    let arr2= arr.filter((ele,index)=>index%2 !== 0)
    return(
        <div className={styles.borrowMan}>
            <div>
              <h4>借款用途</h4>
              <div>{data.loan_purpose}
              </div>
            </div>

            <div>
              <h4>还款来源</h4>
              <div>{data.loan_source}
              </div>
            </div>

            <div>
              <h4>平台认证</h4>
              <div>
                <div>
                  {
                    arr1 && arr1.length>0 &&
                      arr1.map((ele,index)=>{
                        return(
                          <div key={index}>
                            <span>{ele}</span>
                            <img src={Goodimg} alt="ok"/>
                          </div>
                        )
                      })
                  }
                </div>

                <div>
                  {
                   arr2 && arr2.length>0 &&
                      arr2.map((ele,index)=>{
                        return(
                          <div key={index}>
                            <span>{ele}</span>
                            <img src={Goodimg} alt="ok"/>
                          </div>
                        )
                      })
                  }
                </div>
              </div>
            </div><div>
              <h4>借款人信息</h4>
              <div>{data.loan_info}
              </div>
            </div>
        </div>
    )
  }
}
class CommonQusetion extends React.Component{
  render(){
    return(
      <div className={styles.commonQusetion}>
        <div>
          <p>债权转让项目是怎么回事？</p>
          <p>本质上是直投项目，就是以前有客户投资长期的直投项目（持有3个月以上即可转让），比如12月期限的，持有6月后资金有急需，就把还没有到期的资金进行转让，让其他投资人购买，从而提前收回资金。</p>
        </div>
        <div>
          <p>那每份价格里面有个应付利息是怎么回事？</p>
          <p>这部分资金是属于原转让人的，不过先由购买人先垫付，后借款人还款之后会返还给购买人。比如：项目的还款日是每月15号；客户在12月4日转让项目；因为没有到15号，因此转让人11.15--12.4号应得的利息还没有得到，因此这部分利息就由购买债权的人先垫付，后面借款人还款了之后，再支付给购买债权的人；</p>
        </div>
        <div>
          <p>那每份价格43、48元是怎么回事，宝点网不是50元一份吗？</p>
          <p>这是债权转让项目的优惠了，因为客户是有资金急需才转让的 ，为了让人快点购买，通常会折价转让，原先50元一份，通常会48、43元一份进行转让，就像我们急需要把一个东西卖掉变成现金，通常会卖便宜一点，一样的道理。</p>
        </div>
        <div>
          <p>那投资债权转让项目划算吗？</p>
          <p>投资债权转让项目挺划算的，主要有两个原因：1、最近因市场行情，投资利率较以前有所下调，同样期限，以前投资项目年化利率要高些，现在投资债权转让还是享受以前项目的利率；2、客户急需转让资金，通常会折价转让，比如以前是50元一份，现在可能49就能买到。</p>
        </div>
      </div>
    )
  }
}

class CreditorDetails extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      selectID:1
    }
  }
  componentDidMount() {
    this.props.getData()
  }
  changeType=(ele)=>{
    if (this.state.selectID != ele) {
      this.setState({
        selectID:ele
      })
    }
  }
  toBuy=()=>{
    const is_login = true;
    const {
      is_overdue,//是否已过投标期限
    } = this.props.data
    const {
      params: {
        id,
      }
    } = this.props
    // const is_overdue = true;

    if (is_login) {
      if (is_overdue) {
        //提示过期
        this.props.wrongRef.show({
          content:'投标时间已过',
          okText:'知道了'
        })
      }else{
        //推送到购买页面
        this.props.push(`/creditorBuy/${id}`)
      }
    }else{
      //跳转登录
      this.props.push(`/login/`)
    }
  }
  render(){
    let {
      data,
      pending,
      params: {
        id,
      }
    } = this.props;

    const selectID =this.state.selectID
    return(
      <div className={styles.root}>
          <NavBar onLeft={()=>this.props.goBack()}>
              {data&&data.name||'产品详情'}
          </NavBar>
        <div className={styles.scroll}>
        {
          data
          ?
          <div>
            <div>
              <div className={styles.topDiv}>
                <div className={styles.blueDiv}>
                  <p>{data.price}</p>
                  <p>(元/份)</p>
                  <div className={styles.detailinfo}>
                    <span>{data.rate}%</span>
                    <span>{data.term}个月</span>
                    <span>{data.left_quantity}</span>
                  </div>
                  <div className={styles.detailinfoText}>
                    <span>年利率</span>
                    <span>剩余期限</span>
                    <span>剩余份数</span>
                  </div>
                </div>
                <div className={styles.whiteDiv}>
                  <div className={styles.suBox}>
                  安全保障计划
                      <img src={arrow2} className={styles.suJt}/>
                  </div>
                  <div className={styles.timeBox}>
                      <DepTime type={1} startTime={data.interest_start_time} endTime={data.interest_end_time} Grade={data.credit_rating}
                               repayment={data.repayment} lx={data.type == '抵押' ? 1 : 2}/>
                  </div>
                </div>
              </div>
              <div className={styles.typeDiv}>
                <div className={styles.cutDiv}></div>
                <div className={styles.clickType} >
                  <div style={{borderBottomColor:selectID===1?'#00a6e2':'transparent'}} onClick={() => {this.changeType(1)}}>
                    <p style={{color:selectID===1?'#00a6e2':'#000'}}>借款人</p>
                  </div>
                  <div style={{borderBottomColor:selectID===2?'#00a6e2':'transparent'}} onClick={() => this.changeType(2)}>
                    <p style={{color:selectID===2?'#00a6e2':'#000'}}>常见问题</p>
                  </div>
                </div>
                {selectID === 1 ? <BorrowPeople data={data}></BorrowPeople> : <CommonQusetion />}
              </div>
              <div className={styles.takePlace}></div>
              <div className={styles.bottom}>
                  <div onClick={() => this.refs.calculator.show()} className={styles.calculator}></div>
                  <button onClick={()=>this.toBuy()}>马上买入</button>
              </div>
              <Calculator
                  ref="calculator"
                  unit="m"
                  rate={data.rate}
                  term={data.term}
                  amount={10000}
                  modalStyle={styles.modalStyle}
                  modalBody={styles.modalBody}
                  termFixed={true}
              />
            </div>
          </div>
          :
          <Load></Load>
        }
            <CusDialog ref='wrong'></CusDialog>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state,ownProps)=>{
    return{
      pending:state.infodata.getIn([actionTypes.FETCH_CREDITORS_DETAIL_DATA,'pending']),
      data:state.infodata.getIn([actionTypes.FETCH_CREDITORS_DETAIL_DATA,'data']) && state.infodata.getIn([actionTypes.FETCH_CREDITORS_DETAIL_DATA,'data']).data,
    }
}
const mapDispatchToProps = (dispatch,ownProps)=>({
  getData(){
    dispatch({
      type:actionTypes.FETCH_CREDITORS_DETAIL_DATA,
      params:[ownProps.params.id],
    })
  },
  push(path){
    dispatch(push(path))
  },
  goBack() {
    dispatch(goBack())
  }
})

export default (connect(mapStateToProps, mapDispatchToProps)(wrap(CreditorDetails)))
