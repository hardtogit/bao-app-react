import React from 'react' //点币首页
import NavBar from '../../../../components/NavBar/index';
import Box from '../../../../components/ContentBox/index'
import {Link} from "react-router";
import classs from './index.less'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import Sign from '../../../../components/Sign/index'
import shoppCenter from '../../../../assets/images/shopp-center/shoppCenter.png'
import coinTotal from '../../../../assets/images/shopp-center/total.png'
import icon  from '../../../../assets/images/shopp-center/icon.png'
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
        this.setState({
            signNumbers:userInfo.signNumbers,
            coins:userInfo.coins,
            isSign:userInfo.isSign,
        })
        this.props.productBar();
    }
	componentDidMount() {
    }
	componentWillUnmount() {}
    componentWillReceiveProps(next){
	    if (next.barData){

        }
    }
    doSign=()=>{
        this.refs.SignModel.show();
    };
	changeBar=(index)=>{
	    this.setState({index});
    }
	loadDom=()=>{
	    return <Loading/>
    }
    ScrollDom=()=>{
	    const Height = document.body.clientHeight - 44 -103 -40;
	    let {
            barData,
            getList,
            listData,
            pending,
            end
        }=this.props;
	    const {index}=this.state;
            let cloneData=barData.data.slice(0);
            cloneData.unshift({id:0,name:'全部'});
	    return(<div>
            {
                cloneData.map(({id},i)=>{
                if (i==index){
                    const nlistData=listData('SHOP_PRODUCT_LIST'+i),
                        npending=pending('SHOP_PRODUCT_LIST'+i),
                        nend=end('SHOP_PRODUCT_LIST'+i);
                    return( <div key={i} className={classs.products}>
                        <Scroll height={Height} fetch={()=>{getList('SHOP_PRODUCT_LIST'+i,id)}}
                                isLoading={npending} distance={20} endType={nend} endload={<div></div>}

                        >
                                {
                                    nlistData&&nlistData.map((item,i)=>{
                                        const {id,name,cover,price,count}=item;
                                        return(<div className={classs.productBox} key={i}>
                                            {count==0&&<div className={classs.dhOver}></div>||null}
                                            <Link to={`/user/goodsDetail/${id}`}>
                                                <img className={classs.products_img} src={cover} alt={name}/>
                                                <p className={classs.name}>{name}</p>
                                            </Link>
                                            <Link to={`/user/trueExchangeConfirm/${id}`}>
                                                <p className={classs.money}><img src={icon} /><span>{price}</span></p>
                                            </Link>
                                        </div>)
                                    })
                                }
                        </Scroll>
                    </div>)
                }
            })}
        </div>)
    }
    loadEndDom=()=>{
        let {coins,index} = this.state;
        const {
            data
        }=this.props.barData;
        const Dom=this.ScrollDom();
      return(<Box>
          <div className={classs.top}>
              <img src={coinTotal} alt=""/>
              <span className={classs.coins}>{coins}</span>
              <span  className={classs.coins_desc}>当前点币</span>
              <span  className={classs.sign} onClick={!this.state.isSign&&this.doSign}>{this.state.isSign&&'已签到'||'签到'}</span>
          </div>
          <div className={classs.items}>
              <div className={classs.scrollBar}>
              <ul ref="ul">
                  <li className={index==0&&classs.active||null} onClick={()=>{this.changeBar(0)}}>全部</li>
                  {
                      data&&data.map(({id,name},i)=>(
                          <li key={i} className={index==i+1&&classs.active||null} onClick={()=>{this.changeBar(i+1)}}>{name}</li>
                      ))
                  }
              </ul>
              </div>
          </div>
              {
                  Dom
              }

      </Box>)
    }
    signSuccess=(data)=>{
	    this.setState({
            isSign:true,
            coins:data.data.coins
        });
        let userInfo = JSON.parse(sessionStorage.getItem("bao-user"));
	    userInfo.isSign=true;
	    userInfo.coins=data.data.coins;
        sessionStorage.setItem('bao-user',JSON.stringify(userInfo));
        this.refs.SignModel.hide();
    }
	render() {
        let {coins,signNumbers,isSign} = this.state;
        const {
            barData,
        }=this.props;
        let Dom=this.loadDom();
        if (barData){
            Dom=this.loadEndDom();
        }
		return (
			<div className={classs.bg} >
				<NavBar rightNode={
				            <Link to="/user/shopCenter">
				                <img src={shoppCenter} className={classs.rightNode}/>
				            </Link>
				        }
                        backgroundColor="#F76260"
                        onLeft={()=>{this.props.push('/home/myIndex')}}>积分商城</NavBar>
                <Sign ref="SignModel" coin={+coins} days={+signNumbers} sign={isSign} callBackFun={(data)=>{this.signSuccess(data)}}/>
                {Dom}
			</div>
		)
	}
}
const datas=(state)=>({
      barData:state.infodata.getIn(['SHOP_PRODUCT_BAR','data']),
      listData(key){
          return state.listdata.getIn([key,'data'])
      },
      pending(key){
          return state.listdata.getIn([key,'pending'])
      },
      end(key){
          return state.listdata.getIn([key,'pageEnd'])
      }
});
const dispatchFn=(dispatch)=>({
      productBar(){
         dispatch({
             type:'SHOP_PRODUCT_BAR'
         })
      },
      push(url){
        dispatch(push(url))
      },
      getList(key,id){
	      dispatch({
	          type:'SHOP_PRODUCT_LIST',
              OtherKey:key,
              params:[
                  10,
                  2,
                  id
              ]
          })
      }
});
export default connect(datas,dispatchFn)(Index)