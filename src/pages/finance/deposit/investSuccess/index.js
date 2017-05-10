import React from 'react'
import { connect } from 'react-redux'
import { push, goBack } from 'react-router-redux'
import wrap from '../../../../utils/pageWrapper'
import * as actionTypes from '../../../../actions/actionTypes'
import NavBar from '../../../../components/NavBar'
import styles from './index.styl'
import TimeLine from '../../../../components/TimeLine'

class InvestSuccess extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount(){
      this.props.getUser();
  }
    componentWillUnmount(){
      if (this.props.params.type=='A'){
          this.props.clearData('DEPOSIT_BUY');
      }else {
          this.props.clearData('DEPOSITBS_BUYRESULT');
      }
    }
    listA=(data)=>{
        const {
            buy_time,
            start_date,
            maturityDate
        }=data;
        return [{
                title: '你已投资成功',
                date: buy_time
            },
            {
                title: '起息日',
                date: start_date
            },
            {
                title: '到期日',
                date: maturityDate ,
                curStep: true
            },
        ]
    }
    time=(date,type)=>{
        const time=new Date(parseInt(date)*1000);
        const year=time.getFullYear(),
              month=this.lessTen(time.getMonth()+1),
              day=this.lessTen(time.getDate()),
              hours=this.lessTen(time.getHours()),
              min=this.lessTen(time.getMinutes()),
              sec=this.lessTen(time.getSeconds());
        if (type==1){
            return year+'-'+month+'-'+day+'  '+hours+':'+min+':'+sec
        }else {
            return year+'-'+month+'-'+day
        }
    }
    lessTen=(num)=>{
        if (num<10){
            return '0'+num
        }else {
            return num
        }
    }
    listB=(data)=>{
        const{currentTime,maturityTime}=data,
         startStr=this.time(currentTime,1),
            startLx=this.time(currentTime,2),
            endStr= this.time(maturityTime,2);
        return [{
            title: '你已投资成功',
            date: startStr
        },
            {
                title: '起息日',
                date: startLx
            },
            {
                title: '到期日',
                date: endStr ,
                curStep: true
            },
        ]
    }
  render() {
        const {params:{type},depositBuyData,depositsbBuyData}=this.props;
        let data;
        let dataArry;
        if (type=='A'){
            data = depositBuyData && depositBuyData.data || {}
            dataArry=this.listA(data)
        }else {
            data = depositsbBuyData && depositsbBuyData.data.additional || {}
            dataArry=this.listB(data)
        }
    return (
      <div className={styles.root}>
        <NavBar onLeft={this.props.goBack}>投资成功</NavBar>
        <div className={styles.content}>
          <div className={styles.amount}>
            <span>投资金额</span>
            <span>¥{ data && data.amount || ''}</span>
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
  return {
    depositBuyData: state.infodata.getIn([actionTypes.DEPOSIT_BUY, 'data']),
    depositsbBuyData:state.infodata.getIn([actionTypes.DEPOSITBS_BUYRESULT, 'data'])
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