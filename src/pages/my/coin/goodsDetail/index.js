import React from 'react' //点币首页
import NavBar from '../../../../components/NavBar/index';
import {Link} from "react-router";
import classs from './index.less'
import {connect} from 'react-redux'
import {goBack} from 'react-router-redux'
import Loading from '../../../../components/pageLoading/index'
import wrap from '../../../../utils/pageWrapper'
class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			flag:false
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
            id
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
								至尊优惠价
							</span>
					</p>
					<p className={classs.originalPrice}>
					      <span className={classs.originalLeft}>
							  <span>
                                  价格
							  </span>
							  <span>
								  {value}
								  <span className={classs.hr} style={{width:' calc(100% + 2px)'}}/>
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
				<Link className={classs.buyBottom} to={`/user/trueExchangeConfirm/${id}`}>
					立即兑换
				</Link>
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
			</div>
		)
	}
}
const datas=(state)=>({
       infoData:state.infodata.getIn(['COMMODITY_DETAILS','data'])
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
    clearData(){
        dispatch({
            type:'CLEAR_INFO_DATA',
            key:'COMMODITY_DETAILS'
        })
    }
});
export default connect(datas,dispatchFn)(wrap(Index))