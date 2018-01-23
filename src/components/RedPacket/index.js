/**
 * Created by xiangguo .
 * time:2018/1/16 0016.
 * email:413401168@qq.com.
 * use:auto...
 */
import React from 'react'
import coin from './img/open-hagen.png'
import close from './img/close.png'
import {connect} from 'react-redux'
import * as actionTypes from '../../actions/actionTypes'
import Alert from '../../components/Dialog/alert'
import './index.less'
class Index extends React.Component{
    constructor(props){
        super(props)
        this.state= {
           time:0
        }
    }
    componentWillMount(){
        this.props.clean('GET_PACKET');
        this.props.clean('OPEN_PACKET');
        this.props.getPacket({productId:this.props.productId,num:this.props.num,productType:this.props.productType})
    }
    close=()=>{
        $('.modal').hide();
        $('.open_packet').hide();
        $('.open_packet').animate({"padding-top":'200%'},0,"swing")
        $(".draw-mid").addClass("draw-mid-move").css({display:"block"});
        $(".draw-up").animate({
            opacity: "0"
        }, 0);
        $("#draw-up-up").animate({
            opacity: "0",
            top: "0"
        }, 0);
        $(".draw-next").hide();
        $(".draw-down").animate({
            opacity: "1"
        }, 0);
        $(".draw-down2").animate({
            opacity: "0"
        }, 0);
        $(".draw-text").animate({opacity:"0"},0);
        $(".draw-list").animate({opacity:"0"},0).animate({top:"3.5rem"},0);
        setTimeout(function () {
            $(".draw-list").hide()
        },0)
    };
    openPacket=()=>{
        this.props.openPacket({money:this.props.packetData.data.money})
    };
    componentWillReceiveProps(nextProps){
        const{openData,packetData}=nextProps;
        if(packetData&&packetData.code==100){
            this.show()
        }else if(packetData&&packetData.code!=100){
            if(this.state.time<3){
                setTimeout(()=>{
                    this.props.getPacket({productId:this.props.productId,num:this.props.num,productType:this.props.productType})
                },2000);
                this.setState({
                    time:this.state.time+1
                })
            }else{
                if(packetData&&packetData.code==301){
                    this.refs.alert.show({
                        content:"正在处理中，结果请到红包活动专题页中查看",
                        okText:'确定',
                    })
                }
            }
        }
        if(openData&&openData.code==100){
         this.open();
        }else if(openData&&openData.code!=100){
            this.refs.alert.show({
                content:openData.msg,
                okText:'确定',
                okCallback:()=>{
                    this.close()
                }

            })
        }
    }
    open=()=>{
        $(".draw-mid").removeClass("draw-mid-move").css({display:"none"});
        $(".draw-up").animate({
            opacity: "1"
        }, 100);
        $("#draw-up-up").animate({
            opacity: "1",
            top: "-4.12rem"
        }, 200);
        $(".draw-down").animate({
            opacity: "0"
        }, 300);
        $(".draw-down2").animate({
            opacity: "1"
        }, 300);
        $(".draw-list").animate({opacity:"1"},600).animate({top:"-2rem"},1000);
        setTimeout(function () {
            $(".draw-list").show()
        },400)
        setTimeout(function () {
            $(".draw-text").animate({opacity:"1"},600)
        },1000)
    };
    show=()=>{
        $('.modal').show();
        $('.open_packet').show();
        $('.open_packet').animate({"padding-top":0},600,"swing")
    };
    render(){
        const {packetData}=this.props
        return(
            <div className="box">
                <Alert ref='alert'></Alert>
                <div className="modal"></div>
            <div className="open_packet">
            <div className="draw-gift">
                <div className="draw-img">
                    <img className="packer_close" onClick={this.close} src={close}alt=""/>
                        <div className="draw-up hidepc"></div>
                        <div className="draw-up-up" id="draw-up-up"></div>
                        <div className="draw-mid draw-mid-move" onClick={this.openPacket}></div>
                        <div className="draw-down"></div>
                        <div className="draw-text">
                            <p className="text1">获得<span className="num"> {packetData&&packetData.data.money} </span>元</p>
                            <p className="text2">已存放至你的账户</p>
                        </div>
                        <div className="draw-down2 hidepc"></div>
                        <div className="draw-list"><img src={coin}/></div>
                </div>
            </div>
        </div>
            </div>)


    }
}
const mapStateToProps=(state)=>({
    packetData:state.infodata.getIn([actionTypes.GET_PACKET,'data']),
    openData:state.infodata.getIn([actionTypes.OPEN_PACKET,'data'])
})
const mapDispatchToProps=(dispatch)=>({
    getPacket(data){
        dispatch({
            type:'GET_PACKET',
            params:[data]
        })
    },
    openPacket(data){
        dispatch({
            type:'OPEN_PACKET',
            params:[data]
        })
    },
    clean(key){
        dispatch({
            type:'CLEAR_INFO_DATA',
            key:key
        })
    }

});

export default connect(mapStateToProps,mapDispatchToProps)(Index)
