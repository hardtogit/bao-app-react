/**
 * Created by xiangguo .
 * time:2017/7/4 0004.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from 'react'
import NavBar from '../../../../components/NavBar'
import classNames from 'classnames'
import Button from '../../../../components/BaseButton'
import LoadingButton from '../../../../components/LoadingButton/index'
import ValidateForm from '../../../../components/BaseValidateForm/index'
import * as actionTypes from '../../../../actions/actionTypes'
import BaseInput     from '../../../../components/BaseInput/index'
import InlineLoading from '../../../../components/Loading/InlineLoading'
import Confirm from '../../../../components/Dialog/confirm'
import Alert from '../../../../components/Dialog/alert'
import Success from '../../../../components/Dialog/success'
import styles from './index.less'
import {go, replace,goBack} from 'react-router-redux'
import {connect} from 'react-redux'
import IDValidator from 'id-validator'
import {IDENTITY_AUTH, SET_USERNAME_SUCCESS,REGISTER_NUM} from '../../../../actions/actionTypes'
import Loading from '../../../../components/pageLoading'
class Index extends Component{
    constructor(props) {
        super(props);
        this.state = {
            index:0,
            clientWidth:document.body.clientWidth,
            province:'请选择',
            city:'',
            point:''

        }
    }
    static defaultProps={

    };
    bankId= this.props.location.query.bankId;
    swiperProvince=()=>{
        this.setState({
            index:0,
            province:'请选择',
            city:'',
            point:''
        })

    }
    swiperCity=(e)=>{
        let el= e.target;
        if(el.innerHTML==''){
            return
        }
        this.setState({
            index:1,
            city:'请选择',
            point:''
        })
    }

    choiceProvince=(provinceId,provinceName)=>{
        this.setState({
            index:1,
            province:provinceName,
            city:'请选择',
        });
        this.refs.cityList.scrollTop=0
        this.props.getCityList({provinceId:provinceId})
      }
    choiceCity=(cityId,cityName)=>{
        this.setState({
            index:2,
            city:cityName,
            point:'请选择'
        });
        this.props.getPointList({cityId:cityId,bankId:this.props.location.query.bankId})
    }
    choicePoint=(bankCode,bankName)=>{
        this.props.pointToState({bankCode:bankCode,bankName:bankName});
        this.props.pop()
    }

    componentWillReceiveProps() {
    }
    componentWillMount(){
       }

    componentDidMount(){
        this.props.getProvinceList();
        this.refs.group.style.width=document.body.clientWidth*3+'px';
        this.refs.group.style.height=document.body.clientHeight-88+'px';
    }
    render(){
        const{
            index,
            clientWidth,
            province,
            city,
            point
            }=this.state;
        const{
            provinceData,
            cityData,
            pointData
            }=this.props;

        let style;
        switch (index){
            case 0: style={transform:'translate(0px, 0px) translateZ(0px)'}; break;
            case 1: style={transform:'translate(-'+clientWidth+'px, 0px) translateZ(0px)'}; break;
            case 2: style={transform:'translate(-'+clientWidth*2+'px, 0px) translateZ(0px)'}; break;
            default:break;
        }
        return(
            <div>
                <NavBar onLeft={this.props.pop}>选择网点</NavBar>
                <div style={{paddingTop:'44px'}}>
                    <ul className={styles.nav }>
                        <li onClick={this.swiperProvince} className={classNames(index==0?styles.choice:'')}>{province}</li>
                        <li onClick={this.swiperCity} className={classNames(index==1?styles.choice:'')}>{city}</li>
                        <li className={classNames(index==2?styles.choice:'')}>{point}</li>
                    </ul>
                </div>
                <div className={styles.container}>
                <div ref="group" className={styles.address} style={style}>
                    <ul className={styles.item}>
                        {provinceData&&provinceData.data.map((value,i)=>{
                            return <li onClick={()=>{this.choiceProvince(value.provinceId,value.provinceName)}} key={value.provinceId}> {value.provinceName} </li>
                        })}
                    </ul>
                    <ul ref="cityList" className={styles.item}>
                        {cityData&&cityData.data.map((value,i)=>{
                            return <li onClick={()=>{this.choiceCity(value.cityId,value.cityName)}} key={value.cityId}> {value.cityName} </li>
                        })}
                    </ul>
                    <ul ref="bankList" className={styles.item}>
                        {pointData&&pointData.data.map((value,i)=>{
                            return <li onClick={()=>{this.choicePoint(value.bankCode,value.bankName)}} key={value.bankCode}> {value.bankName} </li>
                        })}
                    </ul>
                </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state,ownProps)=>{
    return{
        provinceData:state.infodata.getIn([actionTypes.GET_PROVINCE, 'data']),
        cityData:state.infodata.getIn([actionTypes.GET_CITY, 'data']),
        pointData:state.infodata.getIn([actionTypes.GET_POINT, 'data']),
    }
};

const mapDispatchToProps=(dispatch,ownProps)=>{
    return{
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
        //查询网点
        getPointList(data){
            dispatch({
                type:actionTypes.GET_POINT,
                params:[data]


            })
        },
        //更新网点到state
        pointToState(data){
            dispatch({
                type:actionTypes.CHOICE_POINT,
                pointData:data
            })
        },
        //返回上一页
        pop(){
            dispatch(goBack())
        }

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Index)