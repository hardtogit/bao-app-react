import React from 'react'
import NavBar from '../../../../components/NavBar/index'
import Box from '../../../../components/ContentBox/index'
import {goBack} from 'react-router-redux'
import {connect} from 'react-redux';
import styles from './index.css'
import Item from "../../../../components/List/index";
import rightPoint from  '../../../../assets/images/arrow2.png';

let item = [
    {
        name:"微信公众号",
        info:"bao_dian_wang",
        arrow:false,
        href:""
    },
    {
        name:"客服电话",
        info:"<a href='tel:028-966180'>028-966180</a>",
        arrow:false,
        href:""
    },
    {
        name:"官方邮箱",
        info:"<a href='mailto:admin@bao.cn'>baodian@bao.cn</a>",
        arrow:false,
        href:""
    },
    {
        name:"官方网址",
        info:"<a href='www.bao.cn'>www.bao.cn</a>",
        arrow:false,
        href:""
    },
    {
        name:"官方QQ群",
        info:"3359074 / 482939397",
        arrow:false,
        href:""
    }
];
class Index extends React.Component {
    constructor(props){
        super(props),
        this.state = {
            questions : [
                {
                    id:"0",
                    title:"1.宝点网发标时间？",
                    text:"宝点网的工作日发标时间为10：00、14:00、20:00，周末和节假日发标时间为上午10:00及下午14:00。",
                    show:false
                },
                {
                    id:"1",
                    title:"2.怎么进行充值？什么时候到账？",
                    text:"充值可以通过第三方支付平台‘连连支付’进行在线充值，一般情况下即刻到账。",
                    show:false
                },
                {
                    id:"2",
                    title:"3.如何在宝点网出借？",
                    text:"首先需要注册成为宝点网的用户。<br>注册流程：点击首页或网页顶端'注册'进入注册页面：验证手机号码→设置登录密码→同意服务协议→注册成功。出借前需要完善个人信息：实名身份认证→绑定安全卡→即可出借。",
                    show:false
                },
                {
                    id:"3",
                    title:"4.在宝点网出借，我的隐私安全有保障吗？",
                    text:"宝点网承诺绝不会把客户的个人信息等隐私泄露给第三方，我们采取国际标准的SSL安全加密技术保障数据传输安全，以保证平台客户信息安全。",
                    show:false
                }
            ]
        }
    }
    changeShow=(id)=>{
        this.state.questions[id].show = !this.state.questions[id].show;
        this.setState({
            questions:this.state.questions
        })
    }
    render() {
        return (
            <div className={styles.bg}>
                <NavBar  onLeft={this.props.pop}>常见问题</NavBar>
                <Box>
                    <div className={styles.mid}>
                        {
                            this.state.questions.map((item)=>{
                                return (
                                    <div key={item.id} className={styles.q_item}>
                                        <p onClick={()=>this.changeShow(item.id)}  className={styles.q_title} key={item.id}>
                                            {item.title}
                                            <img className={!item.show?"":styles.to_down} src={rightPoint} alt=""/>
                                        </p>
                                        <p className={item.show?styles.q_text_show:styles.q_text_hide} dangerouslySetInnerHTML={{__html:item.text}}>
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={styles.mid}>
                        <Item item={item}/>
                    </div>
                </Box>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    pop() {
        dispatch(goBack())
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Index)
