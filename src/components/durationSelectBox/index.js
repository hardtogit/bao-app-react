import React from 'react'
import Boron from '../../customized_node_modules/boron'
import style from './index.less';
import cs from 'classnames';

export default class DurationSelectBox extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            from:this.props.from,
            to:this.props.to
        }
    }
    static propTypes = {
        mode: React.PropTypes.oneOf(['OutlineModal', 'ScaleModal', 'FadeModal', 'FlyModal', 'DropModal', 'WaveModal']),
        items:React.PropTypes.arrayOf(React.PropTypes.number),//数据列表[1,3,6,12]
        callBackFun:React.PropTypes.func.isRequired,
        from:React.PropTypes.number.isRequired,
        to:React.PropTypes.number.isRequired
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
    choose=()=>{
        this.props.callBackFun(this.state);
        this.hide();
    };
    chooseFrom=(item)=>{
        this.setState({
            from:item,
            to:item>this.state.from?this.props.items[this.props.items.length-1]:this.state.to
        })
    };
    chooseTo=(item)=> {
        if (item < this.state.from)
            return false;
        else{
            this.setState({
                to:item
            });
        }
    };
    render() {
        const Modal = Boron[this.props.mode];
        let contentStyle = {
            "width":"100%",
            "position":"absolute",
            "bottom":"0",
            'boxSizing':"border-box",
            "padding":"8px"
        };
        return (
            <Modal ref="modal" className={style.selectBox} contentStyle={contentStyle}>
                <ul className={style.select}>
                    <li onClick={this.hide}>取消</li>
                    {
                        this.props.items.map((item,i)=>{
                           return <li className={cs(item==this.state.from&&style.current)}  onClick={()=>{this.chooseFrom(item)}} key={i}>{item}月</li>
                        })
                    }
                </ul>
                <ul className={style.select}>
                    <li onClick={this.choose}>确定</li>
                    {
                        this.props.items.map((item,i)=>{
                            return <li className={cs(item==this.state.to&&style.current,item<this.state.from&&style.disabledColor)} onClick={()=>{this.chooseTo(item)}} key={i}>{item}月</li>
                        })
                    }
                </ul>
            </Modal>
        )
    }
}
