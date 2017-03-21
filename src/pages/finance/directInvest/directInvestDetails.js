import React,{Component} from 'react'
import NavBar from '../../../components/NavBar'
import styles from './directInvestDetails.less'
import Header from '../../../components/depositBanner'
import DepTime from '../../../components/depTime'
import arrow2 from '../../../assets/images/arrow2.png'
import Load from '../../../components/pageLoading'
import Ok from '../../../assets/images/ok.png'
import Calculator from '../../../components/Calculator'
import {connect} from 'react-redux'
import {goBack,push} from 'react-router-redux'
import classNames from 'classnames'
import LoadList from '../../../components/scroll/config'
import nullImg from '../../../assets/images/record.png'
import IsAuth from '../../../components/isAuth'
class Index extends Component{
    constructor(props){
        super(props)
        this.state={
            tabPage:0,
            demoNull:false
        }
    }
    componentDidMount(){
        const {
            getData,
            getList,
            routeParams:{
                id
            }
        }=this.props;
        getData(id);
        getList(id);
        this.addScroll();
    }
    componentDidUpdate(){
       const evet=this.refs.demo,
             evet1=this.refs.topHeight;
       if (evet){
          const Height=evet.offsetHeight,
                Theight=evet1.offsetHeight,
                bodyHeight=document.body.offsetHeight;
          if (Height!=0){
              const {
                  end,
                  getList,
                  routeParams:{
                      id
                  }
              }=this.props;
              const allHeight=Theight+Height;
              if (allHeight<=bodyHeight&&!end){
                  getList(id)
              }else {
                  const {
                      demoNull
                  }=this.state;
                  if (!demoNull){
                      this.setState({
                          demoNull:true
                      })
                  }
              }
          }else {
              return false
          }
       }
    }
    componentWillUnmount(){
        this.props.clearData()
    }
    btDom=()=>{
        const {
            pending,
            end,
            listData
        }=this.props;
        let Dom;
        if (pending&&!end){
            Dom=LoadList.loadingDom();
        }else if (end){
            Dom=<div className={styles.nullDom}>没有更多</div>
        }
        if (listData&&end){
           if (listData.size==0){
               const evnt=this.refs.tabBox;
               if (evnt){
                   const nHeight=evnt.offsetHeight;
                   Dom=<div style={{height:nHeight}} className={styles.nullImg}>
                       <img src={nullImg}/>
                   </div>
               }
           }
        }
        return Dom;
    }
    demoDom=()=>{
        const {
            listData
        }=this.props;
        const {
            demoNull
        }=this.state;
        if (demoNull){
            return null
        }
       return( <div className={classNames(styles.tabBox,styles.demoBox)} ref="demo">
           {listData&&listData.map((item,i)=>{
               const {name,date,amount}=item;
               return(<div className={styles.tabListBox} key={i}>
                   <div className={styles.tabListLeft}>
                       <p>{name}</p>
                       <p>{date}</p>
                   </div>
                   <div className={styles.tabListRight}>
                       {amount}元
                   </div>
               </div>)
           })}
       </div>)
    }
    addScroll=()=>{
        const Evt=this.refs.body,
              bodyHeight=document.body.offsetHeight;
        Evt.addEventListener('scroll',()=>{
            const {
                tabPage,
            }=this.state;
            const {
                listData,
                pending,
                getList,
                end,
                routeParams:{
                    id
                }
            }=this.props;
            if (tabPage==1&&listData){
                const Height=Evt.scrollTop,
                      EvtHeight=this.refs.content.offsetHeight+94,
                      offHeight=EvtHeight-Height-bodyHeight;
                  if (offHeight<10&&!pending&&!end){
                      getList(id);
                  }

            }
        })
    }
    setPage=(tabPage)=>{
        this.setState({
            tabPage
        })
    }
    loadEndDom=()=>{
        const {
            total,
            rate,
            term,
            type,
            fundraising,
            interest_start_time,
            interest_end_time,
            credit_rating,
            repayment,
            loan_purpose,
            loan_source,
            authenticated,
            loan_info,
            name
        }=this.props.infoData.data;
        const {
            listData,
            pop,
            push,
            routeParams:{
                id
            }
        }=this.props;
        const {
            tabPage
        }=this.state;
        const Bdatas=[{name:'借款总额',val:total},{name:'剩余金额',val:total-fundraising},{name:'投资期限',val:term+'个月'}],
              loadList=this.btDom();
        return(<div ref="content">
            <NavBar onLeft={pop}>
                <div className={styles.title}>{name}</div>
            </NavBar>
            <div ref='topHeight'>
            <Header rate={rate} data={Bdatas}/>
            <div className={styles.suBox} onClick={()=>{push('/safeplan')}}>
                安全保障计划
                <img src={arrow2} className={styles.suJt}/>
            </div>
            <div className={styles.timeBox}>
                <DepTime type={1} startTime={interest_start_time} endTime={interest_end_time} Grade={credit_rating}
                         repayment={repayment} lx={type}/>
            </div>
                <div className={styles.tabHeader}>
                  <span className={tabPage==0&&styles.tabCheck||null} onClick={()=>{this.setPage(0)}}>
                      借款人
                  </span>
                    <span className={tabPage==1&&styles.tabCheck||null} onClick={()=>{this.setPage(1)}}>
                      投资记录
                  </span>
                </div>
            </div>
                   <div className={classNames(styles.tabBox,tabPage!=0&&styles.none)} ref="tabBox">
                    <div className={styles.tabOne}>
                        <div className={styles.tabContent}>
                            <h3>借款用途</h3>
                            <div>
                                {
                                    loan_purpose
                                }
                            </div>
                        </div>
                    </div>
                    <div className={styles.tabOne}>
                        <div className={styles.tabContent}>
                            <h3>还款来源</h3>
                            <div>
                                {loan_source}
                            </div>
                        </div>
                    </div>
                    <div className={styles.tabOne}>
                        <div className={styles.tabContent}>
                            <h3>平台认证</h3>
                            <div>
                                {
                                    authenticated&&authenticated.map((item,i)=>
                                        <span key={i} className={styles.newsBox}>{item} <img src={Ok}/></span>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className={styles.tabOne}>
                        <div className={styles.tabContent}>
                            <h3>借款人信息</h3>
                            <div>
                                {loan_info}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classNames(styles.tabBox,tabPage!=1&&styles.none)}>
                        {listData&&listData.map((item,i)=>{
                            const {name,date,amount}=item;
                            return(<div className={styles.tabListBox} key={i}>
                                <div className={styles.tabListLeft}>
                                    <p>{name}</p>
                                    <p>{date}</p>
                                </div>
                                <div className={styles.tabListRight}>
                                    {amount}元
                                </div>
                            </div>)
                        })}
                    {
                        loadList
                    }
                </div>

            <div className={styles.bottom}>
                <div onClick={() => this.refs.calculator.show()} className={styles.calculator}></div>
                <button onClick={()=>{this.purchase(id,push)}}>马上买入</button>
            </div>
            <IsAuth ref="isAuth"/>
            <Calculator
                ref="calculator"
                unit="m"
                rate={rate}
                term={term}
                amount={10000}
                modalStyle={styles.modalStyle}
                modalBody={styles.modalBody}
                termFixed={true}
            />
        </div>)
    }
    purchase=(id,push)=>{
        this.refs.isAuth.Verification('/directBuy/'+id,push)
    }
    loadDom=()=>{
        return(<Load/>)
    }
   render(){
       const {
           infoData,
       }=this.props;
        let Dom=this.loadDom();
        let demoDom;
        if (infoData){
            Dom=this.loadEndDom();
            demoDom=this.demoDom();
        }
       return(
         <div>
        <div className={styles.body} ref="body">
           {
               Dom
           }
       </div>
             {
                 demoDom
             }
         </div>
           )
   }
}
const datas=(state)=>({
      infoData:state.infodata.getIn(['DIRECTINVEST_DETAIL','data']),
      listData:state.listdata.getIn(['FETCH_DIRECT_BUY_RECORD_DATA','data']),
      pending:state.listdata.getIn(['FETCH_DIRECT_BUY_RECORD_DATA','pending']),
      end:state.listdata.getIn(['FETCH_DIRECT_BUY_RECORD_DATA','pageEnd'])
})
const dispatchFn=(diapatch)=>({
       getData(id){
          diapatch({
              type:'DIRECTINVEST_DETAIL',
              params:[id]
          })
       },
       getList(id){
            diapatch({
                type:'FETCH_DIRECT_BUY_RECORD_DATA',
                params:[id]
            })
       },
    clearData(){
        diapatch({
            type:'CLEAR_DATA',
            key:'FETCH_DIRECT_BUY_RECORD_DATA'
        })
    },
    pop(){
        diapatch(goBack())
    },
    push(url){
        diapatch(push(url))
    }
})
export default connect(datas,dispatchFn)(Index)