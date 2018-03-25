/**
 * Created by xiangguo .
 * time:2018/3/20 0020.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from 'react'
import styles from './index.less'
import NavBar from '../../../../components/NavBar'
import PageLoading from '../../../../components/pageLoading'
import {connect} from 'react-redux'
import {goBack} from 'react-router-redux'
class Index extends Component{
    constructor(props) {//构造器
        super(props)
        this.state = {
            isOpen: false,
            width:0,
            height:0,
            load:false
        }
    }
    static defaultProps = {
        styles:{
            hide:{display:'none'},
            show:{display:'block'}
        }
    }
    componentWillMount(){
        this.setState({
          height:document.body.clientHeight-50,
          width:document.body.clientWidth
        })
    }
    componentDidMount(){
        this.refs.iframe.onload=()=> {
            this.setState({
                load:true
            })
        }
    }
    componentWillReceiveProps(nextProps){
        //组件接收到新的props调用
    }
    componentWillUnmount(){
        //组件将要被移除时调用
    }

    render(){
        const{
            pop,
            location:{
                query:{
                    url
                }
            }
        }=this.props;
        const{
            width,
            height,
            load
        } =this.state;
        return(
            <div className={styles.container}>
                <NavBar onLeft={pop}>
                    银行存管
                </NavBar>
                {load&&<div></div>
                    ||<PageLoading></PageLoading>
                }
                <iframe ref="iframe" width={width} style={load&&this.props.styles.show||this.props.styles.hide}  height={height} className={styles.iframe} src={url} frameBorder="no" ></iframe>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
});
const mapDispatchToProps=(dispatch,own)=>({
    pop(){
        dispatch(goBack())
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Index)