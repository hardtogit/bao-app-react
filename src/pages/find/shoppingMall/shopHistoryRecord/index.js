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
import Pi from '../../../../components/PickerColumn/index'
class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            index:sessionStorage.getItem("index")&&sessionStorage.getItem("index")||0,
            id:0,
            params:{
                time_start:"",
                time_end:""
            }
		}
	}
	componentWillMount(){
        this.props.getCoinRecordList();
        this.props.getCashRecordList();
        this.props.getVip();
        sessionStorage.setItem("index",this.state.index);
    }
	componentDidMount() {

    }
	componentWillUnmount() {}

	changeBar=(index)=>{
	    this.setState({index});
	    sessionStorage.setItem("index",index);
         this.setState({
             params:{
                 time_start:"",
                 time_end:""
             }
         });
    }
	loadDom=()=>{
	    return <Loading/>
    }
    coinDom=()=>{
        const Height = document.body.clientHeight - 215;
        const {
            coinRecordListData,
            pending,
            end
        }=this.props;
        const{
            params
        }=this.state;

        return(
            <Scroll ref="scroll" height={Height} fetch={()=>{this.props.getCoinRecordList(params)}}
                    isLoading={pending('GET_COIN_RECORD_LIST')} distance={20} endType={end('GET_COIN_RECORD_LIST')}
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
        const Height = document.body.clientHeight - 215;
        const {
            cashRecordListData,
            pending,
            end
        }=this.props;
        const{
            params
        }=this.state;

        return(
            <Scroll ref="scroll" height={Height} fetch={()=>{this.props.getCashRecordList(params)}}
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
    ok=(date1,date2)=>{
       let time_start = date1.year +"-"+ date1.month +"-"+ date1.day;
       let time_end = date2.year +"-"+ date2.month +"-"+ date2.day;
        this.setState({
            params:{
                time_start:time_start,
                time_end:time_end
            }
        });
       if(this.state.index == 0){
           this.props.clearData("GET_COIN_RECORD_LIST");
           this.refs.scroll.setState({
               init:true,
               first:false
           });
       }else if(this.state.index == 1){
           this.props.clearData("GET_CASH_RECORD_LIST");
           this.refs.scroll.setState({
               init:true,
               first:false
           });
       }

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
                <Pi ref="picker" onConfirm={this.ok}></Pi>
				<NavBar
                        backgroundColor="#fff"
                        color="#000"
                        onLeft={pop}
                        rightNode={<img src={rili} className={classs.rightNode}/>}
                        onRight={()=>{ this.refs.picker.toggle()} }
                >
                    历史记录
                </NavBar>
                {Dom}
			</div>
		)
	}
}
const mapStateToProps=(state)=>({
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
const mapDispatchToProps=(dispatch)=>({
    getCoinRecordList(data){
        dispatch({
            type:'GET_COIN_RECORD_LIST',
            params:[
                Object.assign({page_size:10},data)
                ]
        })
    },
    getCashRecordList(data){
            dispatch({
                type:'GET_CASH_RECORD_LIST',
                params:[
                    Object.assign({page_size:10},data)
                ]
            })
    },
    clearData(key){
        dispatch({
            type:'CLEAR_DATA',
            key:key
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
export default connect(mapStateToProps,mapDispatchToProps)(Index)