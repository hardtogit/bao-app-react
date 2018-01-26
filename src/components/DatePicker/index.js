/**
 * Created by xiangguo .
 * time:2018/1/26 0026.
 * email:413401168@qq.com.
 * use:auto...
 */
/**
 * Created by xiangguo .
 * time:2018/1/25 0025.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import PickerLine from "../../components/PickerLine"
import styles from './index.less'
class Index extends React.Component {
    constructor(props) {
        super(props);
        console.log(new Date().getDate().toString())
        this.state={
            open:false,
            valueGroups: {
                year: (new Date().getFullYear()).toString(),
                month: (new Date().getMonth()+1).toString(),
                day:(new Date().getDate()).toString()
            },
            optionGroups:{
                year:{
                    list:this.generateNumberArray(1970, 2040),
                    defaultValue: new Date().getFullYear().toString(),
                    displayValue (item) {
                        return item;
                    }
                },
                month: {
                    list:this.generateNumberArray(1, 12),
                    defaultValue: this.addStr((new Date().getMonth()+1).toString()),
                    displayValue (item) {
                        return item;
                    }
                },
                day: {
                    list:this.generateNumberArray(1, 31),
                    defaultValue: this.addStr(new Date().getDate().toString()),
                    displayValue (item) {
                        return item;
                    }
                }
            },
        }
    }
    propTypes = {
        visible: PropTypes.bool.isRequired,
        onConfirm: PropTypes.func.isRequired,
        onCancel: PropTypes.func.isRequired,
    };
    addStr=(str)=>{
        str=parseInt(str)
        if(str<10){
            return "0"+str.toString()
        }else{
            return str.toString()
        }
    }
    generateNumberArray=(begin, end)=> {
        let array = [];
        for (let i = begin; i <= end; i++) {
            array.push((i < 10 ? '0' : '') + i);
        }
        return array;
    };
    isRun=(year)=>{
        if(year%100===0){
            if(year%400==0){
                return true
            }else{
                return false
            }
        }else{
            if(year%4===0){
                return true
            }else{
                return false
            }
        }
    };
    handleCancel () {
        if (this.props.onCancel) {
            this.props.onCancel();
        }
        this.toggle()
    }
    handleConfirm() {
        if (this.props.onConfirm) {
            this.props.onConfirm(this.state.valueGroups);
        }
        this.toggle()
    }
    toggle=()=>{
        this.setState({
            open:!this.state.open
        })
    };
    handleChange = (name, value) => {
        console.log(name+""+value)
        this.setState(({optionGroups,valueGroups}) => {
            const nextState = {
                valueGroups:{
                    ...valueGroups,
                    [name]:value
                }
            };
            if (name === 'year' && valueGroups.month === '02') {
                if (parseInt(value) % 4 === 0) {
                    console.log('s')
                    nextState.optionGroups = {
                        ...optionGroups,
                        day:{
                            list:this.generateNumberArray(1, 29),
                            defaultValue:valueGroups.day,
                            displayValue (item) {
                                return item;
                            }
                        }
                    };
                } else {
                    nextState.optionGroups = {
                        ...optionGroups,
                        day: {
                            list:this.generateNumberArray(1, 28),
                            defaultValue:valueGroups.day,
                            displayValue (item) {
                                return item;
                            }
                        }
                    };
                }
            } else if (name === 'month') {
                if (value === '02') {
                    if(this.isRun(valueGroups.year)){
                        nextState.optionGroups = {
                            ...optionGroups,
                            day:{
                                list:this.generateNumberArray(1, 29),
                                defaultValue:valueGroups.day,
                                displayValue (item) {
                                    return item;
                                }
                            }
                        };
                    }else{
                        nextState.optionGroups = {
                            ...optionGroups,
                            day: {
                                list:this.generateNumberArray(1, 28),
                                defaultValue:valueGroups.day,
                                displayValue (item) {
                                    return item;
                                }
                            }
                        };
                    }
                } else if (['01', '03', '05', '07', '08', '10', '12'].indexOf(value) > -1 &&
                    ['01', '03', '05', '07', '08', '10', '12'].indexOf(valueGroups.month) < 0) {
                    nextState.optionGroups = {
                        ...optionGroups,
                        day:{
                            list:this.generateNumberArray(1, 31),
                            defaultValue:valueGroups.day,
                            displayValue (item) {
                                return item;
                            }
                        }
                    };
                } else if (['01', '03', '05', '07', '08', '10', '12'].indexOf(value) < 0 &&
                    ['01', '03', '05', '07', '08', '10', '12'].indexOf(valueGroups.month) > -1) {
                    nextState.optionGroups = {
                        ...optionGroups,
                        day: {
                            list:this.generateNumberArray(1, 30),
                            defaultValue:valueGroups.day,
                            displayValue (item) {
                                return item;
                            }
                        }
                    };
                }
            }else if(name==="day"){
                nextState.optionGroups = {
                    ...optionGroups,
                    day: {
                        ...optionGroups.day,
                        defaultValue:value,
                    }
                };
            }
            return nextState;
        });
    };
    componentDidUpdate () {
        if (this.refs.confirmButton &&
            !this.refs.confirmButton.onclick) {
            this.refs.confirmButton.onclick = (e) => {
                e.stopPropagation();
                this.handleConfirm();
            }
            this.refs.cancelButton.onclick =(e) => {
                e.stopPropagation();
                this.handleCancel();
            }
        }
    }
    render () {
        const isZh = !navigator.language ||
            navigator.language.toLowerCase() === 'zh-cn' ||
            navigator.language.toLowerCase() === 'zh';
        let text1 = !isZh ? 'Cancel' : '取消';
        let text2 = !isZh ? 'Finish' : '完成';
        return (
            <div style={{position:"fixed",width:"100%",top:0,bottom:0,display:'none'}} className={this.state.open&&styles.pickerModalToggle||''}>
                <div style={{position:"relative",width:"100%",height:"100%"}}>
                    <div className={classNames([styles.pickerModal])}>
                        <div className={styles.ui_popup_title}>
                            <span ref="cancelButton">{text1}</span>
                            <span ref="confirmButton">{text2}</span>
                        </div>
                        <div className={styles.ui_popup_content}>
                            <PickerLine
                                onChange={this.handleChange}
                                data={this.state.optionGroups.year}
                                type="year"
                            />
                            <PickerLine
                                onChange={this.handleChange}
                                data={this.state.optionGroups.month}
                                type="month"
                            />
                            {/*<PickerLine*/}
                                {/*onChange={this.handleChange}*/}
                                {/*data={this.state.optionGroups.day}*/}
                                {/*type="day"*/}
                            {/*/>*/}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Index;