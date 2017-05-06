/**
 * Created by Administrator on 2017/4/24.
 */
import React,{Component} from 'react'
import style from './index.less'
import type_hongwu from '../../assets/images/type_hongwu.png'
import PropTypes from 'prop-types'
import danbao from '../../assets/images/type_diya.png'
class Index extends Component{
    static propTypes={
         type:PropTypes.string,
        interestArry:PropTypes.array,
        go:PropTypes.func,
        goBuy:PropTypes.func,
        data:PropTypes.oneOfType([PropTypes.array,PropTypes.object])
    };
    static defaultProps={
        type:'A',
        interestArry:['12.10','12.80','13.80'],
        go:()=>{},
        goBuy:()=>{},
        data:[]
    };
    constructor(props){
        super(props);
        this.state={
          month:['3','6','12']
        }
    }
    stop=(e)=>{
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
    }
    go=(i,id,soldOut,isBuy)=>{
       this.props.go(i,id,soldOut,isBuy);
    }
    goBuy=(i,id,soldOut,isBuy)=>{
        this.props.goBuy(i,id,soldOut,isBuy)
    }
    oneDomA=(i,interest)=>{
        const {month,rate,id}=interest;
        const {type}=this.props;
        return(
            <li className={style.depositli} key={i} onClick={()=>{this.go(i,id)}}>
                <p className={style.title}>定存宝{type}计划{month}<span className={style.hongwu}><img src={danbao}/></span>
                    </p>
                <div className={style.msBox}>
                    <div className={style.interest}>
                        <p className={style.interestText}>
                            {rate}
                            <span>%</span>
                        </p>
                        <p>
                            {month}个月
                        </p>
                        <button className={style.buyBtn} ref='btn' onClick={(e)=>{this.stop(e);this.goBuy(parseInt(i),id)}}>
                            买入
                        </button>
                    </div>
                </div>
                <div className={style.msBox} style={{paddingTop:'0px'}}>
                    <div className={style.interest} style={{width:'100%'}}>
                        <p className={style.msText} style={{width:'37%'}}>
                            年利率
                        </p>
                        <p className={style.msText}>
                            {type=='A'&&'期限'||'每月还息 到期还本'}
                        </p>
                    </div>
                </div>
            </li>
        )
    }
    oneDomB=(i,item,isFriday)=>{
       const {title,rate,month,id,soldOut,isBuy}=item;
       let text='买入';
       if (isBuy&&soldOut==0){
           text='已售完'
       }else if (!isBuy){
           text='未开始'
       }
        const {type}=this.props;
        return(
            <li className={style.depositli} key={i} onClick={()=>{this.go(i,id,soldOut,isBuy)}}>
                <p className={style.title}>{title}{month}<span className={style.hongwu}><img src={danbao}/></span>
                    {isFriday&&<span className={style.hongwu} style={{marginRight:'10px'}}><img src={type_hongwu}/></span>||null}</p>
                <div className={style.msBox}>
                    <div className={style.interest}>
                        <p className={style.interestText}>
                            {rate}
                            <span>%</span>
                        </p>
                        <p>
                            {month}个月
                        </p>
                        {text=='买入'&&<button className={style.buyBtn} ref='btn' onClick={(e)=>{this.stop(e);this.goBuy(parseInt(i),id,soldOut,isBuy)}}>
                            {text}
                        </button>||<span className={style.buyText}>{text}</span>}
                    </div>
                </div>
                <div className={style.msBox} style={{paddingTop:'0px'}}>
                    <div className={style.interest} style={{width:'100%'}}>
                        <p className={style.msText} style={{width:'37%'}}>
                            年利率
                        </p>
                        <p className={style.msText}>
                            {type=='A'&&'期限'||'每月还息 到期还本'}
                        </p>
                    </div>
                </div>
            </li>
        )
    }
    render(){
        const {type,data}=this.props;
        return(<ul className={style.depositUl}>
            {
                type=='A'&&data.map((item,i)=>(
                    this.oneDomA(i,item)
                ))|| data.list.map((item,i)=>(
                    this.oneDomB(i,item,data.isFriday)
                ))
            }
        </ul>)
    }
}
export default Index