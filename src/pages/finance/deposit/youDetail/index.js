/**
 * Created by xiangguo .
 * time:2017/7/23 0023.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from 'react'
import styles from './index.less'
import NavBar from '../../../../components/NavBar'
import {connect} from 'react-redux'
import {goBack,push} from 'react-router-redux'
import PageLoading from '../../../../components/pageLoading'
class Item extends Component{

    render(){
        return <div className={styles.item}>
            <div className={styles.left}>
                {this.props.name}
            </div>
            <div className={styles.right} style={this.props.style} onClick={this.props.onClick}>
                {this.props.value}
            </div>
        </div>
    }
}
class Index extends Component{
    componentDidMount(){
        this.props.getYouDetail(this.props.params.id)
    }
    loadEndDom=(detailData,push)=>{
        return(
                <div className={styles.container}>
                    <div className={styles.headPanel}>
                        <div className={styles.tip}>
                            温馨提示：借贷有风险 出借需谨慎
                        </div>
                        <div className={styles.introduce}>
                            <h3 className={styles.title}>{detailData.data[0].title_name}</h3>
                            <p className={styles.content}>
                                {detailData.data[0].detail_info}
                            </p>
                        </div>
                    </div>
                    <div className={styles.items}>
                        {detailData.data.map((item,i)=>{
                            if(i!=0){
                                return <Item name={item.title_name} value={item.detail_info}></Item>
                            }

                        })}

                        <Item name="服务协议" value="点击查看" style={{color:'#00a6e2'}} onClick={()=>{push('/serviceContract/123/0?product=1')}}></Item>
                    </div>

                </div>
            )

    }
    render(){
        const{
            pop,
            push,
            detailData
            }=this.props;
        const{
            name,
            month
            }=this.props.params;
        let Dom;
        if(detailData){
            Dom=this.loadEndDom(detailData,push)
        }else{
            Dom=<PageLoading></PageLoading>
        }
        return(
            <div className={styles.root}>
                <NavBar onLeft={pop}>
                    产品详情
                </NavBar>
                {Dom}
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    detailData:state.infodata.getIn(['GET_YOU_DETAIL','data'])
})
const mapDispatchToProps=(dispatch,own)=>({
    pop(){
         dispatch(goBack())
    },
    push(url){
        dispatch(push(url))
    },
    getYouDetail(id){
        dispatch({
            type:'GET_YOU_DETAIL',
            params:[id]
        })
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Index)