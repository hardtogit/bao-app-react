/**
 * Created by Administrator on 2017/4/24.
 */
import React,{Component,PropTypes} from 'react'
import style from './index.less'
import type_hongwu from '../../assets/images/type_hongwu.png'
class Index extends Component{
    static propTypes={
         type:PropTypes.string,
        interestArry:PropTypes.array,
        go:PropTypes.func,
        goBuy:PropTypes.func
    };
    static defaultProps={
        type:'A',
        interestArry:['12.10','12.80','13.80'],
        go:()=>{},
        goBuy:()=>{}
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
    goBuy=(i)=>{
        this.props.goBuy(i)
    }
    oneDom=(i,interest,month)=>{
        const {type,go}=this.props;
        return(
            <li className={style.depositli} key={i} onClick={()=>{go(parseInt(i))}}>
                <p className={style.title}>定存宝{type}计划{month}<span className={style.hongwu}><img src={type_hongwu}/></span></p>
                <div className={style.msBox}>
                    <div className={style.interest}>
                        <p className={style.interestText}>
                            {interest}
                            <span>%</span>
                        </p>
                        <p>
                            {month}个月
                        </p>
                        <button className={style.buyBtn} ref='btn' onClick={(e)=>{this.stop(e);this.goBuy(parseInt(i))}}>
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
    render(){
        const {interestArry}=this.props,
               {month}=this.state;
        return(<ul className={style.depositUl}>
            {interestArry&&interestArry.map((item,i)=>(
                this.oneDom(i,item,month[i])
            ))}
        </ul>)
    }
}
export default Index