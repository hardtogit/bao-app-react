import React from 'react' //点币首页
import NavBar from '../../../../components/NavBar/index';
import Box from '../../../../components/ContentBox/index'
import {Link} from "react-router";
import classs from './index.less'
import {connect} from 'react-redux'
import {push,goBack} from 'react-router-redux'
import Sign from '../../../../components/Sign/index'
import shoppCenter from '../../../../assets/images/shopp-center/shoppCenter.png'
import coinTotal from '../../../../assets/images/shopp-center/total.png'
import icon  from '../../../../assets/images/shopp-center/icon.png'
import private1 from '../../../../assets/images/find/private2.png'
import coin from '../../../../assets/images/find/coin.png'
import Loading from '../../../../components/pageLoading/index'
import Scroll from '../../../../components/scroll/index'
import utils from '../../../../utils/utils'
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
        this.props.getGoodsTypeList();
        this.props.getGoodsList();
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
    ScrollDom=()=>{
	    const Height = document.body.clientHeight - 44;
	    let {
            typeData,
            getGoodsList,
            listData,
            pending,
            end
        }=this.props;
	    const {index}=this.state;

        console.log(index)
            let cloneData=typeData.data[0].label_child.slice(0);
            cloneData.unshift({id:'0',name:'全部',type_str:'area_type'});
	    return(<div>
            {
                cloneData.map(({id},i)=>{
                if (i==index){
                    const nlistData=listData('GET_GOODS_LIST'+i),
                        npending=pending('GET_GOODS_LIST'+i),
                        nend=end('GET_GOODS_LIST'+i);
                    return( <div key={i} className={classs.products}>
                        <Scroll height={Height} fetch={()=>{getGoodsList('GET_GOODS_LIST'+i,id)}}
                                isLoading={npending} distance={20} endType={nend} endload={<div></div>}
                        >
                                {
                                    nlistData&&nlistData.map((item,i)=>{
                                        const {product_id,product_name,image,price}=item;
                                        return(<div className={classs.productBox} key={i}>
                                            <p className={classs.shopTitle1}>{product_name}</p>
                                            <p className={classs.shopTitle2}>
                                                <span>{price}</span>
                                                <span><img src={coin} /></span>
                                                <img src={private1} className={classs.specialIcon}/>
                                            </p>
                                            <Link to={`/user/goodsDetail/${product_id}`}>
                                                <div className={classs.imgBox}>
                                                    <img className={classs.products_img} src={utils.rootImgUrl + image } />
                                                </div>
                                            </Link>
                                            <div className={classs.productBottomBox}><span className={classs.productBottomTxt}>距结束04天</span></div>
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
        let {index} = this.state;

        const {
            typeData
        }=this.props;
        const Dom=this.ScrollDom();
      return(<Box>

          <div className={classs.items}>
              <div className={classs.scrollBar}>
              <ul ref="ul">
                  <li className={index==0&&classs.active||null} onClick={()=>{this.changeBar(0)}}>全部</li>
                  {
                      typeData&&typeData.data[0].label_child.map(({id,name},i)=>(
                          <li key={i} className={index==i+1&&classs.active||null} ref={id} onClick={()=>{this.changeBar(i+1)}}>{name}</li>
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

	render() {
        const {
            pop,
            typeData
        }=this.props;
        let Dom;
        Dom=this.loadDom();
        if (typeData){
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
                        onLeft={pop}>产品列表</NavBar>
                {Dom}
			</div>
		)
	}
}
const datas=(state)=>({
      typeData:state.infodata.getIn(['GET_GOODS_TYPE_LIST','data']),
      listData(key){
          return state.listdata.getIn([key,'data'])
      },
      pending(key){
          return state.listdata.getIn([key,'pending'])
      },
      end(key){
          return state.listdata.getIn([key,'pageEnd'])
      },
});
const dispatchFn=(dispatch)=>({
    getGoodsTypeList(){
        dispatch({
            type:'GET_GOODS_TYPE_LIST'
        })
    },

    getGoodsList(key,id){
        dispatch({
            type:'GET_GOODS_LIST',
            OtherKey:key,
            params:[
                10,
                id
            ]
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