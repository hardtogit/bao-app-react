import React from 'react' //点币首页
import NavBar from '../../../components/NavBar/index';
import {Link} from "react-router";
import styles from './index.less'
import {connect} from 'react-redux'
import {goBack,push} from 'react-router-redux'
import Loading from '../../../components/pageLoading/index'
import wrap from '../../../utils/pageWrapper';
import utils from '../../../utils/utils';
import Alert from '../../../components/Dialog/alert'
import proImg from '../../../assets/images/find/product.png'
import privateImg from '../../../assets/images/find/private2.png'
import cs from "classnames";

class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			flag:false,
			num:1,
            params:[],
            init:false,
            index:0,
		}
        this.handleChange1 = this.handleChange1.bind(this);
	}
	componentWillMount(){
        this.props.getVip();
		this.remove();
		const inspect = this.dataInspect();
		if (!inspect){
            const {
                id
            }=this.props.params;
            this.props.productDetail(id)
		}
	}
	componentDidMount() {
	}
	componentWillUnmount() {}
    componentWillReceiveProps(nextProps){
        const {infoDate}=nextProps;
        let arr={};
        if(infoDate&&infoDate.code==100&&!this.state.init) {
            infoDate.data.product_property.map(({id}) => {
                arr[id]=''
            });
            this.setState({
                params:arr
            })
        }
    }
    handleChange1=(event) =>{
        this.setState({
            num: event.target.value,
        });
    };
    changeBar=(index,cash_limit_num,stock)=>{
		if(index < 0 ){
            this.refs.alert.show({
                content:'数目不能小于0!',
                okText:'确定'
            })
		}else if(index > cash_limit_num){
            this.refs.alert.show({
                content:'每人只限购'+cash_limit_num+'件!',
                okText:'确定'
            })
		}else if(index > stock){
            this.refs.alert.show({
                content:'商品库存不足!',
                okText:'确定'
            })
        }else{
            this.setState({
                num:index
            });
		}
    }
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

    choose=(id,label)=>{
        let params;
        this.setState((preState)=>{
            params=Object.assign(preState.params,{[id] : label});
        });
    };
    confirm=(product_id,product_property)=>{
       const{
           params,
           num,
           type_name
       }=this.state;
        let params1 = [];//去除undefined后的结果
        let str="";
        for(let i=0;i<params.length;i++){
            if(typeof(params[i])!='undefined'){
                params1.push(params[i]);
                str=str+i+"|"+params[i]+"||"
            }
        }
        if(params1.length < product_property.length ){
            this.refs.alert.show({
                content:'请选择商品属性！！',
                okText:'确定'
            })
        }else{
            sessionStorage.setItem("propertyStr",str);
            this.props.push("/find/productCash/"+product_id+"/"+num)
        }
    };
	loadEndDom=(data)=>{
        const {
            num,
            params
        }=this.state;
        const{
            image,
            product_id,
            product_name,
            product_info,
            price,
            alone_price,
            stock,
            cash_limit_time,
            cash_limit_num,
            label_name,
            product_property,
            down_time,
            server_time
		}=data;
        let restTime = utils.millisecondToDate(down_time - server_time);
		return (<div>
			<NavBar backgroundColor="#fff" color="#333" onLeft={this.props.pop}>{product_name}</NavBar>
			<div className={styles.goodsTop}>
				<div className={styles.goodsImg}>
					<img src={image} className={styles.productImg}/>
					<div className={down_time!=0&&styles.numDiv||styles.none} ><div className={styles.dayNum}>距结束{restTime}</div></div>
				</div>
				<div className={styles.proTitle}>
					<p className={styles.titleTop}>
						<span className={styles.titieTxt}>{product_name}</span>

					</p>
					<p className={styles.titleBottom}>
						<span className={styles.priceTxt}>{alone_price}点币</span>
						<img src={privateImg}  className={styles.priceImg} />
						<span className={styles.priceTxt1}>{price}点币</span>
					</p>
				</div>
			</div>
			<div className={styles.propertyDiv}>
                {
                    product_property&&product_property.map(({type_name,property_value,id}=item,i)=>(
						<div className={styles.propertyItem} key={i}>
							<p className={styles.nump} ref="property">{type_name}：<span className={styles.num2}>{params[id]&&params[id]||"选择"}</span></p>
							<p className={styles.propertyValue}>
								{
                                    property_value.split("|").map((item,i)=>(
										<span key={i}  onClick={()=>{this.choose(id,item)}} className={cs(params[id]==item?styles.current:"")} >{item}</span>
									))
								}
							</p>
						</div>
                    ))
                }
                <p className={styles.num1}>数目：<span className={styles.num2}>{this.state.num}</span></p>
                <p className={styles.numSelect}>
                    <span className={styles.numBorder} onClick={()=>{this.changeBar(num-1)}}>-</span>
                    <input type="text" className={styles.productNum} value={this.state.num}  onChange={this.handleChange1}/>
                    <span className={styles.numBorder} onClick={()=>{this.changeBar(num+1,cash_limit_num,stock)}}>+</span>
                    <span className={styles.limitTxt}>每人每天限购{cash_limit_num}件</span>
                    <span className={styles.limitTxt}>剩余数量{stock}件&emsp;&emsp;</span>
                </p>
			</div>
            <div className={styles.detailImg}>
                <p className={styles.infoTitle}>商品详情</p>
                <div dangerouslySetInnerHTML={{ __html: product_info }} className={styles.infoContent}></div>
            </div>
		</div>)
	}
	render() {
		const {
            infoData,
            VipData
		}=this.props;
        let flag;
		const inspect=this.dataInspect();
		let Dom;
		if (VipData&&infoData){
			Dom=this.loadEndDom(infoData.data);
			this.setData();
            flag = VipData.data.coin_total>infoData.data.alone_price;
		}else{
            Dom=this.loadDom();
        }
		 if (inspect){
             Dom=this.loadEndDom();
		 }

		return (
			<div className={styles.bg} >
				{
                    Dom
				}
				<Alert ref="alert"/>
                <div className={flag&&styles.Botton||styles.none}>
                    <p  onClick={()=>{this.confirm(infoData.data.product_id,infoData.data.product_property)}}>确认兑换</p>
                </div>
                <div className={!flag&&styles.BottonNo||styles.none}>
                    <p >点币不足</p>
                </div>
			</div>
		)
	}
}
const mapStateToProps=(state)=>({
       infoData:state.infodata.getIn(['PRODUCT_DETAIL','data']),
    VipData: state.infodata.getIn(['GET_VIP', 'data']),
});
const mapDispatchToProps=(dispatch)=>({
	  pop(){
	  	dispatch(goBack())
	  },
    productDetail(id){
	  	dispatch({
	  		type:'PRODUCT_DETAIL',
            params:[id]
		})
	  },
	push(url){
	  	dispatch(push(url))
	},
    clearData(){
        dispatch({
            type:'CLEAR_INFO_DATA',
            key:'PRODUCT_DETAIL'
        })
    },
    getVip(){
        dispatch({
            type:'GET_VIP'
        })
    },
});
export default connect(mapStateToProps,mapDispatchToProps)(Index)