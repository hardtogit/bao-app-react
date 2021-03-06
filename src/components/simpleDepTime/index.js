/**
 * Created by wangdongfang on 17/2/14.
 */
import React,{Component} from 'react'
import styles from './index.styl'
import start from '../../assets/images/lxStart.png'
import locking from '../../assets/images/lxSd.png'
import arrival from '../../assets/images/lxArrival.png'
import Interest from '../../assets/images/Interest.png'
import PropTypes from 'prop-types'
class Index extends Component{
    static propTypes={
          startTime:PropTypes.string,
          endTime:PropTypes.string,
          type:PropTypes.string,
          lx:PropTypes.number,
          Grade:PropTypes.string,
          repayment:PropTypes.string,
    }
    static defaultProps={
        startTime:'20170214',
        endTime:'',
        type:'A',
        lx:2,
        Grade:'A',
        repayment:'每月还息 到期还本'
    }
    constructor(props){
        super(props)
        this.state={
            lx:['抵押标','担保标']
        }
    }
    render(){
        const {
            startTime,
            endTime,
            type,
            centerTime,
            startLabel,
            repayment,
            endLabel
        }=this.props;
        return(<div className={styles.depositBox}>
            <ul className={styles.depositUl}>
                <li className={styles.depositLi}>
                    <div className={styles.tbBox}>
                        <ul>
                            <li>
                             <span className={styles.startTime}>
                                  <img src={start}/>
                             </span>
                                <span className={styles.goNext}>

                             </span>
                            </li>
                            <li>
                              <span className={styles.hx}>

                              </span>
                                <span className={styles.locking}>
                                    {type=='A'&&<img src={locking}/>||<img src={Interest}/>}
                             </span>
                                <span className={styles.hx}>

                              </span>
                            </li>
                            <li>
                             <span className={styles.goNext}>

                             </span>
                                <span className={styles.endTime}>
                                  <img src={arrival}/>
                             </span>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.tbText}>
                        <ul>
                            <li>
                                <p className={styles.tbName}>{startLabel&&startLabel||'起息日'}</p>
                                <p className={styles.timeText}>{startTime}</p>
                            </li>
                            <li>
                                <p className={styles.tbName}>
                                    {
                                        type=='A'&&'锁定期'||repayment
                                    }
                                </p>
                                <p className={styles.timeText}>{centerTime}</p>
                            </li>
                            <li>
                                <p className={styles.tbName}>{endLabel||"本息到账"}</p>
                                <p className={styles.timeText}>{endTime}</p>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>)
    }
}
export default Index