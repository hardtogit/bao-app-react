/**
 * Created by wangdongfang on 17/2/14.
 */
import React,{Component,PropTypes} from 'react'
import styles from './index.styl'

class Index extends Component{
    static propTypes={
        rate:PropTypes.string,
        data:PropTypes.array
    }
    static defaultProps={
        rate:'12.8',
        data:[]
    }
    render(){
        const {
            rate,
            data
        }=this.props;
        return(
            <div className={styles.header}>
                <p className={styles.lxYear}>年利率(%)</p>
                <p className={styles.lxNum}>{rate}</p>
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