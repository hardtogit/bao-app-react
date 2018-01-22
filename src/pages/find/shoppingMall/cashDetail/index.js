import React from 'react' //点币首页
import NavBar from '../../../../components/NavBar/index';
import styles from './index.less'
import {connect} from 'react-redux'
import {push,goBack} from 'react-router-redux'
import Confirm from '../../../../components/Dialog/confirmNew';
import Loading from '../../../../components/pageLoading/index'
import add from '../../../../assets/images/find/add3.png'
import handling from '../../../../assets/images/find/handling.png'
import nothandle from '../../../../assets/images/find/nothandle.png'
let delId = 0;
class Index extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount(){
    }
	componentDidMount() {
        const {
            id
        }=this.props.params;
        this.props.getCashDetail(id);
    }
	componentWillUnmount() {}
    componentWillReceiveProps(cancelData){
        if(cancelData.status&&cancelData.id==delId){
            delId = 0;
            this.props.getAddress();
        }
    }
    del = (id)=>{
        this.refs.confirm.show({
            title: '取消兑换',
            content: '确认取消该商品兑换？',
            okText: '确定',
            cancelText:"取消",
            confirmTxt:"",
            okCallback: () => {
                delId = id;
                this.props.cancelCash(id);
                this.props.pop();
            }
        });
    };

	loadDom=()=>{
	    return <Loading/>
    }
    loadEndDom=(data)=>{
        const {
            status,
            data0,
            data1,
            data2,
            data3
        }=data;
        let handleDom;
        let messageData;
        if(status == 0){
            messageData = data0;
            console.log(messageData)
            handleDom = this.nohandleDom();
        }else if(status == 1){
            messageData = data1;
            handleDom = this.handlingDom();
        }else if(status == 2){
            messageData = data2;
            handleDom = this.handledDom(messageData);
        }else if(status == 3){
            messageData = data3;
        }
      return(<div>
          <div className={styles.deTop}>
              <div className={styles.zhuangtai}>
                  <p className={styles.txtTop}>处理状态</p>
                  <p className={styles.txtBtm}>{messageData.status}</p>
              </div>
              <div className={styles.zhongjian}></div>
              <div className={styles.zhuangtai}>
                  <p className={styles.txtTop}>配送公司</p>
                  <p className={styles.txtBtm}>{messageData.send_company}</p>
              </div>
          </div>
          <div className={styles.messsage}>
              <p className={styles.one}>
                  <span><img src={add} className={styles.addImg}/></span>
                  <span>{messageData.receive_user}（收）</span>
                  <span className={styles.rightTxt}>{messageData.receive_phone}</span>
              </p>
              <p className={styles.addTxt}>地址：{messageData.receive_addrees}</p>
              <hr className={styles.line}/>
              {
                  handleDom
              }
          </div>
      </div>)
    };
    handledDom=(data)=>{
        const{
            records_time,
            send_code
        }=data;
        return(
            <div>
                <p className={styles.two}>
                    <span  className={styles.order}>处理时间</span>
                    <span  className={styles.orderTxt}>{records_time}</span>
                </p>
                <p  className={styles.two}>
                    <span className={styles.order}>配送单号</span>
                    <span className={styles.orderTxt}>{send_code}</span>
                </p>
            </div>
        )
    };
    handlingDom=()=>{
        return(
            <div>
                <div className={styles.handleImgBox}>
                    <img src={handling}  className={styles.handleImg}/>
                    <p>工作人员正在处理订单</p>
                    <p>请耐心等候哦！</p>
                </div>
            </div>
        )
    };
    nohandleDom=()=>{
        const {
            id
        }=this.props.params;
        return(
            <div>
                <div className={styles.handleImgBox}>
                    <img src={nothandle} className={styles.handleImg}/>
                    <p>工作人员正在加紧处理</p>
                    <p>请耐心等候哦！</p>
                </div>
                <div className={styles.cancelBtn}  onClick={()=>{this.del(id)}}>
                    取消兑换
                </div>
                <Confirm ref="confirm"/>

            </div>
        )
    };


	render() {
        const {
            pop,
            CashDetailData
        }=this.props;
        let Dom;
        Dom=this.loadDom();
        if (CashDetailData){
            console.log(CashDetailData);
            Dom=this.loadEndDom(CashDetailData.data);
        }
		return (
			<div className={styles.bg} >
				<NavBar backgroundColor="#fff" color="#333" onLeft={pop}>处理详情</NavBar>
                {
                    Dom
                }
			</div>
		)
	}
}
const cancelModel = (data)=>{
    if(data && 100==data.code){
        return {
            status:true,
            id:data.id
        };
    }
    else
        return {
            status:false
        };
};
const datas=(state)=>({
    CashDetailData: state.infodata.getIn(['GET_CASH_DETALE', 'data']),
    cancelData: cancelModel(state.infodata.getIn(['CANCEL_CASH', 'data'])),
});
const dispatchFn=(dispatch)=>({
    getCashDetail(id){
        dispatch({
            type:'GET_CASH_DETALE',
            params:[
                id
            ]
        })
    },
    cancelCash(id){
        dispatch({
            type:'CANCEL_CASH',
            params:[
                id
            ]
        })
    },

    pop(){
        dispatch(goBack())
    },
});
export default connect(datas,dispatchFn)(Index)