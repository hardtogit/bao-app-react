/**
 * Created by xiangguo .
 * time:2017/10/31 0031.
 * email:413401168@qq.com.
 * use:auto...
 */
//债权购买
import React from 'react'
import { connect } from 'react-redux'
import {goBack, push} from 'react-router-redux'
import cn from 'classnames'
import NavBar from '../../../../components/NavBar'
import Button from '../../../../components/BaseButton'
import styles from './index.less'
import wrap from '../../../../utils/pageWrapper'
import {Link} from 'react-router'
import BuyInput from '../../../../components/customInput'
import Tipbar from '../../../../components/Tipbar'
import PayProcess from '../../payProcessOld'
import * as actionTypes from '../../../../actions/actionTypes'
import utils from '../../../../utils/utils'
import IsAuth from '../../../../components/isAuth'
import Pay from '../../../../pages/finance/pay/index'
import util from '../../../../utils/utils'
import setUrl from '../../../../components/setUrl'
import Education from '../../../../components/Dialog/education'
import Alert from '../../../../components/Dialog/alert'
const hostName=window.location.origin;
class CreditorBuy extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            copies: 200,
            chosenPay: '',
            payTop:'100%',
            url:'',
            select:1,
            pending:false,
            checkBox:false,
        }
        this.creditorsId = this.props.params.id
    }
    componentDidMount() {
        window['closeFn']=this.closeFn;
        // this.refs.choice.checked =true;
        this.props.getCreditorDetail(this.creditorsId)
        this.props.getUser();
        this.props.getEducationInfo();
        this.props.getEmptyContractsList()
    }
    componentWillReceiveProps(nextProps) {
        const {goBankData}=nextProps;
        //生成订单后跳转
        if(goBankData&&goBankData.code==100){
            this.props.clearData("GO_BANK_PAGE")
            this.props.push('/user/setting/bankPage?url='+goBankData.data.url)
        }else if(goBankData&&goBankData.code!=100){
            this.props.clearData("GO_BANK_PAGE")
            this.refs.tipbar.open('订单生成失败!');
        }
        if (!utils.isPlainObject(nextProps.detail)) {
            const copies = nextProps.detail.left_quantity ?
                nextProps.detail.left_quantity < this.state.copies ?
                    nextProps.detail.left_quantity : this.state.copies : 1
            this.setState({copies})
        }
        if (nextProps.creditorsBuyPending){
            this.setState({
                pending:true
            })
        }
    }
    changePending=()=>{
        this.setState({
            pending:false
        })
    }
    changeCopies = (value) => {
        if (value<=0){
            this.refs.tipbar.open('出借份数必须为正整数!');
        }else if (value>parseFloat(this.props.detail.left_quantity)){
            this.refs.tipbar.open('剩余份数不足!');
        }
        this.setState({copies: Number(value)})
    }
    onValid = () => {
        if(this.props.EducationData.data.has_num!=0){
            if( this.getPayTotal()>this.props.EducationData.data.single_buy_max_limit){
                this.refs.alert.show({
                    title:'风险提示',
                    content:'根据您的风险评测结果为'+this.props.EducationData.data.name+",您已超过单笔出借最大金额限制"+this.props.EducationData.data.single_buy_max_limit+'元',
                    okText:'确定'
                })
                return;
            }
            const {select}=this.state;
            if (select==1){
                this.refs.isAuth.isSecurityCard(this.successsFn,this.props.push,'/user/setting/tradePasswordSet')
            }else {
                this.refs.isAuth.isbindSecurityCard(this.successsFn,this.props.push,'/user/setting/securityCard')
            }
        }else{
            this.refs.education.getWrappedInstance().show();
        }
    }
    successsFn=()=>{
        const {select}=this.state;
        if (select==1){
            this.props.goBankPage({
                way:1,
                type:413,
                returnUrl:"",
                data:{
                    productId: this.props.params.id,
                    copies:this.state.copies,
                    type: 3,
                    payPass:"",
                    device:'WAP',
                    access_sys:'platform'
                }
            })
        }else{
            this.refs.payProcess.open({
                id: this.creditorsId,
                copies: this.state.copies
            })
        }
    }
    //是否阅读合同
    ifScan=(e)=>{
        if(this.state.checkBox){
            this.setState({
                checkBox:false
            })
        }else{
            this.setState({
                checkBox:true
            })
        }
    }
    canPay = () => {
        if(!this.state.checkBox){
            return false
        }
        // if (utils.isPlainObject(this.props.detail)) return false
        return this.state.copies <= (this.props.detail.left_quantity || 0)&&this.state.copies>0 ? true : false
    }
    creditorBuy = (password, money) => {
        this.props.balancePay(this.creditorsId, this.state.copies, password)
    }
    getPrice () {
        return utils.accAdd(this.props.detail.price, this.props.detail.prepaid_interest || 0)
    }
    getPayTotal = () => {
        if (utils.isPlainObject(this.props.detail)) return ''
        return Number(utils.toFixed(this.state.copies * this.getPrice(), 2))
    }
    //参考回报
    expectIncome = (nub) => {
        const detail = this.props.detail
        if (utils.isPlainObject(detail)) return ''
        let moneyIn = +this.state.copies * +detail.rate/100 * +detail.term * 50 /12 //原直投对应收益
        let moneyByCut = +this.state.copies * (50- +detail.price) //折价收益
        let moneyOut = +this.state.copies * +detail.prepaid_interest //预付利息
        return utils.padMoney(moneyIn + moneyByCut - moneyOut)
    }
    overPay=(val,data)=>{
        const{
                id,
                copies
            }=data,
            payPass='',
            type=2;
        const url=util.combineUrl(`${hostName}/mobile_api/creditors/pay-bond/${id}`,{copies,payPass,type,access_sys:'platform'})
        this.setState({
            url,
            payTop:'0px'
        })
    }
    closeFn=()=>{
        this.setState({payTop:'100%',url:''})
    }
    getChoose=(select)=>{
        this.setState({
            select
        })
    }
    pop=()=>{
        const time=this.refs.pay.getTime();
        if (time!=1){
            this.props.push(setUrl.getUrl())
        }else {
            this.props.goBack()
        }
    }
    render(){
        const detail = this.props.detail;
        const {
            EducationData,
            contractData
        } = this.props;
        let primeContent;
        if(EducationData&&EducationData.code == 100){
            if(EducationData.data.has_num != 0){
                primeContent = "您的风险承受类型："+EducationData.data.name+"，建议出借"+EducationData.data.max_month+"月以内项目";
            }
        }
        return(
            <div className={styles.root}>
                <div className={styles.bg}>
                    <NavBar title='确认支付' onLeft={this.pop}></NavBar>
                    <div style={{height:44}}></div>
                    <div className={styles.scroll}>
                        <div className={styles.infomation}>
                            <div className={cn(styles.infomationItem, styles.infomationItemLeft)}>
                                <p>单价<span>(元/份)</span></p>
                                <p>{detail.price || ''}</p>
                            </div>
                            <div className={styles.infomationItem}>
                                <p>剩余<span>(份)</span></p>
                                <p>{detail.left_quantity || ''}</p>
                            </div>
                            <div className={cn(styles.infomationItem, styles.infomationItemRight)}>
                                <p>预付利息<span>(元/份)</span></p>
                                <p>{detail.prepaid_interest || ''}</p>
                            </div>
                        </div>
                        <div className={styles.buyInput}>
                            <p>份数<span>(最少买一份)</span></p>
                            <BuyInput
                                containerStyle={{marginTop: 12}}
                                value={this.state.copies}
                                onChange={this.changeCopies} />
                        </div>
                        <div className={styles.expectIncome}>
                            <div className={styles.wrap}>
                                <p className={styles.name}>参考回报（元）</p>
                                <p className={styles.profit}>{this.expectIncome(this.state.quantity)}</p>
                            </div>
                        </div>
                        <div className={styles.payMoney}>
                            <p>还需支付（元）</p>
                            <p>{utils.padMoney(this.getPayTotal())}</p>
                        </div>
                        <PayProcess
                            ref='payProcess'
                            type='creditors'
                            getChoose={this.getChoose}
                            go={this.props.push}
                            user={this.props.user}
                            overPay={this.overPay}
                            balance={this.props.user.balance || 0}
                            onRequestBalancePay={this.creditorBuy}
                            inputValue={Number(utils.padMoney(this.getPayTotal()))}
                            balancePayPending={this.state.pending}
                            balancePayData={this.props.creditorsBuyData}
                            changePending={this.changePending}
                            clear={this.props.clear}/>
                        <div className={styles.payBtn}>
                            <p><input ref="choice"   onChange={this.ifScan} type="checkbox"/>我已阅读并同意{contractData&&contractData.data.map((item,i)=>{
                                return <Link key={i} to={`/emptyTemplate/${item.hetong_type?item.hetong_type:0}?name=${encodeURIComponent(item.hetong_name)}`} className={styles.protocol}>《{item.hetong_name}》</Link>
                            })}
                            </p>
                        </div>
                        <Button
                            containerStyle={{margin: '40px 15px 20px'}}
                            text='确认支付'
                            disable={this.canPay() > 0 ? false : true}
                            onClick={this.onValid}
                            status={this.canPay() > 0 ? '' : 'disable'}/>
                        <p className={styles.primeTxt}>{primeContent}</p>
                        <Tipbar ref="tipbar"/>
                        <IsAuth ref="isAuth"/>
                        <Education ref='education'/>
                        <Alert ref='alert'></Alert>
                    </div>
                </div>
                <div className={styles.zg} style={{top:this.state.payTop}}>
                    <Pay url={this.state.url} closeFn={this.closeFn} ref="pay"/>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    const userData = state.infodata.getIn([actionTypes.USER_INFO, 'data'])
    const detail = state.infodata.getIn(['CREDITORS_DETAIL', 'data'])
    return{
        user: userData && userData.data || {},
        detail: detail && detail.data || {},
        creditorsBuyPending: state.infodata.getIn([actionTypes.CREDITORS_BUY, 'pending']),
        creditorsBuyData: state.infodata.getIn([actionTypes.CREDITORS_BUY, 'data']),
        EducationData:state.infodata.getIn(['GET_EDUCATION_INFO', 'data']),
        goBankData:state.infodata.getIn(['GO_BANK_PAGE','data']),
        contractData:  state.infodata.getIn(['GET_EMPTY_CONTRACTS_LIST',"data"]),
    }
}
const mapDispatchToProps = (dispatch, ownProps) => ({
    getEmptyContractsList(){
        dispatch({
            type:'GET_EMPTY_CONTRACTS_LIST',
            params:[{product_type:'B'}]
        })
    },
    balancePay(creditorId, copies, payPass) {
        dispatch({
            type: actionTypes.CREDITORS_BUY,
            params: [creditorId, {
                copies,
                payPass,
                type: 3,
                access_sys:'platform'
            }]
        })
    },
    goBankPage(data){
        dispatch({
            type:'GO_BANK_PAGE',
            params:[data]
        })
    },
    getCreditorDetail(id) {
        dispatch({
            type: actionTypes.CREDITORS_DETAIL,
            params: [id,'platform']
        })
    },
    getUser(){
        dispatch({type:actionTypes.USER_INFO})
    },
    push(path) {
        dispatch(push(path))
    },
    goBack() {
        dispatch(goBack())
    },
    clearData(key){
        dispatch({
            type:'CLEAR_INFO_DATA',
            key:key
        })
    },
    clear(){
        dispatch({
            type:'CLEAR_INFO_DATA',
            key:'CREDITORS_BUY'
        })
    },
    getEducationInfo(){
        dispatch({
            type:'GET_EDUCATION_INFO'
        })
    },
})
export default connect(mapStateToProps, mapDispatchToProps)(wrap(CreditorBuy))