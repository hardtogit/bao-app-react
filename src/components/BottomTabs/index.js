/**
 * Created by Administrator on 2016/11/17.
 * 底部tab
 */
import React from 'react';
import {Link,onlyActiveOnIndex} from 'react-router';
import style from "./index.css";
export default class Index extends React.Component{
    render(){
        return(
            <div className={style.bottom_tab_bg}>
                {this.props.children}
                <div className={style.item}>
                    <Link to="/home" activeClassName={style.current} className={style.col+" "+style.t1}>
                        <p>理财</p>
                    </Link>
                    <Link to="/product" activeClassName={style.current} className={style.col+" "+style.t2}>
                        <p>产品</p>
                    </Link>
                    <Link to="/find" activeClassName={style.current} className={style.col+" "+style.t3}>
                        <p>发现</p>
                    </Link>
                    <Link to={`/user`} activeClassName={style.current} className={style.col+" "+style.t4}>
                        <p>我的</p>
                    </Link>
                </div>
            </div>
        )
    }
}