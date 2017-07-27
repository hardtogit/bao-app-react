/**
 * Created by xiangguo .
 * time:2017/7/12 0012.
 * email:413401168@qq.com.
 * use:auto...
 */
import React from 'react'
import cn from 'classnames'
import Boron from '../../customized_node_modules/boron'
import Dialog from './index'
import helper from './helper.js'
import {Link} from 'react-router'
import styles from './index.styl'
import PropTypes from 'prop-types'
export default class Success extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show:false
        }
    }

    static propTypes = {
        time: PropTypes.number,           // 关闭时间
        text: PropTypes.string,           // 文本
        mode: PropTypes.oneOf(['OutlineModal', 'ScaleModal', 'FadeModal', 'FlyModal', 'DropModal', 'WaveModal']),
        callback: PropTypes.func,
    }

    static defaultProps = {
        mode: 'ScaleModal'
    }


    show = () => {
        this.setState({
            show:true
        })
    }

    hide = () => {
        this.setState({
            show:false
        })
    }

    clearTimer = () => {

    }

    componentWillUnmount() {

    }
    render() {
        let display;
        let storeData=JSON.parse(sessionStorage.getItem('bao-store'))
        if(this.state.show){
            display={display:'block'}
        }else{
            display={display:'none'}
        }
        return (
            <div style={display}>
            <div ref='dialog' style={{zIndex: '1050',position: 'fixed',transform: 'translate3d(-50%, -50%, 0px)',top: '50%',left: '50%',width:'86%'}}>
                <div style={{width:'100%',position:'relative',height:'140px'}}>
                    <img style={{width:'100%'}} src={require('./images/header.png')} />
                    <img width='40px' style={{position:'absolute',left:'-14px',top:'-10px'}} src={require('./images/01.png')} alt=""/>
                    <img width='40px' style={{position:'absolute',left:'-14px',bottom:'16px'}} src={require('./images/02.png')} alt=""/>
                    <img width='40px' style={{position:'absolute',right:'-14px',bottom:'-10px'}} src={require('./images/03.png')} alt=""/>
                </div>
                <div style={{textAlign:'center',backgroundColor:'#fff',marginTop:'-3px',paddingTop:'22px',borderBottomLeftRadius:'4px',borderBottomRightRadius:'4px'}}>
                    <a style={{marginTop:'15px',fontSize:'13px', letterSpacing:'1px',borderTop:'2px solid #f2f2f2',borderBottom:'2px solid #f2f2f2',padding: '4px 0'}}>个人账户升级为银行存管账户</a>
                    <p style={{fontSize:'12px',marginTop:'16px',color:'#777'}}>资金有保障&nbsp;&nbsp;&nbsp;&nbsp;投资更放心</p>
                    <div style={{height:'40px',borderTop:'1px solid #ddd',marginTop:'30px'}}>
                        <div onClick={this.hide} style={{float:'left',width:'50%',height:'40px',color:'#777',lineHeight:'40px',borderRight:'1px solid #ddd'}}>取消</div><div style={{float:'left',width:'50%',lineHeight:'40px',color:'#00a6e2'}}>
                        <Link to={storeData&&storeData.isRegister?"/user/setting/cardBind":"user/setting/regStore"}>立马开通</Link></div>
                    </div>
                </div>
            </div>
                <div style={{position: 'fixed', top: '0px', right: '0px', bottom: '0px', left: '0px', zIndex: '1040', backgroundColor: 'rgba(0, 0, 0, 0.498039)'}}></div>
           </div>
                )
    }
}