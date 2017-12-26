import React from 'react' //点币首页
import NavBar from '../../../../components/NavBar/index';
import styles from './index.less'
import {connect} from 'react-redux'
import {push,goBack} from 'react-router-redux'
import Loading from '../../../../components/pageLoading/index'
import add from '../../../../assets/images/find/add3.png'
import handling from '../../../../assets/images/find/handling.png'
import nothandle from '../../../../assets/images/find/nothandle.png'
class Index extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount(){
        const {
            id
        }=this.props.params;
        this.props.getCashDetail(id);
    }
	componentDidMount() {
    }
	componentWillUnmount() {}
    componentWillReceiveProps(next){

    }

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
        return(
            <div>
                <div className={styles.handleImgBox}>
                    <img src={nothandle} className={styles.handleImg}/>
                    <p>工作人员正在加紧处理</p>
                    <p>请耐心等候哦！</p>
                </div>
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
const datas=(state)=>({
    CashDetailData: state.infodata.getIn(['GET_CASH_DETALE', 'data']),
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
    pop(){
        dispatch(goBack())
    },
});
export default connect(datas,dispatchFn)(Index)