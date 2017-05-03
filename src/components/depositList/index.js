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
    go=(i,id)=>{
       this.props.go(i,id);
    }
    goBuy=(i,id)=>{
        this.props.goBuy(i,id)
    }
    oneDomA=(i,interest)=>{
        const {month,rate,id}=interest;
        const {type}=this.props;
        return(
            <li className={style.depositli} key={i} onClick={()=>{this.go(i,id)}}>
                <p className={style.title}>定存宝{type}计划{month}<span className={style.hongwu}><img src={type_hongwu}/></span></p>
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
    oneDomB=(i,item,isFriday,isBuy)=>{
       const {title,rate,month,id}=item;
        const {type}=this.props;
        return(
            <li className={style.depositli} key={i} onClick={()=>{this.go(i,id)}}>
                <p className={style.title}>{title}{month}<span className={style.hongwu}><img src={isFriday&&type_hongwu||danbao}/></span></p>
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
                            {isBuy&&'买入'||'售罄'}
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
    render(){
        const {type,data}=this.props;
        return(<ul className={style.depositUl}>
            {
                type=='A'&&data.map((item,i)=>(
                    this.oneDomA(i,item)
                ))|| data.list.map((item,i)=>(
                    this.oneDomB(i,item,data.isFriday,data.isBuy)
                ))
            }
        </ul>)
    }
}
export default Index