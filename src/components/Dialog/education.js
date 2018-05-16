import React from 'react'
import close from './close.png'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import Fetch from '../../request/fetch'
class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show:false
        }
    }
    show = () => {
        this.setState({
            show:true
        })
    };

    hide = () => {
        this.setState({
            show:false
        })
    };
    handleClick=()=>{
        let $this=this;
        Fetch('api/education/subAnswer','GET',{answers:"1-A_2-A_3-A_4-A_5-A_6-A_7-A_8-A_9-A_10-A_11-A_12-A_13-A_14-A_15-A_16-A"}).then(
            ()=>{
                $this.props.getEducationInfo();
                this.hide();
            }
        )

    };
    clearTimer = () => {

    };

    componentWillUnmount() {

    }
    render() {
        let display;
        let storeData=JSON.parse(sessionStorage.getItem('bao-store'))||{};
        let url='/user/setting/regStore';
        if(storeData.isRegister){
            url='/user/setting/cardBind'
        }
        if(this.state.show){
            display={display:'block'}
        }else{
            display={display:'none'}
        }
        return (
            <div style={display}>
                <div ref='dialog' style={{zIndex: '1050',position: 'fixed',transform: 'translate3d(-50%, -50%, 0px)',top: '50%',left: '50%',width:'86%'}}>
                    <div style={{width:'100%',position:'relative',height:'287px',backgroundColor:'#fff',padding:'12px'}}>
                        <div style={{borderBottom:'1px solid #ddd',textAlign:'center',paddingBottom:"12px"}} >风险承受能力评测</div>
                         <div style={{fontSize:"12px",lineHeight:'1.4',marginTop:"15px",letterSpacing:'1px',color:'#666'}}>
                             风险测评可以帮助出借者充分了解自身风险承受能力，若出借者跳过风险评测将被默认为“保守型”出借用户
                         </div>
                        <Link to='/user/setting/riskEvaluation'><div style={{width:"90%",textAlign:'center',height:'40px',lineHeight:'40px',margin:'15px auto 10px auto',backgroundColor:'#00a4e0',color:'#fff'}}>开始测评</div></Link>
                        <div onClick={this.handleClick} style={{width:"90%",textAlign:'center',height:'40px',lineHeight:'40px',margin:'15px auto 10px auto',backgroundColor:'#dff4fb',color:'#00a4e0'}}> 跳过测评</div>
                        <div style={{fontSize:"12px",lineHeight:'1.4',marginTop:"15px",letterSpacing:'1px',color:'#ee5b43'}}>
                            "保守型" 出借用户适投12个月以内的项目，且单笔出借最大金额上限为25万
                        </div>
                        <img onClick={this.hide} style={{position:"absolute",left:'50%',marginLeft:'-32px',width:'64px',bottom:'-80px' }} src={close} alt=""/>
                    </div>
                </div >
                <div  style={{position: 'fixed', top: '0px', right: '0px', bottom: '0px', left: '0px', zIndex: '1040', backgroundColor: 'rgba(0, 0, 0, 0.498039)'}}></div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({

});
const mapDispatchToProps=(dispatch)=>({
    getEducationInfo(){
        dispatch({
            type:'GET_EDUCATION_INFO'
        })
    }
});

export default connect(mapStateToProps,mapDispatchToProps,null,{ withRef: true })(Index)