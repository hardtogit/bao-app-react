/**
 * Created by xiangguo .
 * time:2018/4/2 0002.
 * email:413401168@qq.com.
 * use:auto...
 */
import React, {Component} from "react"
import {goBack, push} from "react-router-redux"
import {connect} from "react-redux"
import Store from "../../../../components/Dialog/store"
import Alert from '../../../../components/Dialog/alert.js'
import Scroll from "../../../../components/scroll"
import type_diya from '../../../../assets/images/type_diya.png'
import type_xinyong from '../../../../assets/images/type_xinyong.png'
import {getAuthDetail} from '../../../../components/Permission'
import nozhaiquan from '../../../../assets/images/nozhaiquan.png'
import styles from "./index.less"

class WisdomCell extends React.Component {
    toBuy = (event,id) => {
        event.stopPropagation()
        switch (getAuthDetail()) {
            case 1:
                this.props.push(`/wisdomBuy/${id}`);
                break;
            case 2:
                this.props.push('/user/setting/authorization');
                break;
            case 3:
                this.refs.store.show();
                break;
            default:
                break
        }
    };
    goDetail=()=>{
        const {push,alert,data:{status,id}}=this.props;
        switch (parseInt(status)){
            case 0:
                push(`/wisdomMain/${id}`)
                break;
            case 1:
                alert.show({
                    content:'该标已完结',
                    okText:'知道了'
                });
                break;
            case 2:
                alert.show({
                    content:'投标时间已过',
                    okText:'知道了'
                });
        }
    };
    shouldComponentUpdate(nextProps){
        if(_.isEqual(this.props, nextProps)){
            return false
        }else{
            return true
        }
    }
    render() {
        const {
            title,//名称
            id,//id
            type,//标类型
            rate,//利率
            money,//金额
            month,//期限
        } = this.props.data;
        return (
            <div  className={styles.cell} style={{ marginBottom: '8px'}} onClick={this.goDetail}>
                <Store ref="store"></Store>
                <div >
                    <div className={styles.cellHead}>
                        <div>
                            <p>{title}</p>
                        </div>
                        <div>
                            {
                                (() => {
                                    switch (type) {
                                        case 1:
                                            return <img src={type_xinyong} alt=""/>
                                            break;
                                        case 5:
                                            return <img src={type_diya} alt=""/>
                                            break;
                                        default:
                                            return <img src={type_diya} alt=""/>
                                    }

                                })()
                            }
                        </div>
                    </div>
                </div>
                <div className={styles.left}>
                    <div className={styles.farword}>
                        <div className={styles.cellBody}>
                            <p>{rate}<span>%</span></p>
                            <p>{month.month}个月</p>
                            <p>{money}</p>

                        </div>
                        <div className={styles.cellFoot}>
                            <p>预期年化利率</p>
                            <p>月</p>
                            <p>转让金额</p>
                        </div>
                    </div>
                    <div className={styles.buyBtn}>
                        <div className={styles.canbuy} onClick={(event) => this.toBuy(event,id)}>
                            <p>抢购</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {
            height,
            getList,
            listData,
            pending,
            pageEnd,
            push
        } = this.props;
        return (<div>
            <Scroll fetch={getList} height={height}
                        isLoading={pending} distance={5} endType={pageEnd}
                        nullDom={<div className={styles.nullBox}><img src={nozhaiquan}/></div>} endload={<div></div>}
             >
             {
                listData && listData.map((item, i) => (<WisdomCell alert={this.refs.alert} push={push} data={item} key={i}></WisdomCell>))

             }
            </Scroll>
            <Alert ref="alert"></Alert>
        </div>)
    }
}

const mapStateToProps = (state) => {
    let ListHeight =document.body.clientHeight - 141
    return ({
        height: ListHeight,
        listData: state.listdata.getIn(["WISDOM_LIST", 'data']),
        pending: state.listdata.getIn(["WISDOM_LIST", 'pending']),
        pageEnd: state.listdata.getIn(["WISDOM_LIST", 'pageEnd']),
    })

};
const mapDispatchToProps = (dispatch) => ({
    getList() {
        dispatch({
            type: "WISDOM_LIST"
        })
    },
    push(url){
        dispatch(push(url))
    }


});


export default connect(mapStateToProps, mapDispatchToProps)(Index)