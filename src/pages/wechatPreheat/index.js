/**
 * Created by xiangguo .
 * time:2017/7/13 0013.
 * email:413401168@qq.com.
 * use:auto...
 */
import React from 'react';
import {connect} from 'react-redux';
import Scroll from '../../components/scroll/index'
import banner from '../../assets/images/weChat/banner2.png'
import txt1 from '../../assets/images/weChat/txt1.png'
import txt2 from '../../assets/images/weChat/txt2.png'
import cloud1 from '../../assets/images/weChat/cloud1.png'
import img01 from '../../assets/images/weChat/img01.png'
import img02 from '../../assets/images/weChat/img02.png'
import close from '../../assets/images/weChat/close.png'
import before from '../../assets/images/weChat/before.png'
import go from '../../assets/images/weChat/go.png'
import over from '../../assets/images/weChat/over.png'
import finished from '../../assets/images/weChat/over1.png'
import {goBack,push} from 'react-router-redux'
import styles from './index.css'
class Index extends React.Component{
    componentDidMount(){
        this.props.getPreheatInfo();
    }
    // componentWillReceiveProps(){
    //     sessionStorage.setItem("bao-auth","true")
    //
    // }
    constructor(props){
        super(props);
        this.state = {
            index:0,
            num:0
        }
    }
    changeBar=(index,num)=>{
        this.setState({index});
        this.setState({num});
    }
    needDom=()=>{
        return(
            <div className={styles.popWraper}>
                <div className={styles.needPop}>
                    <p className={styles.titleTxt}>领取须知</p>
                    <p className={styles.contentTxt}>1.用户当前待收≥100元即可领取新春礼物；</p>
                    <p className={styles.contentTxt}>2.新春礼物限量150份，先到先得，领完即止；</p>
                    <p className={styles.contentTxt}>3.每名用户限领一份宝点新春礼物；</p>
                    <p className={styles.contentTxt}>4.为了保证能顺利收到礼物，请务必填写正确的收货信息；</p>
                    <p className={styles.contentTxt}>5.活动结束后7个工作日完成礼物发放；</p>
                    <p className={styles.contentTxt}>6.本次活动奖品概不折现，不能转让他人，且一经兑换不可退换；</p>
                    <p className={styles.contentTxt}>7.如需帮助，请联系028-966180；</p>
                </div>
                <div className={styles.closeWraper}>
                    <img src={close} className={styles.closeBtn} onClick={()=>{this.changeBar(0)}} />
                </div>
            </div>
        )
    }
    successPopDom=()=>{
        return(
            <div className={styles.popWraper}>
                <div className={styles.needPop}>
                    <p className={styles.titleTxtsc}>领取成功</p>
                    <p className={styles.contentTxtSuc}>礼物将在7个工作日内完成发放</p>
                    <p className={styles.contentTxtSuc}>请耐心等待！</p>
                </div>
                <div className={styles.closeWraper}>
                    <img src={close} className={styles.closeBtn} onClick={()=>{this.changeBar(0)}} />
                </div>
            </div>
        )
    }
    render(){
        const{
            listData,
        }=this.props;
        let {index,num} = this.state;
        let popDom;
        if(num == 1){
            popDom = this.needDom()
        }

        return(
            <div>
                <div className={styles.bg}>
                <img src={banner} className={styles.ban}/>
                    {
                        listData&&listData.data.map((item,i)=>{
                            return(
                                <div key={i}>
                                    <div className={styles.titleBox}>
                                        <div className={styles.titlebg}>
                                            <p>{item.id == 9&&"第一波"||"第二波"}</p>
                                        </div>
                                        <img src={cloud1} className={styles.cloud1} />
                                    </div>
                                    <div className={styles.firstBox}>
                                        <img src={item.id == 9 && txt1 || txt2} className={styles.title1} />
                                        <div className={styles.timeTxt}>活动时间：{item.startTime}-{item.endTime}</div>
                                        <img src={item.id == 10 && img02 || img01} className={styles.title2} />
                                        <p className={styles.know}>当前剩余份数：{item.giftCount}</p>
                                        <div className={item.butStatus == 2 && styles.go_btn || styles.active}>
                                            <img src={before} />
                                        </div>
                                        <div  className={item.butStatus == 5 && styles.go_btn || styles.active}   onClick={()=>{
                                            if(sessionStorage.getItem("bao-auth")){
                                                this.props.push("/user/preheatConfirm/"+item.id)
                                            }else{
                                                this.props.push("/login?baoBackUrl="+"/user/preheatConfirm/"+item.id)
                                            }
                                        }
                                        }
                                        >
                                            <img src={go} />
                                        </div>
                                        <div  className={item.butStatus == 1 && styles.go_btn || styles.active} onClick={()=>{
                                            this.props.push("/login?baoBackUrl="+"/user/preheatConfirm/"+item.id)}}>
                                            <img src={go} />
                                        </div>
                                        <div  className={item.butStatus == 3 && styles.go_btn || styles.active}>
                                            <img src={over} />
                                        </div>
                                        <div  className={item.butStatus == 4 && styles.go_btn || styles.active}>
                                            <img src={finished} />
                                        </div>
                                        <p className={styles.know1} onClick={()=>{this.changeBar(1,1)}}>领取须知 ></p>
                                    </div>
                                </div>
                            )
                        })
                    }
                   <p className={styles.bottomTxt} >本活动最终解释权归宝点网所有</p>
                    <div className={index==0&&styles.active||null}>
                        <div className={styles.shadow}></div>
                        {
                            popDom
                        }
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    listData:state.infodata.getIn(['GET_PREHEAT_INFO','data']),
});
const mapFnToProps=(dispatch)=>({
    getPreheatInfo(){
        dispatch({
            type:'GET_PREHEAT_INFO'
        })
    },
    pop(){
        dispatch(goBack())
    },
    push(url){
        dispatch(push(url))
    }
});
export default connect(mapStateToProps,mapFnToProps)(Index)