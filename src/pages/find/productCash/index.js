import React from 'react' //收货地址首页
import { connect } from 'react-redux'
import {push, goBack} from 'react-router-redux'
import NavBar from '../../../components/NavBar/index';
import Box from '../../../components/ContentBox/index';
import Alert from '../../../components/Dialog/alert';
import Confirm from '../../../components/Dialog/confirm';
import {Link} from "react-router";
import styles from './index.css'
let delId = 0;
class Index extends React.Component {
	constructor(props) {
		super(props)
        this.state={
		    flag:true,
        }
	}
    componentWillMount(){
        this.props.clearData("CASH_PRODUCT")
    }
	componentDidMount() {
	    const{product_id}=this.props.params;
        this.props.getAddress();
        this.props.productDetail(product_id);
        this.props.getVip();
    }
    componentWillReceiveProps(nextProps){
        const {
            flag
        }=this.state;
        const{cashData}=nextProps;
        if(cashData&&cashData.code==300&&!flag){
            this.refs.alert.show({
                content:cashData.msg,
                okText:'确定',
                okCallback:()=>{
                    this.setState({
                        flag:true
                    })
                }
            })
        }
        if(cashData&&cashData.code==100&&!flag){
            this.refs.alert.show({
                content:"兑换成功，请到兑换记录中查看！",
                okText:'确定',
                okCallback:()=>{
                    this.setState({
                        flag:true
                    });
                    this.props.pop();
                }
            })
        }
    }
    confirmBtn=()=>{
        const{product_id,num}=this.props.params;
        const {address,cashData} = this.props;
        this.setState({
            flag:false
        });
        let addressId;
        if(address.length>0){
            addressId = address[0].id;
        }
        let proprety = sessionStorage.getItem("propertyStr");
        proprety= proprety.substring(0,proprety.length-2);
        if(address&&address.length==0){
            this.refs.alert.show({
                content:'请选择地址!',
                okText:'确定'
            })
        }else{
            this.props.cashProduct(product_id,addressId,num,proprety);
        }
    }
    nullAddress=()=>{
        return(<div className={styles.nullDom}>
            <Link to={`/find/addAddress`}  >
                <div className={styles.addAddress}>+添加地址</div>
            </Link>
        </div>)
    }
    hasAddress=()=>{
        const {address} = this.props;
        let addressList=[];
        address&&address.map((item,i)=>{
            if(i == 0){
                addressList.push(
                    <div className={styles.item} key={i} >
                        <p  className={styles.name} >{item.consignee}<span className={styles.phone}>{item.phone}</span></p>
                        <p className={styles.site}>{item.address}</p>
                        <div className={styles.eidt_bg}>
                            <div className={styles.delDiv} >
                                <Link to={`/find/address`} style={{width:"50%"}} >
                                    <span className={styles.editTxt}>更多地址></span>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.bottomBg}></div>
                    </div>
                )
            }
        })

        return(<div>
            {
                addressList
            }
        </div>)
    }
    produceDom=(data)=>{
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
        const{
            num
        }=this.props.params;
        let proprety = sessionStorage.getItem("propertyStr");
        let proList = proprety.split("||");
        let typeArr=[]
        proList.map((item,i)=>{
            if(i<proList.length-1){
                let ass = item.split("|");
                typeArr.push(ass[1])
            }
        })
        return(
            <div>
                <div className={styles.productInfo}>
                    <div className={styles.productImg}>
                        <img src={image} />
                    </div>
                    <div className={styles.productDetail}>
                        <div>
                            <p className={styles.nameTxt}>{product_name}</p>
                            <p>
                                {
                                    product_property&&product_property.map(({type_name,property_value,id}=item,i)=>(
                                        <p className={styles.nump} ref="property">{type_name}：{typeArr[i]}</p>
                                    ))
                                }
                            </p>
                        </div>
                        <div>
                            {/*<p className={styles.proceTxt}>{alone_price}点币</p>*/}
                            <p className={styles.numTxt}>*{num}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.discount}><span>商品合计</span><span>{alone_price}点币</span></div>
            </div>
            )
    }
	render() {
        const {address,pop,productData,VipData,cashData} = this.props;
        let Dom;
        let productDom;
        let coinNum;
        let level;
        let disciuntNum;
        if(productData){
            productDom= this.produceDom(productData.data);
        }
        let isCoupon = sessionStorage.getItem("isCoupon");
        if(isCoupon==0){
            if (address.length!=0){
                Dom=this.hasAddress();
            }else{
                Dom=this.nullAddress();
            }
        }

        if(VipData){
            coinNum = VipData.data.coin_total;
            level = VipData.data.vip_level;
            disciuntNum = VipData.data.discount_num;
        }
		return (
			<div className={styles.bg}>
                <NavBar onLeft={pop}  backgroundColor="#fff" color="#333">产品兑换</NavBar>
				<Box>
                    {Dom}
                    {
                        productDom
                    }
                    <div className={styles.discount}>{disciuntNum==10&&"当前等级无优惠"||"会员VIP"+level+"级"+disciuntNum+"折优惠"}</div>
				</Box>
                <div className={styles.addBtnDiv}>
                    <p className={styles.coinNum}>您的当前可用点币：{coinNum}</p>
                    <div className={styles.addBtn}  onClick={()=>{this.confirmBtn()}}>
                        确认兑换
                    </div>
                </div>
                <Alert ref="alert"/>
                <Confirm ref="confirm"/>

			</div>
		)
	}
}
const siteModel=(data)=>{
	if(data&&data.code==100){
		return data.data
	}else{
		return [];
	}
};

const mapStateToProps = (state) => {
	return {
		address:siteModel(state.infodata.getIn(['GET_ADDRESS_LIST','data'])),
        productData:state.infodata.getIn(['PRODUCT_DETAIL','data']),
        VipData: state.infodata.getIn(['GET_VIP', 'data']),
        cashData: state.infodata.getIn(['CASH_PRODUCT', 'data']),
	}
};

const mapDispatchToProps = (dispatch) => ({
	getAddress(){
		dispatch({
			type:"GET_ADDRESS_LIST"
		})
	},
    cashProduct(product_id,addressId,num,proprety){
		dispatch({
			type:"CASH_PRODUCT",
            params:[
                {
                    product_id:product_id,
                    address_id:addressId,
                    num:num,
                    product_property:proprety
                }
            ]
		})
	},
    productDetail(id){
        dispatch({
            type:'PRODUCT_DETAIL',
            params:[id]
        })
    },
    getVip(){
        dispatch({
            type:'GET_VIP'
        })
    },
    pop() {
        dispatch(goBack())
    },
    push(url){
        dispatch(push(url))
    },
    clearData(key){
        dispatch({
            type:'CLEAR_DATA',
            key:key
        })
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(Index)
