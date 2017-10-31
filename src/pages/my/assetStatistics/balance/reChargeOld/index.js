import React from 'react' //充值
import NavBar from '../../../../../components/NavBar/'
import styles from './index.css'
import {connect} from 'react-redux'
import fivestar from '../../../../../assets/images/my-index/balance.png' //圆形五角星
import Loading from '../../../../../components/pageLoading/'
import Store from '../../../../../components/Dialog/store'
import {Link} from 'react-router'
import {push,goBack} from 'react-router-redux'
//import wrap from '../../../../../utils/pageWrapper'
import classNames from 'classnames'
import Tipbar from '../../../../../components/Tipbar/index'
import Alert from '../../../../../components/Dialog/alert'
import IsAuth from '../../../../../components/isAuth'
import Pay from '../../../../../pages/finance/pay/index'
import util from '../../../../../utils/utils'
const hostName = window.location.origin;
class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            top: '100%',
            recMoney: '',
            disabled: true,
            submite: false,
            payTop: '100%',
            url: ''
        }
    }
    componentWillMount(){
        this.props.update()
    }
    componentDidMount() {
        window['closeFn'] = this.closeFn;
        this.props.load();
    }
    goCash=(balance)=>{
        let storeData=JSON.parse(sessionStorage.getItem('bao-store'));
        if(storeData.isBindBankcard&&storeData.isRegister){
            if(storeData.isUploadIdcard){
                this.money(balance)
            }else{
                this.props.push('/user/IdCardUpload');
            }
        }else{
            if(storeData.isRegister){
                this.props.push('/user/setting/cardBind')
            }else{
                this.refs.tip.show();
            }
        }
    }
    closeFn = ()=> {
        this.setState({payTop: '100%', url: ''})
    }

    componentWillUnmount() {
        this.props.clearData();
    }

    componentWillReceiveProps(next) {
        const {
            cookie,
            }=next;
        if (cookie) {
            const {submite}=this.state;
            const money = this.state.recMoney;
            const type = 2;
            if (submite && cookie.code == 100) {
                this.setState({
                    submite: false,
                    payTop: '0px',
                    url: util.combineUrl(`${hostName}/mobile_api/pay`, {money, type})
                });
            } else if (submite) {
                this.setState({
                    submite: false,
                })
                this.openTipbar('提交失败!')
            }
        }
    }

    money = (balance)=> {
        //const baoBank = sessionStorage.getItem('bao-bank');
        //if (parseFloat(balance) < 50) {
        //    this.refs.alert.show({
        //        content: '对不起余额不足！',
        //        okText: '确定'
        //    })
        //} else {
            this.props.push('/user/withdrawalsOld')
            //if (baoBank != null) {
            //    this.props.push('/user/withdrawals')
            //} else {
            //    this.props.push('/user/setting/securityCard')
            //}
        //}
    }

    loadDom() {
        return (<Loading/>)
    }

    loadEndDom(data) {
        const {
            balance_platform
            }=data
        return (<div className={classNames(styles.recharge,styles.Boxing)}>
            <img src={fivestar}/>
            <p>我的余额</p>
            <h1>￥{balance_platform}</h1>
            <div className={styles.btnContent}>
                <button className={styles.rechargeBtn} onClick={()=>{
						let storeData=JSON.parse(sessionStorage.getItem('bao-store'));
		if(storeData.isBindBankcard&&storeData.isRegister){
            this.rechargeFn()
		}else{
		    if(storeData.isRegister){
		         this.props.push('/user/setting/cardBind')
		    }else{
		    	this.refs.tip.show();
		    }
		}
						}}>充值
                </button>
                <button className={styles.depositBtn} onClick={()=>{this.goCash(balance_platform)}}>提现
                </button>
            </div>
        </div>)
    }

    recChange = (e)=> {
        const recMoney = e.target.value,
            reg = /^-?\d*\.?\d*$/;
        this.setState({
            recMoney
        });
        if (!reg.test(recMoney) || recMoney == '') {
            this.openTipbar('请输入正确的充值金额！');
            this.setState({
                disabled: true
            });
        } else {
            this.setState({
                disabled: false
            });
        }
    }
    cancel = (data)=> {
        this.setState(data)
    }

    recharge() {
        const {
            top,
            recMoney,
            disabled
            }=this.state;
        return (<div className={styles.rechargeBox} style={{top:top}}>
            <NavBar leftNode={<span className={styles.rechargeTitle}>取消</span>}
                    style={BanckStyle}
                    onLeft={()=>{this.cancel({top:'100%'})}}>余额充值</NavBar>
            <div className={styles.inputBox}>
                <div className={styles.recInput}>
				  <span>
                        充值金额
				  </span>
				  <span>
					  <input placeholder="请输入金额" value={recMoney} onChange={this.recChange}/>
				  </span>
				  <span>
					  元
				  </span>
                </div>
                <div className={classNames(styles.recInput,styles.recName)}>
                    连连支付
                </div>
                <button className={styles.buttonNext} disabled={disabled} onClick={this.submit}>
                    下一步
                </button>
            </div>
            <Tipbar ref='tipbar'/>
            <Alert ref="alert"/>
            <IsAuth ref="isAuth"/>
        </div>)
    }

    pay = ()=> {
        return (<div className={styles.rechargeBox} style={{top:this.state.payTop}}>
            <Pay url={this.state.url} closeFn={this.closeFn} ref="pay"/>
        </div>)
    }
    rechargeFn = ()=> {
        let storeData = JSON.parse(sessionStorage.getItem('bao-store'));
        if (storeData.isBindBankcard && storeData.isRegister) {
            this.refs.isAuth.isbindSecurityCard(this.hasCard, this.props.push, '/user/setting/securityCard')
        } else {
            this.refs.tip.show();
        }
    }
    hasCard = ()=> {
        this.setState({
            top: '0px'
        })
    }

    openTipbar(message) {
        this.refs.tipbar.open(message)
    }

    submit = ()=> {
        this.setState({
            submite: true,
        });
        this.props.submit();
    }
    pop = ()=> {
        const time = this.refs.pay.getTime();
        if (time != 1) {
            this.props.push('/home/myIndex')
        } else {
            this.props.pop()
        }
    }

    render() {
        const {
            balance,
            }=this.props;
        let Dom;
        if (balance) {
            Dom = this.loadEndDom(balance.data)
        } else {
            Dom = this.loadDom()
        }
        return (
            <div className={styles.bg}>
                <NavBar onLeft={this.pop}
                        rightNode={<Link className={styles.detail} to={`/user/moneyLog`}>余额明细</Link>}
                        style={BanckStyle}>我的余额</NavBar>
                {
                    Dom
                }{
                this.recharge()
            }{
                this.pay()
            }
                <Store ref="tip"></Store>
            </div>
        )
    }
}
const BanckStyle = {
    position: 'absolute',
    top: '0px',
    left: '0px'
};
const Rechargeinit = (state, own)=>({
    balance: state.infodata.getIn(['USER_INFO_WITH_LOGIN', 'data']),
    cookie: state.infodata.getIn(['AUTH_COOKIE', 'data'])
})
const Rechargeinitfn = (dispath, own)=>({
    load(){
        dispath({
            type: "USER_INFO_WITH_LOGIN"
        })
    },
    pop(){
        dispath(goBack())
    },
    submit(){
        dispath({
            type: 'AUTH_COOKIE',
        })
    },
    push(url){
        dispath(push(url))
    },
    clearData(){
        dispath({
            type: 'CLEAR_INFO_DATA',
            key: 'AUTH_COOKIE'
        })
    },
    update(){
        dispath({
            type:'STORE_STATUS_INFO',
        })
    }
})
export default connect(Rechargeinit, Rechargeinitfn)(Index)