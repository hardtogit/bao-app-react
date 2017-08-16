/**
 * Created by wangdongfang on 17/2/14.
 */
import React,{Component} from 'react'
import styles from './index.styl'
import PropTypes from 'prop-types'
class Index extends Component{
    static propTypes={
        rate:PropTypes.string,
        data:PropTypes.array,
        activityName:PropTypes.string,
        rateA:PropTypes.string,
        rateB:PropTypes.string
    }
    static defaultProps={
        rate:'12.8',
        data:[],
        activityName:''
    };
    render(){
        const {
            rate,
            data,
            activityName,
            rateA,
            rateB
        }=this.props;
        return(
            <div className={styles.header}>
                <p className={styles.lxYear}>年利率(%)</p>
                <p className={styles.lxNum}>
                    {(()=>{
                        let arr = activityName.split("|");
                        let flag=false;
                        if(arr.length>0 && activityName!=""){
                            arr.map((value, i)=> {
                                if(value=='扶农贷'){
                                    flag=true;
                                }
                            });
                        }
                        if(flag){
                            return <span>{rateA}{rateB=='0.00'?'':<span style={{fontSize:'36px'}}>+{rateB}</span>}</span>
                        }else{
                            return <span>{rate}</span>
                        }
                    })()}
                </p>
                <div className={styles.lxContent}>
                    {
                        data&&data.map((item,i)=>{
                            const {
                                name,
                                val
                            }=item;
                     return(
                       <span key={i}>
                         <p className={styles.textColor}>{name}</p>
                         <p>{val}</p>
                       </span>)
                        })
                    }
                </div>
            </div>
        )
    }
}
export default Index