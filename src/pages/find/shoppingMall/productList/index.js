import React from 'react' //点币首页
import NavBar from '../../../../components/NavBar/index';
import Box from '../../../../components/ContentBox/index'
import {Link} from "react-router";
import classs from './index.less'
import {connect} from 'react-redux'
import {push,goBack} from 'react-router-redux'
import shoppCenter from '../../../../assets/images/shopp-center/shoppCenter.png'
import private1 from '../../../../assets/images/find/private2.png'
import coin from '../../../../assets/images/find/coin.png'
import select from '../../../../assets/images/find/select.png'
import Loading from '../../../../components/pageLoading/index'
import Scroll from '../../../../components/scroll/index'
import utils from '../../../../utils/utils'
import cs from "classnames";
class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            index:0,
            id:0,
            filterShow:false,
            flag1:999,
            init:false,
            params:[]
		}
	}
	componentWillMount(){
        this.props.getGoodsTypeList();
        // this.props.getGoodsList();
    }
	componentDidMount() {
    }
	componentWillUnmount() {}
    componentWillReceiveProps(nextProps){
	    const {typeData}=nextProps;
	    let arr={};
	    if(typeData&&typeData.code==100) {
            typeData.data.map(({label_type}) => {
                arr[label_type]=''
            });
            this.setState({
                params:arr
            })
        }
    }
    filters=()=>{
        this.setState({
            filterShow:!this.state.filterShow
        })
    };
    choose=(flag1,label)=>{
        this.setState({
            flag1:flag1
        });
        this.setState((preState)=>{
            let params=Object.assign(preState.params,{[label]:flag1});
            console.log(params)
        });
    };
    confirm=(flag2)=>{
        this.refs.scroll.setState({
            init:true
        });
        this.setState({
            filterShow:false
        });
        this.props.clearData();
        console.log(this.state)
        // this.props.getList(flag);
    };

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
	    const {index,flag1}=this.state;
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
                        <Scroll  ref='scroll' height={Height}
                                  fetch={()=>{getGoodsList('GET_GOODS_LIST'+i,id)}}
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
        const {
            params
        }=this.state;
        console.log(typeData);
		return (
			<div className={classs.bg} >
				<NavBar onRight={this.filters} rightNode={<img src={select} className={classs.rightNode}/>}
                        backgroundColor="#fff"
                        color="#333"
                        onLeft={pop}>产品列表</NavBar>
                {Dom}
                <div className={cs(classs.filter,this.state.filterShow?classs.active:"hide")}>
                    {
                        typeData&&typeData.data.map((item,i)=>(
                            <div key={i}>
                                <p className={classs.selectTitle}>{item.label_name}</p>
                                <ul className={classs.select}>
                                    <li onClick={()=>{this.choose('',item.label_type)}} className={cs(params[item.label_type]?classs.noselect:classs.current)}>全部</li>
                                    {
                                        typeData&&typeData.data[i].label_child.map(({id,name},i)=>(
                                            <li key={i} onClick={()=>{this.choose(id,item.label_type)}} className={cs(params[item.label_type]==id?classs.current:classs.noselect)}>{name}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                    <p className={classs.selectTitle}>积分区间</p>
                    <div className={classs.coinselect}>
                        <input ref="priceStart" type="text"/>
                        <span>-</span>
                        <input ref="priceEnd" type="text"/>
                    </div>
                    <div className={classs.btnWrap}>
                        <div className={classs.confirmBtn} onClick={()=>{this.confirm()}}>确认</div>
                    </div>
                </div>
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
    clearData(){
        dispatch({
            type:'CLEAR_DATA',
            key:'GET_GOODS_LIST'
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