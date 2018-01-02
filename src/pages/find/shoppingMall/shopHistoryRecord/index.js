import React from 'react' //点币首页
import NavBar from '../../../../components/NavBar/index';
import Box from '../../../../components/ContentBox/index'
import {Link} from "react-router";
import classs from './index.less'
import {connect} from 'react-redux'
import {push,goBack} from 'react-router-redux'
import rili from '../../../../assets/images/find/rili111.png'
import go from '../../../../assets/images/find/go01.png'
import Loading from '../../../../components/pageLoading/index'
import Scroll from '../../../../components/scroll/index'
class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            signNumbers:'',
            coins:'',
            isSign:'',
            index:0,
            id:0
		}
	}
	componentWillMount(){
        let userInfo = JSON.parse(sessionStorage.getItem("bao-user"));
        if (userInfo){
            this.set(userInfo);
        }
        this.props.getCoinRecordList();
        this.props.getCashRecordList();
        this.props.getVip();
    }
	componentDidMount() {
    }
	componentWillUnmount() {}
    componentWillReceiveProps(next){
        const {user}=next;
        if (user){
            user.code==100&&this.set(user.data);
        }
    }
    set=(userInfo)=>{
        this.setState({
            signNumbers:userInfo.signNumbers,
            coins:userInfo.coins,
            isSign:userInfo.isSign,
        })
    }
	changeBar=(index)=>{
	    this.setState({index});
    }
	loadDom=()=>{
	    return <Loading/>
    }
    coinDom=()=>{
        const Height = document.body.clientHeight - 44;
        let {index} = this.state;
        const {
            coinRecordListData,
            pending,
            end
        }=this.props;

        return(
            <Scroll height={Height} fetch={()=>{this.props.getCoinRecordList()}}
                    isLoading={pending} distance={20} endType={end}
            >
                {
                    coinRecordListData&&coinRecordListData.map((item,i)=>{
                        const {type,amount,ucltype,desc,addtime}=item;
                        return(
                            <div className={classs.cionBox} key={i}>
                                <p>记录：<span className={classs.amount}>{amount!=0&&(type=='增加'&&'+'||'-')}{amount}</span></p>
                                <p>备注：<span className={classs.desc}>{desc}</span></p>
                                <div className={classs.coinBtm}>
                                    <span className={classs.ucltype}>{ucltype}</span>
                                    <span className={classs.addtime}>{addtime}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </Scroll>
        )
    }
    cashDom=()=>{
        const Height = document.body.clientHeight - 44-170;
        const {
            cashRecordListData,
            pending,
            end
        }=this.props;

        return(
            <Scroll height={Height} fetch={()=>{this.props.getCashRecordList()}}
                    isLoading={pending('GET_CASH_RECORD_LIST')} distance={20} endType={end('GET_CASH_RECORD_LIST')}
            >
                {
                    cashRecordListData&&cashRecordListData.map((item,i)=>{
                        const {id,product_name,createtime,status,amount,}=item;
                        return(
                            <div className={classs.cionBox} key={i}>
                                <p>消费点币：<span className={classs.amount}>{amount}</span></p>
                                <p>兑换产品：<span className={classs.desc}>{product_name}</span></p>
                                <div className={classs.coinBtm}>
                                    <span className={classs.ucltype}>{(status=='0'&&'待处理'||(status=='1'&&'处理中'||(status=='2'&&'已处理'||'已取消')))}</span>
                                    <span className={classs.addtime}>{createtime}</span>
                                </div>
                                <Link to={`/find/shoppingMall/cashDetail/${id}`}>
                                    <img src={go} className={status!=='3' && classs.goImg} />
                                </Link>
                            </div>
                        )
                    })
                }
            </Scroll>
        )
    }
    loadEndDom=(data)=>{
        let {index} = this.state;
        const {
            coin_total,
        } = data;
        let ScrollDom;
        if(index == 0){
            ScrollDom=this.coinDom();
        }else if(index == 1){
            ScrollDom=this.cashDom();
        }
      return(<Box>
          <div className={classs.items}>
              <div className={classs.scrollBar}>
                  <ul ref="ul">
                      <li className={index==0&&classs.active||null} onClick={()=>{this.changeBar(0)}}>点币记录</li>
                      <li className={index==1&&classs.active||null} onClick={()=>{this.changeBar(1)}}>兑换记录</li>
                  </ul>
              </div>
          </div>
          <div className={classs.currentCion}>
                <p className={classs.p1}>您的当前可用点币</p>
                <p className={classs.p2}>{coin_total}</p>
          </div>
          <div>
              {
                  ScrollDom
              }
          </div>
      </Box>)
    }

	render() {
        const {
            pop,
            coinRecordListData,
            VipData,
        }=this.props;
        let Dom;
        Dom=this.loadDom();
        if (VipData&&coinRecordListData){
            Dom=this.loadEndDom(VipData.data);
        }
		return (
			<div className={classs.bg} >
				<NavBar
                        backgroundColor="#fff"
                        color="#000"
                        onLeft={pop}>历史记录</NavBar>
                {Dom}
			</div>
		)
	}
}
const datas=(state)=>({
    VipData: state.infodata.getIn(['GET_VIP', 'data']),
    coinRecordListData:state.listdata.getIn(['GET_COIN_RECORD_LIST','data']),
    cashRecordListData:state.listdata.getIn(['GET_CASH_RECORD_LIST','data']),
    pending(key){
        return state.listdata.getIn([key,'pending'])
    },
    end(key){
        return state.listdata.getIn([key,'pageEnd'])
    },
});
const dispatchFn=(dispatch)=>({
    getCoinRecordList(){
        dispatch({
            type:'GET_COIN_RECORD_LIST'
        })
    },
    getCashRecordList(){
            dispatch({
                type:'GET_CASH_RECORD_LIST'
            })
        },
    getVip(){
        dispatch({
            type:'GET_VIP'
        })
    },
      push(url){
        dispatch(push(url))
      },
    pop(){
        dispatch(goBack())
    },
});
export default connect(datas,dispatchFn)(Index)