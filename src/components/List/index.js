/**
 * Created by Administrator on 2016/10/17.
 */
import React from 'react';
import style from './index.css';
import {Link} from "react-router";
import rightPoint from  '../../assets/images/arrow2.png';
export default class List extends React.Component {
    render() {
        return (
            <div>
                <div className={style.item_bg}>
                    {
                        this.props.item.map(function (child) {
                            return (
                                child.href &&
                                    <div className={style.item} key={child.name}>
                                        <Link to={child.href} key={child.name} >
                                        <span className={style.item_name}>{child.name}</span>
                                        <div className={style.item_info}>
                                            <span dangerouslySetInnerHTML={{__html:child.info}}></span>
                                            <img className={child.arrow?style.item_go_next:style.item_hide} src={rightPoint} alt=""/>
                                        </div>
                                        </Link>
                                    </div>
                                ||
                                <div key={child.name} className={style.item}>
                                    <span className={style.item_name}>{child.name}</span>
                                    <div className={style.item_info}>
                                        <span dangerouslySetInnerHTML={{__html:child.info}}></span>
                                        <img className={child.arrow?style.item_go_next:style.item_hide} src={rightPoint} alt=""/>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}