import React from 'react'
import NavBar from '../../../components/NavBar/index'
import styles from './index.css'
import cs from 'classnames';
import bgImg from "../../../assets/images/scratchebg.jpg";
import gua from "../../../assets/images/gua.png";
import scratchecard_cry from "../../../assets/images/scratchecard_cry.png";
import {connect} from 'react-redux'
import * as actionTypes from '../../../actions/actionTypes'
import { Router, Route, hashHistory,Link} from 'react-router';

let  guaImg;
class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showCanvas:true
        }
    }
    componentWillMount=()=>{
        this.props.login()
        this.props.detail()
    };
    componentDidUpdate=()=>{
        guaImg = new Image();
        guaImg.src = gua;
        guaImg.onload = ()=>{
            if(this.state.showCanvas)
                this.initCard();
        };
    };
    initCard=()=>{
        let bodyStyle = document.body.style;
        bodyStyle.mozUserSelect = "none";
        bodyStyle.webkitUserSelect = "none";
        let w = 300;
        let h = 152;
        let mousedown = false;
        let canvas = document.getElementById("guaCanvas");
        if(!canvas)
            return false;
        let card = document.getElementById("card");
        let offsetX = card.offsetLeft;
        let offsetY = card.offsetTop;
        let ctx = canvas.getContext("2d");
        /**
         * 检测刮开面积
         */
        let checkoutArea=()=>{
            let data=ctx.getImageData(0,0,w,h).data;
            for(var i=0,j=0;i<data.length;i+=4){
                if(data[i] && data[i+1] && data[i+2] && data[i+3]){
                    j++;
                }
            }
            //刮层剩余80%的时候获取奖品信息
            if(j<=w*h*0.9){
                this.props.useCard(this.props.cardInfo.newCards[0].id);
            }
            //刮层剩余60%的时候清除浮层，显示奖品数据
            if(j<=w*h*0.6){
                this.setState({
                    showCanvas:false
                });
                ctx.clearRect(0,0,w,h);
                return true;
            }
            return false;
        };
        /**
         * 按下事件
         */
        let eventDown = (e)=>{
            e.preventDefault();
            mousedown=true;
        };
        /**
         * 松开事件
         */
        let eventUp = (e)=>{
            setTimeout(checkoutArea,800);
            e.preventDefault();
            mousedown=false;
        };
        /**
         *移动事件
         */
        let eventMove = (e)=>{
            e.preventDefault();
            if(mousedown){
                if(e.changedTouches){
                    e=e.changedTouches[e.changedTouches.length-1];
                }
                let x = (e.clientX + document.body.scrollLeft || e.pageX) - offsetX || 0;
                let y = (e.clientY + document.body.scrollTop || e.pageY) - offsetY || 0;
                ctx.globalCompositeOperation = 'destination-out';
                ctx.beginPath();
                ctx.arc(x,y,15 , 0, Math.PI * 2);//绘制圆点
                ctx.fill();
            }
        };
        ctx.drawImage(guaImg,0,0,w,h);
        canvas.addEventListener('touchstart', eventDown);
        canvas.addEventListener('touchend', eventUp);
        canvas.addEventListener('touchmove', eventMove);
        canvas.addEventListener('mousedown', eventDown);
        canvas.addEventListener('mouseup', eventUp);
        canvas.addEventListener('mousemove', eventMove);
    }


    useNext=()=>{
        this.props.detail();
        this.setState({
            showCanvas:true
        });
    };
    render() {
        return (
            <div className={styles.bg}>
                <NavBar rightNode={<Link to="/ScratchesCardRule">规则</Link>}>我的刮刮卡</NavBar>
                <img className={styles.card_bg_img} src={bgImg} alt=""/>
                <div className={styles.card_bg}>
                    <div id="card" className={styles.card}>
                        <div className={cs(this.props.cardInfo.newCards.length<=0?styles.show:"",styles.no_card)}>
                            <img src={scratchecard_cry} alt=""/>
                            <h2>没有刮奖机会</h2>
                            <p>每周五出借即可参与刮奖</p>
                        </div>
                        {this.props.cardInfo.newCards.length>0 && this.state.showCanvas && <div id="have_card" className={styles.have_card}>
                            <canvas id="guaCanvas" style={{width:283,height:142}}></canvas>
                        </div>}
                        <div className={styles.answer}>
                            <h2>{this.props.userCard.text}</h2>
                            <button className={cs(this.props.cardInfo.newCards.length<=0?styles.show:"",styles.no_next)}>刮奖机会已用完</button>
                            <button onClick={this.useNext} className={cs(this.props.cardInfo.newCards.length>0?styles.show:"",styles.next)}>刮下一张</button>
                        </div>
                    </div>
                    <div className={styles.gg_b}>
                        <p className={styles.gg_line}></p>
                        <p className={styles.gg_info}><span>您有{this.props.cardInfo.newCards.length}次刮奖机会</span><span>您已获得{this.props.cardInfo.rewardsTime}次奖励></span></p>
                    </div>
                </div>
            </div>
        )
    }
}
/**
 * 刮刮卡详情数据model
 * @param data
 * @returns {*}
 */
const detailModel = (data={})=>{
    if(data.code===100){
       return {
            "newCards":data.data.luck_rewards || [],
            "rewardsTime":data.data.rewards
        }
    }
    return {
        newCards:[],
        rewardsTime:0
    };
};
/**
 * 当前使用的刮刮卡 数据model
 * @param data
 */
const useModel = (data={})=>{
    if(data.code===100){
        return {
            "text":data.data.name
        }
    }
    return {
        "text":""
    };
};
const mapStateToProps = (state, ownProps) => {
    const detail = actionTypes.SCRATCHES_CARD_INFO;
    const useCard = actionTypes.SCRATCHES_CARD_USE;
    return {
        cardInfo:detailModel(state.infodata.getIn([detail, 'data'])),
        userCard:useModel(state.infodata.getIn([useCard, 'data'])),
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    login() {
        dispatch({
            type: actionTypes.USER_LOGIN_FLOW,
            params:["18382346121","123456"]
        })
    },
    detail(){
        dispatch({
            type: actionTypes.SCRATCHES_CARD_INFO
        })
    },
    useCard(id){
        dispatch({
            type: actionTypes.SCRATCHES_CARD_USE,
            params:[id]
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Index)