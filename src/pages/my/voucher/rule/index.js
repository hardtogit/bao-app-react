/**
 * Created by wangdongfang on 17/2/13.
 */
/**
 * Created by wangdongfang on 17/2/13.
 */
import React,{Component} from 'react'
import NavBar from '../../../../components/NavBar'
import {connect} from 'react-redux'
import {goBack} from 'react-router-redux'
import styles from '../../interestRate/rule/index.less'

class Index extends Component{
    render(){
        return(<div>
            <NavBar onLeft={this.props.pop}>
                抵用券规则
            </NavBar>
            <div className={styles.body}>
                <p>1、抵用券仅限在有效期内使用，过期则无法使用；请查看“我的账户-抵用券”， 抵用券仅限本账户使用；</p>
                <p>2、每个标只能使用一张抵用券，抵用券一旦使用将无法退回；</p>
                <p>3、抵用券仅限于用户手动投标投资抵扣，自动投标不能使用；</p>
                <p>4、抵用券不得与其他券类同时使用，仅限投资直投、定存宝时使用；</p>
                <p>5、抵用券不得兑换现金、不设找零；</p>
                <p>6、本细则最终解释权归宝点网所有；</p>
                <p>7、本活动所涉及到的参与费用和产品价格与苹果(apple.com)无关(本条仅针对苹果手机APP用户)；</p>
            </div>
        </div>)
    }
}
const datas=(state)=>({

})
const dispatchFn=(dispatch)=>({
    pop(){
        dispatch(goBack())
    }
})
export default connect(datas,dispatchFn)(Index)