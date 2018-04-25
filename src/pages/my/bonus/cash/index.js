/**
 * Created by xiangguo .
 * time:2017/7/23 0023.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from 'react'
import styles from './index.less'
import classNames from "classnames"
import hasSave from "../../../../assets/images/account/hasSaved.png"
import Scorll from "../../../../components/scroll"
import {connect} from 'react-redux'
import {goBack} from 'react-router-redux'
import line from '../../../../assets/images/account/line.png'
class PackItem extends Component{
    constructor(props){
        super(props)
        this.state={
            flag:true
        }
    }
    handleClick=()=>{
        this.setState({
            flag:!this.state.flag
        })
    }
    componentDidMount(){
     }
    render(){
        const{
            data
        }=this.props;
        return(
            <div className={styles.box}>
                <div className={styles.up}>
                    <div className={styles.left}>
                        <span className={styles.chart}>￥</span><span className={styles.num}>{data.amount}</span>
                    </div>
                    <div className={styles.center}>
                        <ul>
                            <li>{data.name}</li>
                            <li>{data.status}</li>
                            <li>{data.remarks}</li>
                        </ul>
                    </div>
                    <div className={styles.right}>
                        <img src={hasSave} alt=""/>
                    </div>
                </div>
                <div className={styles.line}>
                    <img className={styles.img} src={line} alt=""/>
                    <div className={styles.rule}>已存入<div className={styles.pull_right}><li>{data.date}</li> </div></div>
                </div>
            </div>
        )
    }

}

class Index extends Component{
    constructor(props) {//构造器
        super(props)
        this.state = {
            isOpen: false,
            index:0
        };
    }
    static defaultProps = {//设置初始props
    };

    componentWillUnmount(){
        this.props.clearData();

    }
    render(){
        const {
            index
        }=this.state;
        const {
            getList,
            listData,
            pending,
            end
        }=this.props
        const Height=document.body.clientHeight-100;
        return(
           <div className={styles.container}>
               <Scorll ref='scroll' height={Height} fetch={()=>{getList({type:1,tabType:index})}} isLoading={pending} distance={20} endType={end} >
                   {
                       listData&&listData.map((item,i)=>{
                             return(
                                 <PackItem key={i} data={item}>sss </PackItem>
                             )

                       })
                   }

               </Scorll>
           </div>
        )
    }
}
const mapStateToProps=(state)=>({
    listData:state.listdata.getIn(['ACTIVE_BONUS_LIST','data']),
    pending:state.listdata.getIn(['ACTIVE_BONUS_LIST','pending']),
    end:state.listdata.getIn(['ACTIVE_BONUS_LIST','pageEnd'])
});
const mapDispatchToProps=(dispatch,own)=>({
    pop(){
         dispatch(goBack())
    },
    getList(data){
        dispatch({
            type:"ACTIVE_BONUS_LIST",
            params:[data]
        })
    },
    clearData(){
        dispatch({
            type:'CLEAR_DATA',
            key:'ACTIVE_BONUS_LIST'
        })
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Index)