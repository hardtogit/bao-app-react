import React from 'react' //点币首页
import NavBar from '../../../components/NavBar/index';
import styles from './index.less'
import {connect} from 'react-redux'
import {Link} from "react-router";
import {push,goBack} from 'react-router-redux'
import Loading from '../../../components/pageLoading/index'
import selected from '../../../assets/images/find/selected.png'
import deleteImg from '../../../assets/images/find/delete.png'
import nos from '../../../assets/images/find/nos.png'
import editImg from '../../../assets/images/find/edit.png'
class Index extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount(){
        this.props.getAddressList();
    }
	componentDidMount() {
    }
	componentWillUnmount() {}
    componentWillReceiveProps(next){

    }
    selectBtn=(id,is_default)=>{
        if(is_default != 1){
            this.props.setAddress(id,is_default);
            console.log("111")
        }
    };
	loadDom=()=>{
	    return <Loading/>
    };
    loadEndDom=(data)=>{
        return(
            <div className={styles.divContent}>
                {
                    data&&data.map((item,i)=>{
                        const {id,address,phone,consignee,is_default}=item;
                        return(
                            <div key={i} className={styles.itemContent}>
                                <div className={styles.topTxt}>
                                    <p className={styles.nameDiv}><span className={styles.nameTxt}>{consignee}</span><span className={styles.telTxt}>{phone}</span></p>
                                    <p className={styles.addTxt}>{address}</p>
                                </div>
                                <div className={styles.bottomOption}>
                                    <img  className={styles.nos} src={is_default==1&&selected||nos} onClick={()=>{this.selectBtn(id,is_default)}}/>
                                    <span className={is_default==0&&styles.selectTxt||styles.selectedTxt}>{is_default==1&&"默认地址"||"设为默认"}</span>
                                    <Link to={`/find/editAddress/${consignee}/${phone}/${address}`}  >
                                        <span className={styles.deleteTxt}>删除</span>
                                        <img  className={styles.deleteImg} src={deleteImg} />
                                    </Link>
                                    <span className={styles.editTxt}>编辑</span>
                                    <img  className={styles.editImg} src={editImg}/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    };


	render() {
        const {
            pop,
            addressData,
            setData
        }=this.props;
        let Dom;
        if(addressData&&addressData.code ==100){
            console.log(addressData);
            Dom = this.loadEndDom(addressData.data);
        }else{
            Dom = this.loadDom;
        }
        console.log(setData);
		return (
			<div className={styles.bg} >
				<NavBar backgroundColor="#fff" color="#333" onLeft={pop}>收货地址</NavBar>
                {
                    Dom
                }
			</div>
		)
	}
}
const datas=(state)=>({
    addressData:state.infodata.getIn(['GET_ADDRESS_LIST','data']),
    setData:state.infodata.getIn(['SET_ADDRESS','data']),
});
const dispatchFn=(dispatch)=>({
    getAddressList(){
        dispatch({
            type:'GET_ADDRESS_LIST'
        })
    },
    setAddress(id,isDefault){
        dispatch({
            type:'SET_ADDRESS',
            params:[
                id,
                isDefault
            ]
        })
    },
    pop(){
        dispatch(goBack())
    },
    push(url){
        dispatch(push(url))
    },
});
export default connect(datas,dispatchFn)(Index)