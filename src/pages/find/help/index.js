import React,{Component} from 'react'
import {connect} from 'react-redux'
import NavBar from '../../../components/NavBar'
import {goBack,push} from 'react-router-redux'
import styles from './index.css'
import xiong from '../../../assets/images/find/xiong.png'
import QuestionsAndAnswers from '../../../components/QuestionsAndAnswers'
class shoppingMall extends Component{

    render(){
        const{
            pop,
        }=this.props;
        return(
            <div className={styles.finderHome}>
                <div className={styles.finderHomeHeader}>
                    <NavBar title="常见问题" onLeft={pop} backgroundColor="#fff"
                            color="#41403e"
                    />
                </div>
                <div className={styles.findContent} >
                    <img src={xiong} className={styles.xiong}/>
                    <div className={styles.queWraper}>
                        <QuestionsAndAnswers question='积分商城的商品是正品吗？' answer='100%正品保障，可享受厂家所提供的全国联保服务，享有“包修、包换、包退”国家三包政策。'></QuestionsAndAnswers>
                        <QuestionsAndAnswers question='会员商城发货时间？' answer='兑换商品后，请尽快前往会员管理中确认您的收货地址，提交收货地址后我们会在5个工作日内安排发货，如遇节假日处理时间将自动顺延。（兑换时请仔细核对收货地址，如因地址问题无法正常收货，我们不再补发）'></QuestionsAndAnswers>
                        <QuestionsAndAnswers question='商品发货后，如何查询物流状态？' answer='兑换的商品在会员商城-兑换记录中可查看物流公司和运单编号。'></QuestionsAndAnswers>
                        <QuestionsAndAnswers question='如果商品很长时间未收到怎么办？' answer='商品在处理后5天未收到时，客户可以主动联系客服人员，客服人员将尽力协助处理。'></QuestionsAndAnswers>
                        <QuestionsAndAnswers question='商品缺货情况处理' answer='商品如遇缺货情况，我们会与客户联系协商，更换其他同等价值产品。'></QuestionsAndAnswers>
                        <QuestionsAndAnswers question='商品配送运费' answer='全场商品均可享受免费配送服务（港澳台、海外地区除外），如收货后无质量问题，概不退换。'></QuestionsAndAnswers>
                        <QuestionsAndAnswers question='商品签收验货' answer='为保障您的权益，商品务必由本人签收，签收时若存在包装破损、商品错误、商品有表面质量问题等影响签收的因素，请当面向快递员说明情况并拒收。'></QuestionsAndAnswers>
                        <QuestionsAndAnswers question='质量问题如何退换货？' answer='商品存在质量问题的客户可以主动联系客服人员，客服人员将会协助进行退换货处理。'></QuestionsAndAnswers>
                        <QuestionsAndAnswers question='兑换的商品有没有发票？' answer='兑换商品暂不提供发票，敬请谅解。'></QuestionsAndAnswers>
                        <QuestionsAndAnswers question='点币是否可以提现？' answer='点币不能提现，仅允许在平台兑换商品等方式使用。'></QuestionsAndAnswers>
                        <QuestionsAndAnswers question='点币有效期是多少？' answer='点币有效期为一年，到期前7天系统会自动提醒，为防止过期给您带来不便，请及时使用。'></QuestionsAndAnswers>
                        <QuestionsAndAnswers question='商品兑换后可否取消？' answer='兑换商品后，如果后台显示待处理，客户可以自行取消，系统自动将点币撤回到账户中。'></QuestionsAndAnswers>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({

});
const mapDispatchToProps=(dispatch,own)=>({
    pop(){
        dispatch(goBack())
    },
});
export default connect(mapStateToProps,mapDispatchToProps)(shoppingMall)