/**
 * Created by xiangguo .
 * time:2017/11/10 0010.
 * email:413401168@qq.com.
 * use:auto...
 */
import React from 'react'
import Boron from '../../customized_node_modules/boron'
import style from './index.less';
import cs from 'classnames';
import PropTypes from 'prop-types'
export default class SelectBox extends React.PureComponent {
    constructor(props){
        super(props);
    }
    static propTypes = {
        mode: PropTypes.oneOf(['OutlineModal', 'ScaleModal', 'FadeModal', 'FlyModal', 'DropModal', 'WaveModal']),
        items:PropTypes.arrayOf(PropTypes.object),//数据列表 [{text,color,canClick}])
        callBackFun:PropTypes.func.isRequired
    };
    static defaultProps = {
        mode: 'FlyModal',
    };
    toggle = () => this.refs.modal.toggle();
    show = () => this.refs.modal.show();
    hide = () => this.refs.modal.hide();
    contentStyle=()=>{
        return {
            backgroundColor: 'blue',
            height: '100%'
        }
    };
    choose=(i,item)=>{
        if(this.props.items[i].canClick){
            this.props.callBackFun(item);
            this.hide();
        }
    };
    render() {
        const Modal = Boron[this.props.mode];
        let contentStyle = {
            "width":"100%",
            "position":"absolute",
            "bottom":"0",
            'boxSizing':"border-box",
            "padding":"0 8px"
        };
        return (
            <Modal  ref="modal" className={style.selectBox} contentStyle={contentStyle}>
                <ul className={style.select}>
                    {
                        this.props.items.map((item,i)=>{
                            return <li style={{"color":item.color}} onClick={()=>{this.choose(i, item.type)}} key={i}>{item.text}</li>
                        })
                    }
                </ul>
                <div className={style.cancel} onClick={()=>{this.hide();}}>取消</div>
            </Modal>
        )
    }
}
