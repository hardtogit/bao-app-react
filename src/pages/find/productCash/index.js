import React from 'react' //收货地址首页
import { connect } from 'react-redux'
import {push, goBack} from 'react-router-redux'
import NavBar from '../../../components/NavBar/index';
import Box from '../../../components/ContentBox/index';
import CheckBox from '../../../components/CheckBoxBlue/index';
import Alert from '../../../components/Dialog/alert';
import Confirm from '../../../components/Dialog/confirm';
import {Link} from "react-router";
import styles from './index.css'
import classnames from 'classnames';
import nullIcon from '../../../assets/images/record.png';
import deleteImg from '../../../assets/images/find/delete.png'
import editImg from '../../../assets/images/find/edit.png'
let delId = 0;
class Index extends React.Component {
	constructor(props) {
		super(props)
        this.state={
		    flag:true
        }
	}
	componentDidMount() {
	    const{product_id}=this.props.params;
        this.props.getAddress();
        this.props.productDetail(product_id);
    }
	componentWillUnmount() {}
    componentWillReceiveProps=({set,del})=>{
	    const {
            flag
        }=this.state;
    };


    nullAddress=()=>{
        return(<div className={styles.nullDom}>
            <img src={nullIcon}/>
        </div>)
    }
    hasAddress=()=>{
        const {address} = this.props;


        let addressList=[];
        address&&address.map((item,i)=>{
            if(i == 0){
                addressList.push(
                    <div className={styles.item} key={i}>
                        <p  className={styles.name}>{item.consignee}<span className={styles.phone}>{item.phone}</span></p>
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
        console.log(proList)
        let typeArr=[]
        proList.map((item,i)=>{
            if(i<proList.length-1){
                let ass = item.split("|");
                typeArr.push(ass[1])
            }
        })
        console.log(typeArr)

        return(<div className={styles.productInfo}>
            <div className={styles.productImg}>
                <img src={image} />
            </div>
            <div className={styles.productDetail}>
                <div>
                    <p className={styles.nameTxt}>{product_name}</p>
                    <p>
                        {
                        product_property&&product_property.map(({type_name,property_value,id}=item,i)=>(
                                <span className={styles.nump} ref="property">{type_name}：{typeArr[i]}</span>
                        ))
                    }
                    </p>
                </div>
                <div>
                    <p className={styles.proceTxt}>{alone_price}点币</p>
                    <p className={styles.numTxt}>*{num}</p>
                </div>
            </div>
        </div>)
    }
	render() {
        const {address,pop,productData} = this.props;
        let Dom = this.nullAddress();
        let productDom;
        if(productData){
            productDom= this.produceDom(productData.data);
        }
        if (address.length!=0){
            Dom=this.hasAddress();
        }
		return (
			<div className={styles.bg}>
                <NavBar onLeft={pop}  backgroundColor="#fff" color="#333">产品兑换</NavBar>
				<Box>
                    {Dom}
                    {
                        productDom
                    }
				</Box>
                <Alert ref="alert"/>
                <Confirm ref="confirm"/>
                <div className={styles.addBtnDiv}>
                    <Link to={`/find/addAddress`}  >
                        <div className={styles.addBtn}>
                            添加新地址
                        </div>
                    </Link>
                </div>
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
        productData:state.infodata.getIn(['PRODUCT_DETAIL','data'])
	}
};

const mapDispatchToProps = (dispatch) => ({
	getAddress(){
		dispatch({
			type:"GET_ADDRESS_LIST"
		})
	},
    productDetail(id){
        dispatch({
            type:'PRODUCT_DETAIL',
            params:[id]
        })
    },

    delSite(id){
        dispatch({
            type:"DEL_ADDRESS",
            params:[id],
            id:id
        })
    },
    pop() {
        dispatch(goBack())
    },
    push(url){
        dispatch(push(url))
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(Index)
