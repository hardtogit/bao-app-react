import React from 'react'
import { connect } from 'react-redux'
import { push, goBack } from 'react-router-redux'
import wrap from '../../../../utils/pageWrapper'
import * as actionTypes from '../../../../actions/actionTypes'
import NavBar from '../../../../components/NavBar'
import styles from './index.styl'
import TimeLine from '../../../../components/TimeLine'
import RedPacket from '../../../../components/RedPacket'
class InvestSuccess extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount(){
      this.props.getUser();

  }
    componentWillUnmount(){

    }
    listA=(data)=>{
        const {
            money,
            startDate,
            endDate,
            nowDate
        }=data;
        return [{
                title: '你已出借成功',
                date: nowDate
            },
            {
                title: '起息日',
                date: startDate
            },
            {
                title: '预计到期日',
                date: endDate ,
                curStep: true
            },
            {   title:'本息到账',
                date:'债权自动转让时间为1~3天，转让成功自动回款',
                curStep: true
            }
        ]
    }

    lessTen=(num)=>{
        if (num<10){
            return '0'+num
        }else {
            return num
        }
    }

  render() {
        const {location:{
             query
            }}=this.props;
        let data;
        let dataArry;
        dataArry=this.listA(query)

    return (
      <div className={styles.root}>
        <NavBar onLeft={this.props.goBack}>出借成功</NavBar>
          <RedPacket  productId={this.props.location.query.productId} num={this.props.location.query.num} productType={2}></RedPacket>
        <div className={styles.content}>
          <div className={styles.amount}>
            <span>出借金额</span>
            <span>¥{ query && query.money || ''}</span>
          </div>
          <div className={styles.timeLine}>
            <TimeLine
              data={dataArry}
            />
          </div>
        </div>
        <div onClick={() => {this.props.push('/user/setting/Manage')}} className={styles.finish}>完成</div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
    return{
        userData:state.infodata.getIn(['USER_INFO'],'data')
    }

}

const mapDispatchToProps = (dispatch, ownProps) => ({
  push(path) {
    dispatch(push(path))
  },
  getUser(){
     dispatch({
         type:'USER_INFO'
     })
  },
  clearData(key){
    dispatch({
        type:'CLEAR_INFO_DATA',
        key:key
    })
  },
  goBack() {
    dispatch(goBack())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(wrap(InvestSuccess))