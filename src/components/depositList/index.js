/**
 * Created by Administrator on 2017/4/24.
 */
import React,{Component,PropTypes} from 'react'
import style from './index.less'
class Index extends Component{
    static propTypes={
         type:PropTypes.string,
        interestArry:PropTypes.array
    };
    static defaultProps={
        type:'A',
        interestArry:['12.10','12.80','13.80']
    };
    constructor(props){
        super(props);
        this.state={
          month:['3','6','12']
        }
    }
    oneDom=(i,interest,month)=>{
        const {type}=this.props;
        return(
            <li className={style.depositli} key={i}>
                <p className={style.title}>定存宝{type}计划{month}<span>洪武</span></p>
                <div className={style.msBox}>
                    <div className={style.interest}>
                        <p className={style.interestText}>
                            {interest}
                            <span>%</span>
                        </p>
                        <p>
                            {month}个月
                        </p>
                    </div>
                </div>
                <div className={style.msBox}>
                    <div className={style.interest}>
                        <p className={style.msText}>
                            年利率
                        </p>
                        <p className={style.msText}>
                            期限
                        </p>
                    </div>
                    <div className={style.btnBox}>
                        <button className={style.buyBtn}>
                            买入
                        </button>
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