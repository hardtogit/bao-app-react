/**
 * Created by Administrator on 2017/4/25.
 */
import React,{Component,PropTypes}from 'react' //我的定存宝
import NavBar from '../NavBar'
import styles from './index.less'
import Record from '../../pages/user/common/record/index'
import Scroll from '../scroll/index'
import explan from '../../assets/images/my-index/nojilu_03.png' //没有记录
class Index extends Component {
    static PropTypes={
           fetch:PropTypes.array,
           title:PropTypes.array,
           data:PropTypes.array,
        pending:PropTypes.array,
        end:PropTypes.array
    }
    static defaultProps={
        fetch:[()=>{},()=>{}],
        title:[' 待回款项目',' 历史资产'],
        data:[[],[]],
        pending:[true,true],
        end:[false,false]
    }
    constructor(props) {
        super(props)
        this.state = {
            flag: 0
        }
    }
    toggle=(flag)=>{
        this.setState({
            flag
        })
    }
    list=(data,fetch,pending,end)=>{
        const BodyHeight=document.body.clientHeight,
            ScrollHeight=BodyHeight-95;
        return(<Scroll height={ScrollHeight} fetch={fetch}
                       isLoading={pending} distance={5} endType={end}
                       nullDom={<div className={styles.nullBox}><img src={explan} /></div>} endload={<div></div>}>
            {
                data&&data.map((item,i)=>{
                    const {name,created,amount,status}=item;
                    return(
                        <Record
                            key = {i}
                            title={name}
                            data={created}
                            price={amount}
                            state={status}
                            moneyColor={"#aaa"}
                            statusColor={"#f70"}
                        />
                    )
                })
            }
        </Scroll>)
    }
    render() {
        const {title,data,fetch,pending,end}=this.props;
        const {flag}=this.state;
        return (
            <div className={styles.bg}>
                <div>
                    <ul className={styles.tabmenu}>
                        {title.map((item,i)=>(
                            <li key={i}><a className={flag==i&&styles.borderBlue||styles.borderWhite} onClick={()=>{this.toggle(i)}}>{item}</a></li>
                        ))}
                    </ul>
                    <div className={styles.recordsMain}>
                        <div className={styles.tablist}>
                            {title.map((item,i)=>(
                                <div className={flag==i&&styles.show||styles.hide} key={i}>
                                    {this.list(data[i],fetch[i],pending[i],end[i])}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Index