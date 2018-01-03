/**
 * Created by xiangguo .
 * time:2017/7/13 0013.
 * email:413401168@qq.com.
 * use:auto...
 */
import React from 'react';
import {Link} from 'react-router';
import NavBar from '../../../components/NavBar/index';
import {connect} from 'react-redux';
import {goBack,push} from 'react-router-redux'
import styles from './index.css'
import close from '../../../assets/images/weChat/close.png'
class Index extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name:"",
            tel:"",
            add:"",
            index:0,
            windowPop:0,
            num:0
        }
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange1=(event) =>{
        this.setState({
            name: event.target.value,
        });
    };
    handleChange2=(event)=> {
        this.setState({
            tel: event.target.value,
        });
    }
    handleChange3=(event)=> {
        this.setState({
            add: event.target.value
        });
    }

    handleSubmit=(event)=> {
        const{
            id
        }=this.props.params;
        const{
            receiveData,
            statusData,
        }=this.props;
        if(this.state.name && this.state.tel && this.state.add){
            let TelRegex = /^1[34578]\d{9}$/;
            let tel = this.state.tel;
            if (tel.match(TelRegex) == null) {
                this.setState({
                    index: 2
                });
            }else{
                this.props.preheatReceive(id,this.state.name,this.state.tel,this.state.add);
                this.props.preheatStatus(id);

                this.setState({
                    windowPop: 1
                });

            }
        }else{
            this.setState({
                index: 1
            });
        }
        event.preventDefault();
    }
    tick=()=> {
            this.setState({
                index: 0
            });
    }
    changeBar=(windowPop)=>{
        this.setState({windowPop});
    }
    componentWillMount(){

    }
    componentDidMount() {

    }
    componentWillUnmount() {
        clearInterval(this.timeOut);
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
                    <Link to={"/preheat"}>
                        <img src={close} className={styles.closeBtn} onClick={()=>{this.changeBar(0)}} />
                    </Link>
                </div>
            </div>
        )
    }
    failPopDom=()=>{
        const{
            receiveData
        }=this.props;
        let data;
        if(receiveData){
            data = receiveData.code;
        }
        return(
            <div className={styles.popWraper}>
                <div className={styles.needPopfail}>
                    <p className={styles.titleTxtsc}>领取失败</p>
                    <p style={{textAlign:"center"}}>{data == 301&& "您已经领取过该礼物了" ||(data == 302&&"尚未达到领取标准，再接再厉哦"||(data == 303&&"礼物已经被领取完了"))}</p>
                </div>
                <div className={styles.closeWraper}>
                    <img src={close} className={styles.closeBtn} onClick={()=>{this.changeBar(0)}} />
                </div>
            </div>
        )
    }
    render(){
        const{
            id
        }=this.props.params;
        const{
            pop,
            receiveData,
            statusData,
        }=this.props;
        const{
            index,
            windowPop
        }=this.state;
        let popDom;
        if(receiveData){
            if(receiveData && receiveData.code == 100){
                if(statusData && statusData.code == 100){
                    popDom=this.successPopDom();
                }
            }else{
                popDom=this.failPopDom();
            }
        }



        if(index == 1 ||index == 2){
            this.timeOut = setTimeout(() => this.tick(), 1000);
        }

        return(
            <div>
                <div className={styles.bg}>
                    <NavBar title="确认领取" onLeft={pop} backgroundColor="#fff" color="#000"/>
                    <div className={styles.container}>
                        <form onSubmit={this.handleSubmit}>
                            <ul>
                                <li>
                                    <label>
                                        <span>收货物品：</span>
                                        <input type="text" className={styles.goodsName} value={id==10&&"新春对联"||"精美台历"} readOnly="readOnly" />
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <span>收货人：&emsp;</span>
                                        <input type="text" value={this.state.name} onChange={this.handleChange1} placeholder="请输入姓名"/>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <span>收货电话：</span>
                                        <input type="text" value={this.state.tel} onChange={this.handleChange2} placeholder="请输入11位手机号码"/>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <span>收货地址：</span>
                                        <input type="text" value={this.state.add} onChange={this.handleChange3} placeholder="请详细填写收货地址"/>
                                    </label>
                                </li>
                                <div style={{textAlign:"center"}}><input type="submit" className={styles.subBtn} value="确认领取" /></div>

                            </ul>


                        </form>
                        <div className={index==0 && styles.tipWraper || styles.active}>
                            <div className={styles.tip}>{index == 1 && "请填写完整信息！"||"请输入正确的手机号码！"}</div>
                        </div>
                    </div>
                    <div className={windowPop==0 &&styles.Active11 || null}>
                        <div className={styles.shadow}></div>
                        {
                            popDom
                            // this.successPopDom()
                        }
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    receiveData:state.infodata.getIn(['PREHEAT_RECEIVE','data']),
    statusData:state.infodata.getIn(['PREHEAT_STATUS','data']),
});
const mapFnToProps=(dispatch)=>({
    preheatReceive(id,consignee,phone,address){
        dispatch({
            type:'PREHEAT_RECEIVE',
            params:[id,
                consignee,
                phone,
                address
            ]
        })
    },
    preheatStatus(id){
        dispatch({
            type:'PREHEAT_STATUS',
            params:[id]
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