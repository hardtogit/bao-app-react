/**
 * Created by Administrator on 2017/4/25.
 */
import React,{Component}from 'react' //我的定存宝
import styles from './index.less'
import Manage from '../../pages/user/common/manage/index'
import explan from '../../assets/images/my-index/nojilu_03.png' //没有记录
import dingicon from '../../assets/images/my-index/dingicon.png' //列表时钟
import zhitouicon from '../../assets/images/my-index/zhitouicon1.png' //提升收益
import Scroll from '../scroll/index'
import Util from "../../utils/utils"
import PropTypes from 'prop-types'
class Index extends Component {
    static PropTypes={
        banner:PropTypes.object,
        fetch:PropTypes.func,
        data:PropTypes.array,
        pending:PropTypes.bool,
        end:PropTypes.bool,
        click:PropTypes.func,
        type:PropTypes.string
    }
    static defaultProps={
       banner:{},
      fetch:()=>{},
      data:[],
      pending:true,
      end:false,
      click:()=>{},
      type:'A'
    }
    constructor(props) {
        super(props)
        this.state = {
            height:0
        }
    }
    bannerEnd=(e)=>{
        if (e!=null){
            this.setState({
                height:e.offsetHeight
            })
        }
    }
    ScrollDom=()=>{
        const {
            fetch,
            pending,
            end,
            data,
            click,
        }=this.props;
        const {
            height
        }=this.state;
        const BodyHeight=document.body.clientHeight,
            ScrollHeight=BodyHeight-height-44-50;
        return(<div style={{height:ScrollHeight}} className={styles.listBox}>
            <Scroll height={ScrollHeight} fetch={fetch} isLoading={pending} distance={5} endType={end}
                    nullDom={<div className={styles.nullBox}><img src={explan} /></div>}
                    endload={<div></div>}
            >

                {
                    data&&data.map((item,i)=>{
                            const {name,surplus_days,profit_accumulate,profit_expire,amount,coupon_text,coupon_type,id}=item;
                        let liDom;
                        if (coupon_type==1){
                            liDom=<span>{coupon_text}</span>
                        }else if (coupon_type==2){
                            liDom=<span className={styles.dyBox}>{coupon_text}</span>
                        }
                        return(<div className={styles.manageList} key={i} onClick={()=>{click(id)}}>
                            <div className={styles.listtitle}>
                                <img src={dingicon}/>{name}
                                {
                                    liDom
                                }
                                <p>还剩{surplus_days}天</p>
                            </div>
                            <ul>
                                <li><p className={styles.orgFont}>{Util.padMoney(profit_accumulate)}</p><p>累计收益</p></li>
                                <li><p>{Util.padMoney(profit_expire)}</p><p>到期收益</p></li>
                                <li><p>{Util.padMoney(amount)}</p><p>持有金额</p></li>
                            </ul>
                        </div>)
                    })
                }

            </Scroll>
        </div>)
    }
    ScrollDomB=()=>{
        const {
            fetch,
            pending,
            end,
            data,
            click,
        }=this.props;
        const {
            height
        }=this.state;
        const BodyHeight=document.body.clientHeight,
            ScrollHeight=BodyHeight-height-44-50;
        return(<div style={{height:ScrollHeight}} className={styles.listBox}>
            <Scroll height={ScrollHeight} fetch={fetch} isLoading={pending} distance={5} endType={end}
                    nullDom={<div className={styles.nullBox}><img src={explan} /></div>}
                    endload={<div></div>}
            >
                {
                    data&&data.map((item,i)=>{
                        const {name,surplusDays:surplus_days,profitAccumulate:profit_accumulate,
                                profitExpire:profit_expire,amount,couponText:coupon_text,couponType:coupon_type,id,status,periods,accountIncome}=item;
                        let liDom;
                        let Dom;
                        let dyDom;
                        if (status=='竞标中'){
                            Dom= <p className={styles.competitive}>{status}</p>
                        }else {
                            Dom=<p className={styles.surplus}>剩余{surplus_days}天</p>
                        }
                        if (coupon_type){
                            dyDom=<span className={styles.dyBox} style={coupon_type==1&&{background:'#feb278'}||{background:'#7acb9f'}}>{coupon_text}</span>
                        }
                        return(
                            <ul key={i} className={styles.listBoxOne} onClick={()=>{click(id)}}>
                                <li>
                                    <img src={zhitouicon}/>{name}
                                    {Dom}
                                </li>
                                <li>持有金额{dyDom}<p>{Util.padMoney(amount)}</p></li>
                                <li>到期收益<p>{Util.padMoney(profit_expire)}</p></li>
                                <li>已到账收益({periods})<p>{Util.padMoney(accountIncome)}</p></li>
                                <li>累计收益<p>{Util.padMoney(profit_accumulate)}</p></li>
                            </ul>
                        )
                    })
                }

            </Scroll>
        </div>)
    }
    loadEndDom=()=>{
        const {type}=this.props;
        if (type=='A'){
            var {
                total,
                profit_yesterday,
                profit_accumulate,
                revenue
            }=this.props.banner;
        }else {
            var {
                total,
                profitYesterday:profit_yesterday,
                profitAccumulate:profit_accumulate,
                revenue
            }=this.props.banner;
        }
        return(
            <div ref={this.bannerEnd}>
                <div className={styles.m_h_title}>
                    <Manage
                        titleLeft={`昨日收益`}
                        titleRight={`昨日收益`}
                        priceLeft={Util.padMoney(profit_yesterday)}
                        priceRight={Util.padMoney(profit_accumulate)}
                        titleBottom={'待收本息（利息部分'+Util.padMoney(revenue)+')'}
                        priceBottom={Util.padMoney(total)}
                    />
                </div>
            </div>
        )
    }
    render() {
        const {type}=this.props;
        const {height}=this.state;
        let listDom;
        if (height!=0){
            if (type=='B'){
                 listDom=this.ScrollDomB()
            }else {
                listDom=this.ScrollDom();
            }
        }
        return (
                <div className={styles.bg}>
                    {
                        this.loadEndDom()
                    }{
                    listDom
                }
                </div>
        )
    }
}
export default Index
