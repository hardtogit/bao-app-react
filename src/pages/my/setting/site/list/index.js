import React from 'react' //收货地址首页
import { connect } from 'react-redux'
import {push, goBack} from 'react-router-redux'
import NavBar from '../../../../../components/NavBar/index';
import Box from '../../../../../components/ContentBox/index';
import CheckBox from '../../../../../components/CheckBoxBlue/index';
import Alert from '../../../../../components/Dialog/alert';
import Confirm from '../../../../../components/Dialog/confirm';
import {Link} from "react-router";
import style from './index.css'
import classnames from 'classnames';
import nullIcon from '../../../../../assets/images/record.png';
let delId = 0;
class Index extends React.Component {
	constructor(props) {
		super(props)
        this.state={
		    flag:true
        }
	}
	componentDidMount() {
        this.props.getAddress();
    }
	componentWillUnmount() {}
    componentWillReceiveProps=({set,del})=>{
	    const {
            flag
        }=this.state;
        if(del.status&&del.id==delId){
            delId = 0;
           this.props.getAddress();
        }
        if(set&&set.code!=100&&!flag){//设置失败
            this.refs.alert.show({
                title: '',
                content: '设置默认地址失败',
                okText: '确定',
                okCallback: () => {
                    this.setState({
                        flag:true
                    })
                }
            })
        }
        if(set&&set.code==100&&!flag){
            this.refs.alert.show({
                title: '',
                content: '设置默认地址成功',
                okText: '确定',
                okCallback: () => {
                    this.setState({
                        flag:true
                    });
                    this.props.getAddress();
                }
            })
        }
    };
    choose=(...args)=>{
        this.setState({
            flag:false
        })
        if(args[0])
            this.props.setDeafult([args[1]]);
    };
    del = (id)=>{
        this.refs.confirm.show({
            title: '',
            content: '确认删除该地址？',
            okText: '删除',
            cancelText:"取消",
            okCallback: () => {
                delId = id;
                this.props.delSite(id)
            }
        });
    };
    eidt=(item)=>{
        sessionStorage.setItem("baoEditSite",JSON.stringify(item));
        this.props.push('/user/setting/siteEdit');
    };
    nullAddress=()=>{
        return(<div className={style.nullDom}>
            <img src={nullIcon}/>
        </div>)
    }
    hasAddress=()=>{
        const {address} = this.props;
        return(<div>
            {
                address&&address.sort((a,b)=>{
                    return b.is_default-a.is_default;
                })&&address.map((item,i)=>{
                    return <div className={style.item} key={i}>
                        <p  className={style.name}>{item.consignee}<span className={style.phone}>{item.phone}</span></p>
                        <p className={style.site}>{item.address}</p>
                        <div className={style.eidt_bg}>
                                    <span>
                                        <CheckBox
                                            checkedCanClick={false}
                                            status={item.is_default==1?true:false}
                                            id={parseInt(item.id)}
                                            callBackFun={this.choose}>
                                        </CheckBox>
                                        <span className={classnames(style.do_default,item.is_default==1?style.default:"")}>
                                            {item.is_default==1?'默认地址':'设为默认'}</span>
                                    </span>
                            <span className={style.eidt} onClick={()=>this.eidt(item)}>编辑</span>
                            <span className={style.del} onClick={()=>{this.del(item.id)}}>删除</span>
                        </div>
                    </div>
                })
            }
        </div>)
    }
	render() {
        const {address,pop} = this.props;
        let Dom = this.nullAddress();
        if (address.length!=0){
            Dom=this.hasAddress();
        }
		return (
			<div className={style.bg}>
                <NavBar onLeft={pop} rightNode={<Link to="/user/setting/siteAdd" style={{color:'#fff'}}>新增</Link>}>收货地址</NavBar>
				<Box>
                    {Dom}
				</Box>
                <Alert ref="alert"/>
                <Confirm ref="confirm"/>
			</div>
		)
	}
}
const siteModel=(data)=>{
	if(data&&data.code==100){
		return data.data
	}else{
		return [];
	}
};
const setModel=(data)=>{
    if(data&&data.cpde==100){
        return data;
    }else
        return false;
};
const delModel = (data)=>{
    if(data && 100==data.code){
        return {
            status:true,
            id:data.id
        };
    }
    else
        return {
            status:false
        };
};
const mapStateToProps = (state) => {
	return {
		address:siteModel(state.infodata.getIn(['SITE_LIST','data'])),
        set:state.infodata.getIn(['SITE_SET_DEFAULT','data']),
        del:delModel(state.infodata.getIn(['SITE_SET_DEL','data']))
	}
};

const mapDispatchToProps = (dispatch) => ({
	getAddress(){
		dispatch({
			type:"SITE_LIST"
		})
	},
    setDeafult(params){
        dispatch({
            type:"SITE_SET_DEFAULT",
            params:params
        })
    },
    delSite(id){
        dispatch({
            type:"SITE_SET_DEL",
            params:[id],
            id:id
        })
    },
    pop() {
        dispatch(goBack())
    },
    push(url){
        dispatch(push(url))
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(Index)
