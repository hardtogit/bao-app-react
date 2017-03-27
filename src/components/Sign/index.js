import React from 'react'
import Boron from '../../customized_node_modules/boron'
import style from './index.less';
import API from '../../request/fetch'

import toptitle from './images/sign.jpg';
import done from './images/done.png';
import pen from './images/sign_pen.png';
import close from './images/closex.png';

export default class SignModel extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            coin:0,
            day:0
        }
    }
    static propTypes = {
        mode: React.PropTypes.oneOf(['OutlineModal', 'ScaleModal', 'FadeModal', 'FlyModal', 'DropModal', 'WaveModal']),
        coin:React.PropTypes.number,
        days:React.PropTypes.number,
        sign:React.PropTypes.bool,
        callBackFun:React.PropTypes.func
    };
    static defaultProps = {
        mode: 'ScaleModal'
    };
    toggle = () => this.refs.modal.toggle();
    show = () => this.refs.modal.show();
    hide = () => this.refs.modal.hide();
    doSign=()=>{
        let _this = this;
        if(this.props.sign)
            _this.hide();
        else{
            API.sign().then((res)=>{
                let data = res.response;
                if(100==data.code){
                    _this.props.callBackFun(data);
                }else{
                    _this.hide();
                }
            });
        }
    };
    render() {
        const Modal = Boron[this.props.mode]
        return (
            <Modal ref="modal">
                <div className={style.sign}>
                    {
                        this.props.sign
                        &&
                        <img className={style.t} src={done} alt=""/>
                        ||
                        <img className={style.t} src={toptitle} alt=""/>
                    }
                    <div className={style.msBox}>
                        <p>连续签到5天</p>
                        <p>额外获得50点币</p>
                        <hr/>
                    </div>
                    <p className={style.info+" "+style.mt15}>您已累计签到 <span>{this.props.days}</span> 天</p>
                    <p className={style.info}>已获得点币 <span>{this.props.coin}</span></p>
                    <button onClick={()=>{this.doSign()}}>{this.props.sign&&"确定"||"点击签到"}</button>
                    <img className={style.pen} src={pen} alt=""/>
                </div>
                <img onClick={()=>{this.hide()}} src={close} className={style.close} alt=""/>
            </Modal>
        )
    }
}
