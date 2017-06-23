/**
 * Created by xiangguo .
 * time:2017/6/23 0023.
 * email:413401168@qq.com.
 * use:auto...
 */
import React , {Component} from 'react';
import style from './index.css';
import classNames from 'classnames';
import PropTypes from 'prop-types'
class Index extends Component{
    constructor(props){
        super(props);
        this.state = {
            open:this.props.status
        }
    }
    static defaultProps = {
        title:'面板标题',
        status:false,
        styles:{
            show:{
                display:'block'
            },
            hidden:{
                display:'none'
            }
        }
    };
    static propTypes = {
        title:PropTypes.string,
        status:PropTypes.bool//选中了是否还能切换
    };
    switchPanel=()=>{
        let $this=this
       if($this.state.open){
            $this.setState({
                open:false
            })
          }else{
           $this.setState({
               open:true
           })
       }
    };
    render(){
        return(
            <div className={style.panel}>
            <div className={style.header} onClick={this.switchPanel}>{this.props.title} <span className={classNames(style.arrows,this.state.open&&style.down||'')}></span></div>
            <div className={style.body}  style={this.state.open?this.props.styles.show:this.props.styles.hidden}>
                {this.props.children}
            </div>
            </div>
        )
    }
}
export  default Index