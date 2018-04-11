/**
 * Created by xiangguo .
 * time:2017/7/23 0023.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from 'react'
import styles from './index.less'
import NavBar from '../../../../components/NavBar'
import {connect} from 'react-redux'
import {goBack} from 'react-router-redux'
import classNames from 'classnames'
import PageLoading from '../../../../components/pageLoading'
class Index extends Component{
    constructor(props) {//构造器
        super(props)
        this.state = {
            isOpen: false
        }
    }
    static defaultProps = {//设置初始props
    }
    componentWillMount(){
      const {
          params:{
              id
          },
          getBorrowInfo
      }=this.props;
        getBorrowInfo(id)
    }

    loadEnd=()=>{
        let{
            name,
            has_borrow,
            rate,
            month,
            value_start_date,
            value_end_date,
            type,
            total,
            repayment_type
        }=this.props.data.data;

        switch (parseInt(type)){
            case 1:
                type= "信用";
                break;
            case 5:
                type= "抵押"
                break

        }
        switch (parseInt(repayment_type)){
            case 1:
                repayment_type= "按天到期";
                break;
            case 2:
                repayment_type= "等额本息";
                break;
            case 3:
                repayment_type= "按季分期";
                break;
            case 4:
                repayment_type= "每月还息到期还本";
                break;
            case 5:
                repayment_type= "到期还本付息"
                break

        }




        return(
            <div >
                <div className={styles.items}>
                    <div className={styles.title}>
                        产品信息
                    </div>
                    <div className={styles.item}>
                        <div className={styles.left}>产品名称</div>
                        <div className={styles.right}>{name}</div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.left}>借款总额</div>
                        <div className={styles.right}>{has_borrow}</div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.left}>预期年化收益率</div>
                        <div className={styles.right}>{rate}</div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.left}>产品期限</div>
                        <div className={styles.right}>{month}月</div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.left}>产品起息日</div>
                        <div className={styles.right}>{value_start_date}</div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.left}>产品到息日</div>
                        <div className={styles.right}>{value_end_date}</div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.left}>产品类型</div>
                        <div className={styles.right}>{type}</div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.left}>转让价值</div>
                        <div className={styles.right}>{total}</div>
                    </div>
                </div>
                <div className={classNames(styles.item,styles.backWay)}>
                    <div className={styles.left}>还款方式</div>
                    <div className={styles.right}>{repayment_type}</div>
                </div>
                <div className={classNames(styles.item,styles.backWay)}>
                    <div className={styles.left}>产品合同</div>
                    <div className={styles.right}> <span className={styles.arrow}></span></div>
                </div>
            </div>
        )
    }

    render(){
        const{
            pop,
            data
            }=this.props;
        let Dom;
        if(data){
            Dom=this.loadEnd();
        }else{
            Dom=<PageLoading></PageLoading>
        }
        return(
           <div className={styles.container}>
              <NavBar onLeft={pop}>
                  产品信息
              </NavBar>
               {Dom}
           </div>
        )
    }
}
const mapStateToProps=(state)=>({
    data:state.infodata.getIn(['GATHER_BID_DETAIL','data'])
});
const mapDispatchToProps=(dispatch,own)=>({
    pop(){
         dispatch(goBack())
    },
    getBorrowInfo(id){
        dispatch({
            type:"GATHER_BID_DETAIL",
            params:[id]
        })
    },
});
export default connect(mapStateToProps,mapDispatchToProps)(Index)