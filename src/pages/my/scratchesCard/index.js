import React from 'react'
import NavBar from '../../../components/NavBar/index'
import Box from "../../../components/ContentBox/index"
import styles from './index.css'
import cs from 'classnames';
import bgImg from "../../../assets/images/scratchebg.jpg";
import gua from "../../../assets/images/gua.png";
import {connect} from 'react-redux'
import * as actionTypes from '../../../actions/actionTypes'
import { Link} from 'react-router';
import {goBack} from 'react-router-redux';
let  guaImg;
class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showCanvas:true,
            index:0,
            fetch:false,
            cardResName:'',
            cardResAmount:''
        }
    }
    componentWillMount=()=>{
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
    componentWillReceiveProps(next){
        const {fetch}=this.state,
               {userCard}=next;
        if (fetch){
          this.pdCardRes(userCard);
        }
    }
    pdCardRes=(data)=>{
        if (data){
            const dataRes=data.data;
            if (data.code==100){
                const {
                    name,
                    amount
                }=dataRes;
                this.setState({
                    cardResName:name,
                    cardResAmount:amount,
                    fetch:false
                })
            }else {
                this.setState({
                    cardResName:'获取刮刮卡失败',
                    fetch:false
                })
            }
        }
     }
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
            const {
                fetch
            }=this.state;
            let data=ctx.getImageData(0,0,w,h).data;
            for(var i=0,j=0;i<data.length;i+=4){
                if(data[i] && data[i+1] && data[i+2] && data[i+3]){
                    j++;
                }
            }
            //刮层剩余80%的时候获取奖品信息
            if(j<=w*h*0.9 && !fetch){

            }
            //刮层剩余60%的时候清除浮层，显示奖品数据
            if(j<=w*h*0.6 && !fetch){
                    this.props.useCard(this.props.cardInfo.newCards[this.state.index].id);
                    this.setState({fetch:true})
                this.setState({
                    showCanvas:false,
                    index:this.state.index+1
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
    };

    useNext=()=>{
        this.setState({
            showCanvas:true,
            fetch:false,
            cardResName:'',
            cardResAmount:''
        });
    };
    render() {
        const {
            cardResName,
            cardResAmount
        }=this.state;
        const {cardInfo} = this.props;
        return (
            <div className={styles.bg}>
                <NavBar backgroundColor="transparent"
                        rightNode={<Link className={styles.rightNode} to="/user/scratchesRule">规则</Link>}
                        onLeft={this.props.pop}
                >我的刮刮卡</NavBar>
                <Box className={styles.box}>
                    <img className={styles.card_bg_img} src={bgImg} alt=""/>
                    <div className={styles.card_bg}>
                        <div id="card" className={styles.card}>
                            {cardInfo.newCards.length>0 && this.state.showCanvas && <div id="have_card" className={styles.have_card}>
                                <canvas id="guaCanvas" style={{width:283,height:142}} className={styles.guaBox}></canvas>
                            </div>}
                            <div className={styles.answer}>
                                <h2>{cardResName}{cardResAmount}</h2>
                                <button className={cs(cardInfo.newCards.length<=0?styles.show:"",styles.no_next)}>刮奖机会已用完</button>
                                <button onClick={this.useNext} className={cs(cardInfo.newCards.length>0?styles.show:"",styles.next)}>刮下一张</button>
                            </div>
                        </div>
                        <div className={styles.gg_b}>
                            <p className={styles.gg_line}></p>
                            <p className={styles.gg_info}>
                                    <span>您有{cardInfo.newCards.length}次刮奖机会</span>
                                <Link to="/user/guaguaList"><span>您已获得{cardInfo.rewardsTime}次奖励></span></Link></p>
                        </div>
                    </div>
                </Box>
            </div>
        )
    }
}
/**
 * 刮刮卡详情数据model
 * @param data
 * @returns {*}
 */
const detailModel = (data)=>{
    if(data && data.code===100){
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
const mapStateToProps = (state) => {
    return {
        cardInfo:detailModel(state.infodata.getIn([actionTypes.SCRATCHES_CARD_INFO, 'data'])),
        userCard:state.infodata.getIn([actionTypes.SCRATCHES_CARD_USE, 'data'])
    }
};

const mapDispatchToProps = (dispatch) => ({
    detail(){
        dispatch({
            type: actionTypes.SCRATCHES_CARD_INFO
        })
    },
    useCard(id){
        console.log('fafaf')
        dispatch({
            type: actionTypes.SCRATCHES_CARD_USE,
            params:[id]
        })
    },
    pop(){
        dispatch(goBack())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Index)