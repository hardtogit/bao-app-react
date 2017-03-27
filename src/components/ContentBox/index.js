import React from 'react';
import styles from './index.css';
export  default class Index extends React.Component{
    render(){
        return(
            <div className={styles.box+" "+this.props.className}>
                {this.props.children}
            </div>
        )
    }
}