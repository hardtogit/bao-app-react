import React from 'react' //点币首页
import NavBar from '../../../../components/NavBar/index';
import Box from '../../../../components/ContentBox/index'
import LoadImg from '../../../../components/lazyLoad'
import {Link} from "react-router";
import styles from './index.less'
import {connect} from 'react-redux'
import {push,goBack} from 'react-router-redux'
import private1 from '../../../../assets/images/find/private2.png'
import coin from '../../../../assets/images/find/coin.png'
import select from '../../../../assets/images/find/select.png'
import qiang from '../../../../assets/images/find/qiang.png'
import Loading from '../../../../components/pageLoading/index'
import Scroll from '../../../../components/scroll/index'
import utils from '../../../../utils/utils'
import cs from "classnames";
class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            index:sessionStorage.getItem("barIndex")&&sessionStorage.getItem("barIndex")||0,
            id:0,
            filterShow:false,
            flag1:999,
            init:false,
            params:[]
		}
	}
	componentWillMount(){
        this.props.getGoodsTypeList();
        sessionStorage.setItem("barIndex",this.state.index);
    }
    componentDidMount=()=>{

    }
	componentWillUnmount() {}
    componentWillReceiveProps(nextProps){
	    const {typeData}=nextProps;
	    let arr={};
	    if(typeData&&typeData.code==100&&!this.state.init) {
            typeData.data.map(({label_type},i) => {
                if(i!=0){
                    arr[label_type]=''
                }
            });
            this.setState({
                params:arr,
                init:true
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
        let params;
        this.setState((preState)=>{
            params=Object.assign(preState.params,{[label]:flag1});
        });
    };
    confirm=()=>{
        this.setState({
            filterShow:false
        });
        const{
            params
        }=this.state;
        let priceStart = this.refs.priceBox.priceStart.value;
        let priceEnd = this.refs.priceBox.priceEnd.value;
        params.price_start = priceStart;
        params.price_end = priceEnd;
        this.props.clearData(this.state.index);
        this.refs.scroll.setState({
            init:true,
            first:false
        });
    };
	changeBar=(index,typeData)=>{
        this.props.clearData(this.state.index);
	    this.setState({index});
        sessionStorage.setItem("barIndex",index);
        let arr1={};
        if(typeData&&typeData.code==100) {
            typeData.data.map(({label_type},i) => {
                if(i!=0){
                    arr1[label_type]=''
                }
            });
            this.setState({
                params:arr1,
            })
        }
    }
	loadDom=()=>{
	    return <Loading/>
    }
    ScrollDom=()=>{
	    const Height = document.body.clientHeight - 100;
	    let {
            typeData,
            getGoodsList,
            listData,
            pending,
            end
        }=this.props;
	    const {index,params}=this.state;
        let cloneData=typeData.data[0].label_child.slice(0);
        cloneData.unshift({id:'',name:'全部',type_str:'area_type'});
	    return(<div>
            {
                cloneData.map(({id},i)=>{
                if (i==index){
                    const nlistData=listData('GET_GOODS_LIST'+i),
                        npending=pending('GET_GOODS_LIST'+i),
                        nend=end('GET_GOODS_LIST'+i);
                    return( <div key={i} className={styles.products}>
                        <Scroll  ref='scroll' height={Height}
                                  fetch={()=>{getGoodsList('GET_GOODS_LIST'+i,{area_type_id:id},params)}}
                                isLoading={npending} distance={20} endType={nend}
                        >
                                {
                                    nlistData&&nlistData.map((item,i)=>{
                                        const {product_id,product_name,image,price,alone_price,down_time,server_time,label_name}=item;
                                        let restTime = utils.millisecondToDate(down_time - server_time);
                                        return(
                                            <Link to={`/find/productDetail/${item.product_id}`}  key={i}>
                                            <div className={styles.productBox}>
                                                <span className={label_name!=""&&styles.label||styles.none}>{label_name}</span>
                                                {/*<span className={styles.label}>特价</span>*/}
                                            <p className={styles.shopTitle1}>{product_name}</p>
                                            <p className={styles.shopTitle2}>
                                                <span>{alone_price}</span>
                                                <span><img src={coin} /></span>
                                                <img src={private1} className={styles.specialIcon}/>
                                            </p>
                                                <div className={styles.imgBox}>
                                                    <LoadImg  className={styles.products_img} src={image} scrollDom={this.refs.scroll}  ></LoadImg>
                                                </div>
                                            <div className={down_time!=0&&styles.productBottomBox||styles.none}><span className={styles.productBottomTxt}>距结束{restTime}</span></div>
                                            <img src={qiang} className={down_time!=0&&styles.qiang||styles.none}/>
                                        </div>
                                            </Link>
                                        )
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
          <div className={styles.items}>
              <div className={styles.scrollBar}>
              <ul ref="ul">
                  <li className={index==0&&styles.active||null} onClick={()=>{this.changeBar(0)}}>全部</li>
                  {
                      typeData&&typeData.data[0].label_child.map(({id,name},i)=>(
                          <li key={i} className={index==i+1&&styles.active||null} ref={id} onClick={()=>{this.changeBar(i+1,typeData)}}>{name}</li>
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
        let typeList=[];
        typeData&&typeData.data.map((item,i)=>{
            if(i!=0){
                typeList.push(
                    <div key={i}>
                        <p className={styles.selectTitle}>{item.label_name}</p>
                        <ul className={styles.select}>
                            <li onClick={()=>{this.choose('',item.label_type)}} className={cs(params[item.label_type]?styles.noselect:styles.current)}>全部</li>
                            {
                                typeData&&typeData.data[i].label_child.map(({id,name},i)=>(
                                    <li key={i} onClick={()=>{this.choose(id,item.label_type)}} className={cs(params[item.label_type]==id?styles.current:styles.noselect)}>{name}</li>
                                ))
                            }
                        </ul>
                    </div>
                )
            }
        })
		return (
			<div className={styles.bg} >
				<NavBar onRight={this.filters} rightNode={<img src={select} className={styles.rightNode}/>}
                        backgroundColor="#fff"
                        color="#333"
                        onLeft={pop}>产品列表</NavBar>
                {Dom}
                <div className={cs(styles.filter,this.state.filterShow?styles.active:"hide")}>
                    {
                        typeList
                    }
                    <p className={styles.selectTitle}>点币区间</p>
                    <form className={styles.coinselect}  ref="priceBox">
                        <input type="text" name="priceStart"/>
                        <span>-</span>
                        <input type="text"  name="priceEnd"/>
                        <span className={styles.coinWords}>点币</span>
                    </form>
                    <div className={styles.btnWrap}>
                        <div className={styles.confirmBtn} onClick={()=>{this.confirm()}}>确认</div>
                    </div>
                </div>
			</div>
		)
	}
}
const mapStateToProps=(state)=>({
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
const mapDispatchToProps=(dispatch)=>({
    getGoodsTypeList(){
        dispatch({
            type:'GET_GOODS_TYPE_LIST'
        })
    },
    getGoodsList(key,type_id, data){
        dispatch({
            type:'GET_GOODS_LIST',
            OtherKey:key,
            params:[
               Object.assign({page_size:10},type_id,data)
            ]
        })
    },
    clearData(i){
        dispatch({
            type:'CLEAR_DATA',
            key:'GET_GOODS_LIST'+i
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