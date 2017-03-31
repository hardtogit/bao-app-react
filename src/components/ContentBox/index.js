import React from 'react';
import styles from './index.css';
export  default class Index extends React.Component{
    render(){
        const {id}=this.props;
        return(
            <div className={styles.box+" "+this.props.className} id={id}>
                {this.props.children}
            </div>
        )
    }
}