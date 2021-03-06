import React from 'react' //点币首页
import NavBar from '../../../../components/NavBar/index';
import {Link} from "react-router";
import classs from './index.less'
import {connect} from 'react-redux'
import {goBack,push} from 'react-router-redux'
import Loading from '../../../../components/pageLoading/index'
import wrap from '../../../../utils/pageWrapper'
import Alert from '../../../../components/Dialog/alert'
class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			flag:false,
			dj:JSON.parse(sessionStorage.getItem("bao-user")).grade
		}
	}
	componentWillMount(){
		this.remove();
		const inspect = this.dataInspect();
		if (!inspect){
            const {
                id
            }=this.props.params;
            this.props.getInfo(id)
		}
	}
	componentDidMount() {
	}
	componentWillUnmount() {}
    remove=()=>{
        sessionStorage.removeItem("bao-product");
        this.props.clearData();
    }
	dataInspect=()=>{
        const infoDate=sessionStorage.getItem("bao-product");
        const {
            id
        }=this.props.params;
        if (infoDate){
            if (JSON.parse(infoDate).id==id){
                return true;
            }
        }
        return false;
	}
	setData=()=>{
		const {
			data
		}=this.props.infoData;
        sessionStorage.setItem("bao-product",JSON.stringify(data));
	}
	loadDom=()=>{
		return <Loading/>
	}
    vaold=()=>{
        const {
            infoData
        }=this.props;
        const productData=infoData&&infoData.data||JSON.parse(sessionStorage.getItem("bao-product"));
		const {
            id,
            count
		}=productData;
		if (count==0){
			this.refs.alert.show({
                content:'对不起你兑换的物品数量不足!',
                okText:'确定'
			})
		}else {
			this.props.push(`/user/trueExchangeConfirm/${id}`)
		}
	}
	loadEndDom=()=>{
		const {
            infoData
		}=this.props;
        const productData=infoData&&infoData.data||JSON.parse(sessionStorage.getItem("bao-product"));
		const {
            cover,
            name,
            count,
            price,
            value,
            description,
		}=productData;
		return (<div>
			<NavBar backgroundColor="#F76260" onLeft={this.props.pop}>{name}</NavBar>
			<div className={classs.commodity}>
				<div className={classs.productImg}>
                   <img src={cover}/>
				</div>
				<div className={classs.commodityMs}>
					<p className={classs.priceBox}>
							<span className={classs.price}>
								{price}
							</span>
						<span>
								点币
							</span>
						<span>
							{this.state.dj}
							</span>
					</p>
					<p className={classs.originalPrice}>
					      <span className={classs.originalLeft}>
							  <span>
                                  价格
							  </span>
							  <span>
								  {value}
							  </span>
						  </span>
						<span className={classs.originalRight}>
                               <span>
								   剩余数量:
							   </span>
								<span>
									{count}
								</span>
							</span>
					</p>
				</div>
			</div>
			<div className={classs.commodityDetails}>
				<div className={classs.commodityTitle}>
					商品详情
				</div>
				<div className={classs.productDetails}>
				<div dangerouslySetInnerHTML={{__html:description}}>

				</div>
				</div>
			</div>
			<div className={classs.buyBottom} onClick={this.vaold}>
				立即兑换
			</div>
		</div>)
	}
	render() {
		const {
            infoData
		}=this.props;
		const inspect=this.dataInspect();
		let Dom=this.loadDom();
		if (infoData){
			Dom=this.loadEndDom();
			this.setData();
		}
		 if (inspect){
             Dom=this.loadEndDom();
		 }
		return (
			<div className={classs.bg} >
				{
                    Dom
				}
				<Alert ref="alert"/>
			</div>
		)
	}
}
const datas=(state)=>({
       infoData:state.infodata.getIn(['COMMODITY_DETAILS','data2'])
});
const dispatchFn=(dispatch)=>({
	  pop(){
	  	dispatch(goBack())
	  },
	  getInfo(id){
	  	dispatch({
	  		type:'COMMODITY_DETAILS',
            params:[id]
		})
	  },
	push(url){
	  	dispatch(push(url))
	},
    clearData(){
        dispatch({
            type:'CLEAR_INFO_DATA',
            key:'COMMODITY_DETAILS'
        })
    }
});
export default connect(datas,dispatchFn)(Index)