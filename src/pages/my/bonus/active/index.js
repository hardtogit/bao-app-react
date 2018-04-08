/**
 * Created by xiangguo .
 * time:2017/7/23 0023.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from 'react'
import styles from './index.less'
import classNames from "classnames"
import Scorll from "../../../../components/scroll"
import {connect} from 'react-redux'
import {goBack,push} from 'react-router-redux'
import line from '../../../../assets/images/account/line.png'
import hasSave from "../../../../assets/images/account/hasSaved.png"
import overDue from "../../../../assets/images/account/overDue.png"
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
        const {
            flag
        }=this.state;
        const{
            data,
            type,
            push
        }=this.props
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
                            <li>{data.overdue}</li>
                        </ul>
                    </div>
                    <div className={styles.right}>
                        {(()=>{
                            switch (type){
                                case 0:
                                    return <div className={styles.btn} onClick={()=>{push("/home/productIndex")}}>去投资</div>
                                     break;
                                case 1:
                                    return <img src={hasSave} alt=""/>
                                    break;
                                case 2:
                                    return <img src={overDue} alt=""/>
                                    break;
                            }
                        })() }
                    </div>
                </div>
                <div className={styles.line}>
                    <img className={styles.img} src={line} alt=""/>
                    <div className={styles.rule}>使用规则 <div onClick={this.handleClick} className={styles.pull_right}><span className={classNames(flag&&styles.arrow||styles.arrow_up)}></span></div></div>
                </div>
                <div className={classNames(styles.rule,flag&&styles.hidden||"")}>
                    <ul className={styles.rule_ul}>
                        <li><span className={styles.point}></span>金额限制：投资金额≥{data.rules.amountlimitation}</li>
                        <li><span className={styles.point}></span>使用产品：{
                            (()=>{
                                if(data.rules.product.length!=0){
                                    let  str="";
                                    data.rules.product.map((item,i)=>{
                                        let _str;
                                        // 1为 定存宝B  2 聚点+  3存管直投  4 平直投
                                        switch (parseInt(item)) {
                                            case 1:
                                                _str = "定存宝B";
                                                break;
                                            case 2:
                                                _str = "聚点+";
                                                break;
                                            case 3:
                                                _str = "存管直投";
                                                break;
                                            case 4:
                                                _str = "托管直投";
                                                break;
                                        }

                                        if(i!=data.rules.product.length-1){
                                            str+=_str+"、"
                                        }else{
                                            str+=_str
                                        }
                                    })
                                    return str
                                }
                            })()
                        }</li>
                        <li><span className={styles.point}></span>使用期限：≥{data.rules.cycle}个月</li>
                        <li><span className={styles.point}></span>有效期：{data.rules.vld}天</li>
                        <li><span className={styles.point}></span>备注：{data.remarks}</li>
                    </ul>
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
        this.props.clearData(0);
        this.props.clearData(1);
        this.props.clearData(2);
    }
    changeTab=(index)=>{
        this.props.clearData(this.state.index);
        this.refs.scroll.setState({
            init:true,
            first:false
        });
        this.setState({
            index:index
        });
      }

    render(){
        const {
            index
        }=this.state;
        const {
            getList,
            listData,
            pending,
            end,
            push
        }=this.props
        const Height=document.body.clientHeight-142;
        const nlistData=listData('ACTIVE_BONUS_LIST'+index),
              npending=pending('ACTIVE_BONUS_LIST'+index),
              nend=end('ACTIVE_BONUS_LIST'+index);
        return(
           <div className={styles.container}>
               <div className={styles.tabs}>
                   <div className={classNames(styles.tab,index==0&&styles.active||"")}><div className={styles.text} onClick={()=>{this.changeTab(0)}}>未使用</div></div>
                   <div className={classNames(styles.tab,index==1&&styles.active||"")}><div className={styles.text} onClick={()=>{this.changeTab(1)}}>已使用</div></div>
                   <div className={classNames(styles.tab,index==2&&styles.active||"")}><div className={styles.text} onClick={()=>{this.changeTab(2)}}>已过期</div></div>
               </div>
               <Scorll ref='scroll' height={Height} fetch={()=>{getList("ACTIVE_BONUS_LIST"+index,{type:0,tabType:index})}} isLoading={npending} distance={20} endType={nend} >
                   {
                       nlistData&&nlistData.map((item,i)=>{
                             return(
                                 <PackItem type={index} push={push} key={i} data={item}></PackItem>
                             )

                       })
                   }

               </Scorll>
           </div>
        )
    }
}
const mapStateToProps=(state)=>({
    listData(key){
        return state.listdata.getIn([key,'data'])
    },
    pending(key){
        return state.listdata.getIn([key,'pending'])
    },
    end(key){
        return state.listdata.getIn([key,'pageEnd'])
    },
});
const mapDispatchToProps=(dispatch,own)=>({
    pop(){
         dispatch(goBack())
    },
    push(url){
         dispatch(push(url))
    },
    getList(key,data){
        dispatch({
            type:"ACTIVE_BONUS_LIST",
            OtherKey:key,
            params:[data]
        })
    },
    clearData(index){
        dispatch({
            type:'CLEAR_DATA',
            key:'ACTIVE_BONUS_LIST'+index
        })
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Index)