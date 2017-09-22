/**
 * Created by xiangguo .
 * time:2017/7/23 0023.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from 'react'
import styles from './index.less'
import NavBar from '../../../components/NavBar'
import Loading from '../../../components/pageLoading'
import choice from '../../../assets/images/choice.png'
import {connect} from 'react-redux'
import {goBack,push} from 'react-router-redux'
class Index extends Component{
    constructor(props) {//构造器
        super(props)
        this.state = {
            isOpen: false,
            index:0,
        }
    }
    static defaultProps = {//设置初始props
    }
    componentWillMount(){
      this.props.getMyBankCards()
    }
    componentDidMount(){
     //组件渲染完成时调用
    }
    componentWillReceiveProps(nextProps){
     //组件接收到新的props调用
    }
    componentWillUnmount(){
     //组件将要被移除时调用
    }
    handClick=(card)=>{
        this.props.choiceCard(card)
        this.props.pop()

    }

    render(){
        let Dom;
        let{
            pop,
            cards,
            nowCard
            }=this.props
        if(!nowCard&&cards){
            nowCard=cards.data[0]
        }
        if(cards){
            Dom=<div className={styles.cards_panel}>
                { cards.data.map((value,i)=>{
                    return <div key={i} className={styles.item} onClick={()=>{this.handClick(value)}}>
                            <div className={styles.left}>
                                <img src={value.bankIcon} alt=""/>
                            </div>
                            <div className={styles.center}>
                                <div className={styles.top}>
                                    {value.bankName}
                                </div>
                                <div className={styles.bottom}>
                                    尾号{value.bankCard.substr(value.bankCard.length-4,4)}储蓄卡
                                </div>
                            </div>
                            <div className={styles.right}>
                                {value.bankCard==nowCard.bankCard&&<div><img src={choice} alt=""/></div>}
                            </div>
                        </div>

                })
                }
            </div>
        }else{
            Dom=<Loading></Loading>
        }
        return(
           <div className={styles.container}>
              <NavBar onLeft={pop} onRight={()=>{this.props.push('/user/setting/cardBind')}} rightNode={<div style={{fontSize:'32px',position:'relative',left:'12px',top:'-3px'}}>+</div>}>
                  选择银行卡
              </NavBar>
               {Dom}
           </div>
        )
    }
}
const mapStateToProps=(state)=>({
    cards:state.infodata.getIn(['GET_MY_CARD_LIST','data']),
    nowCard:state.regStore.getIn(['CHOICE_CARD','cardInfo'])
});
const mapDispatchToProps=(dispatch,own)=>({
    pop(){
         dispatch(goBack())
    },
    push(url){
         dispatch(push(url))
    },
    getMyBankCards(){
        dispatch({
            type:'GET_MY_CARD_LIST',
        })
    },
    choiceCard(data){ //保存选择的银行卡信息
        dispatch({
            type:'CHOICE_CARD',
            data:data
        })
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Index)