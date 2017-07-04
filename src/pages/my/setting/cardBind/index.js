/**
 * Created by xiangguo .
 * time:2017/7/4 0004.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from 'react'
import NavBar from '../../../../components/NavBar'
import Button from '../../../../components/BaseButton'
import LoadingButton from '../../../../components/LoadingButton/index'
import ValidateForm from '../../../../components/BaseValidateForm/index'
import * as actionTypes from '../../../../actions/actionTypes'
import BaseInput     from '../../../../components/BaseInput/index'
import InlineLoading from '../../../../components/Loading/InlineLoading'
import SelectBox from '../../../../components/SelectBox/index'
import Confirm from '../../../../components/Dialog/confirm'
import Alert from '../../../../components/Dialog/alert'
import Success from '../../../../components/Dialog/success'
import styles from './index.less'
import {go, replace} from 'react-router-redux'
import {connect} from 'react-redux'
import IDValidator from 'id-validator'
import {IDENTITY_AUTH, SET_USERNAME_SUCCESS,REGISTER_NUM} from '../../../../actions/actionTypes'
import Loading from '../../../../components/pageLoading'
class Index extends Component{
    constructor(props) {
        super(props);
        this.state = {
            province:'',
            city:'',
            bank:'',
            point:''
        }
    }
    static defaultProps = {
        data:[{color:'#000',text:'ds'},{color:'#000',text:'ds'},{color:'#000',text:'ds'}]
    };
    dd=(e)=>{
       let el= e.target;
        console.log(el.value)
       this.setState({
           province: el.value
       });
        this.props.getCityList({provinceId:el.value})
    }
    componentWillMount(){
        this.props.getPointList()
        this.props.getProvinceList()
        this.props.getCityList()
        this.props.getBankList()

    }
    componentDidMount(){
    }
    render(){
        const{
            provinceData,
            cityData,
            bankData,
            pointData
            }=this.props
        console.log(pointData)
        return(
            <div>
            <div>
            省份：<select name="" id="" onChange={this.dd}>
                {provinceData&&provinceData.data.map((item,i)=>{
                   return <option key={i} value={item.provinceId}>{item.provinceName}</option>
                })}
            </select>
            </div>
            <div>
            城市：<select name="" id="">
                {cityData&&cityData.data.map((item,i)=>{
                    return <option key={i} value={item.cityId}>{item.cityName}</option>
                })}
            </select>
            </div>
            <div>
            银行：<select name="" id="">
                {bankData&&bankData.data.map((item,i)=>{
                    return <option key={i} value={item.bankId}>{item.bankName}</option>
                })}
            </select>
            </div>
            <div>
            网点：<select name="" id="">
                {pointData&&bankData.data.map((item,i)=>{
                    return <option key={i} value={item.bankId}>{item.bankName}</option>
                })}
            </select>
            </div>
            <div>
            银行卡号：<input type="text"/>
            </div>
                <button>绑卡</button>
            </div>
        )
    }
}
const mapStateToProps=(state,ownProps)=>{
    return{
        provinceData:state.infodata.getIn([actionTypes.GET_PROVINCE, 'data']),
        cityData:state.infodata.getIn([actionTypes.GET_CITY, 'data']),
        bankData:state.infodata.getIn([actionTypes.GET_BANK, 'data']),
        pointData:state.infodata.getIn([actionTypes.GET_POINT, 'data']),

    }
};

const mapDispatchToProps=(dispatch,ownProps)=>{
    return{
        //查询网点
        getPointList(data){
            dispatch({
                type:actionTypes.GET_POINT,
                params:[data]


            })
        },
        //查询省份
        getProvinceList(){
            dispatch({
                type:actionTypes.GET_PROVINCE

            })

        },

        //查询城市
        getCityList(data){
            dispatch({
                type:actionTypes.GET_CITY,
                params:[data]
            })

        },

        //查询银行
        getBankList(){
            dispatch({
                type:actionTypes.GET_BANK

            })
        }

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Index);