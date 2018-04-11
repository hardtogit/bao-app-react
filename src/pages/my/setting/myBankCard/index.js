/**
 * Created by xiangguo .
 * time:2017/7/23 0023.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from 'react'
import styles from './index.less'
import NavBar from '../../../../components/NavBar'
import Loading from '../../../../components/pageLoading'
import {connect} from 'react-redux'
import {goBack,push} from 'react-router-redux'
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
        this.props.getMyCard();
    }
    addCard=()=>{
       this.props.push('/user/setting/authorization?from=cardList')
    }

    goDetail=(data,i)=>{
        HTMLElement.prototype.__defineGetter__("currentStyle", function () {
            return this.ownerDocument.defaultView.getComputedStyle(this, null);
        });
        var getElementByAttr=(tag,attr,value)=>{
            var aElements=document.getElementsByTagName(tag);
            var aEle=[];
            for(var i=0;i<aElements.length;i++) {
                if(aElements[i].getAttribute(attr)==value)
                    aEle.push( aElements[i] );
            }
            return aEle;
        }

        var dom =getElementByAttr('div','data-color',i);
        for(var i=0;i<dom.length;i++){
            var color = dom[i].currentStyle.backgroundColor;
        }
        this.props.storeCardInfo(data);
        this.props.push('/user/setting/bankCardManage/'+color);
    };
    render(){
        let Dom;
        const{
            pop,
            data,
            }=this.props;
        if(data){
            Dom=<div>
                <div className={styles.item_content}>
                {data.data.map((value,i)=>{
                    let num=value.bankCard.substr(value.bankCard.length-4,4)
                 return<div className={styles.item} key={i}   onClick={()=>{this.goDetail(value,i)}} data-color={i}>
                         <div className={styles.title}><div className={styles.left}><img className={styles.img} src={value.bankIcon} alt=""/></div><div className={styles.right}>{value.bankName}</div></div>
                         <div className={styles.num}>****&nbsp;&nbsp;****&nbsp;&nbsp;****&nbsp;&nbsp;{num}</div>
                         <img className={styles.bg} src={value.bankImg} alt=""/>
                 </div>
                 })}
                    {/*<div className={styles.btn} onClick={this.addCard}>*/}
                        {/*<span className={styles.add}>+</span> <span className={styles.text}>添加银行卡</span>*/}
                    {/*</div>*/}
                </div>
            </div>
        }else{
            Dom=<Loading></Loading>
        }
        return(
           <div className={styles.container}>
              <NavBar onLeft={pop}>
                  银行卡
              </NavBar>
               {Dom}
           </div>
        )
    }
}
const mapStateToProps=(state)=>({
    data:state.infodata.getIn(['GET_MY_CARD_LIST','data'])
});
const mapDispatchToProps=(dispatch,own)=>({
    pop(){
         dispatch(goBack())
    },
    push(url){
        dispatch(push(url))
    },
    getMyCard(){
         dispatch({
             type:'GET_MY_CARD_LIST'
         })
    },
    storeCardInfo(data){
       dispatch({
           type:'STORE_CARD_INFO',
           data:data
       })
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Index)