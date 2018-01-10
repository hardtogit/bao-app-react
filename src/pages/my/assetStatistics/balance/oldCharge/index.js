/**
 * Created by xiangguo .
 * time:2018/1/9 0009.
 * email:413401168@qq.com.
 * use:auto...
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {goBack, push} from 'react-router-redux'
import NavBar from '../../../../../components/NavBar'
import Store from '../../../../../components/Dialog/store'
import Tipbar from '../../../../../components/Tipbar/index'
import Alert from '../../../../../components/Dialog/alert'
import IsAuth from '../../../../../components/isAuth'
import util from '../../../../../utils/utils'
import Pay from '../../../../../pages/finance/pay/index'
import classNames from 'classnames'
import styles from './index.less'
const hostName = window.location.origin;
class Index extends Component {
    constructor(props) {//构造器
        super(props);
        this.state = {
            recMoney: '',
            disabled: true,
            submite:false,
            payTop: '100%'
        }
    }
    componentWillReceiveProps(next) {
        const {
            cookie,
        } = next;
        if (cookie) {
            const {submite} = this.state;
            const money = this.state.recMoney;
            const type = 2;
            const access_sys = 'platform'
            if (submite && cookie.code == 100) {
                this.setState({
                    submite: false,
                    payTop: '0px',
                    url: util.combineUrl(`${hostName}/mobile_api/pay`, {money, type, access_sys})
                });
            } else if (submite) {
                this.setState({
                    submite: false,
                })
                this.openTipbar('提交失败!')
            }
        }
    }
    closeFn = () => {
        this.setState({payTop: '100%'})
    };
    recChange = (e) => {
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
    };
    submit = () => {
        this.setState({
            submite: true,
        });
        this.props.submit();
    }

    render() {
        const {pop, push, userInfo} = this.props
        const {
            recMoney,
            disabled
        } = this.state;
        return (
            <div className={styles.container}>
                <Store ref="store"></Store>
                <NavBar onLeft={pop}>
                    充值
                </NavBar>
                <div className={styles.content}>
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
                        <div className={classNames(styles.recInput, styles.recName)}>
                            连连支付
                        </div>
                        <button className={styles.buttonNext} disabled={disabled} onClick={this.submit}>
                            下一步
                        </button>
                    </div>
                    <Tipbar ref='tipbar'/>
                    <Alert ref="alert"/>
                    <IsAuth ref="isAuth"/>
                </div>
                <div className={styles.rechargeBox} style={{top: this.state.payTop}}>
                    <Pay url={this.state.url} closeFn={this.closeFn} ref="pay"/>
                </div>
            </div>
        )

    }
}

const mapStateToProps = (state) => ({
    userInfo: state.infodata.getIn(['USER_INFO', 'data']),
    cookie: state.infodata.getIn(['AUTH_COOKIE', 'data'])
});
const mapDispatchProps = (dispatch) => ({
    pop() {
        dispatch(goBack())
    },
    push(url) {
        dispatch(push(url))
    },
    submit() {
        dispatch({
            type: 'AUTH_COOKIE',
        })
    }
});
export default connect(mapStateToProps, mapDispatchProps)(Index)