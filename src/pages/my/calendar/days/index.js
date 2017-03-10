import React from 'react'
import styles from './index.css'
import cs from 'classnames';
export default class Index extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.days.map((week,index)=>(
                        <div className={styles.item} key={index}>
                            {
                                week.map((item,key)=>(
                                    <div key={key} className={styles.col}>
                                        <p className={cs(styles.day,item.now?styles.current:"")}>{item.day}</p>
                                        <p className={styles.money}>{item.money}</p>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        )
    }
}
