import React,{Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import Picker from "../../components/PickerLine"
import styles from './index.less'
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            open1:false,
            open2:false,
            valueGroups1: {
            },
            valueGroups2: {
            },
            optionGroups:{
            },
        }
    }
    propTypes = {
        visible: PropTypes.bool.isRequired,
        onConfirm: PropTypes.func.isRequired,
        onCancel: PropTypes.func.isRequired,
    };
    static defaultProps= {
        labels:"year,month,day"
    }
    addStr=(str)=>{
        str=parseInt(str)
        if(str<10){
            return "0"+str.toString()
        }else{
            return str.toString()
        }
    };
    componentWillMount(){
        const dataSource={
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
            },
            h:{
                list:this.generateNumberArray(0, 23),
                defaultValue:this.addStr(new Date().getHours().toString()),
                displayValue (item) {
                    return item;
                }
            },
            m:{
                list:this.generateNumberArray(0, 59),
                defaultValue:this.addStr(new Date().getMinutes().toString()),
                displayValue (item) {
                    return item;
                }
            },
            s:{
                list:this.generateNumberArray(0, 59),
                defaultValue:this.addStr(new Date().getSeconds().toString()),
                displayValue (item) {
                    return item;
                }
            }
        }
        const valueSource={
            year: (new Date().getFullYear()).toString(),
            month: (new Date().getMonth()+1).toString(),
            day:(new Date().getDate()).toString(),
            h:this.addStr(new Date().getHours().toString()),
            m:this.addStr(new Date().getMinutes().toString()),
            s:this.addStr(new Date().getSeconds().toString())
        }
        let selectDataSource={};
        let selectValueSource={}
        let arr=this.props.labels.split(',')
        arr.map((label)=>{
            if(dataSource.hasOwnProperty(label)){
                selectDataSource[label]=dataSource[label]
            }
            if(valueSource.hasOwnProperty(label)){
                selectValueSource[label]=valueSource[label]
            }
        });
        this.setState({
            optionGroups:selectDataSource
        })
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
            this.props.onConfirm(this.state.valueGroups1,this.state.valueGroups2);
        }
        this.toggleCancle()
    }
    toggleCancle=()=>{
        this.setState({
            open1:false,
            open2:false
        })
    };
    toggleNext=()=>{
        this.setState({
            open1:false,
            open2:true
        })
    };
    toggle=()=>{
        this.setState({
            open1:!this.state.open1,
            open2:false
        })
    };
    handleChange1 = (name, value) => {
        this.setState(({optionGroups,valueGroups1}) => {
            const nextState = {
                valueGroups1:{
                    ...valueGroups1,
                    [name]:value
                }
            };
            if(this.props.labels.split(',').indexOf('day')!=-1){
                if (name === 'year' && valueGroups1.month === '02') {
                    if (parseInt(value) % 4 === 0) {
                        nextState.optionGroups = {
                            ...optionGroups,
                            day:{
                                list:this.generateNumberArray(1, 29),
                                defaultValue:valueGroups1.day,
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
                                defaultValue:valueGroups1.day,
                                displayValue (item) {
                                    return item;
                                }
                            }
                        };
                    }
                } else if (name === 'month') {
                    if (value === '02') {
                        if(this.isRun(valueGroups1.year)){
                            nextState.optionGroups = {
                                ...optionGroups,
                                day:{
                                    list:this.generateNumberArray(1, 29),
                                    defaultValue:valueGroups1.day,
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
                                    defaultValue:valueGroups1.day,
                                    displayValue (item) {
                                        return item;
                                    }
                                }
                            };
                        }
                    } else if (['01', '03', '05', '07', '08', '10', '12'].indexOf(value) > -1 &&
                        ['01', '03', '05', '07', '08', '10', '12'].indexOf(valueGroups1.month) < 0) {
                        nextState.optionGroups = {
                            ...optionGroups,
                            day:{
                                list:this.generateNumberArray(1, 31),
                                defaultValue:valueGroups1.day,
                                displayValue (item) {
                                    return item;
                                }
                            }
                        };
                    } else if (['01', '03', '05', '07', '08', '10', '12'].indexOf(value) < 0 &&
                        ['01', '03', '05', '07', '08', '10', '12'].indexOf(valueGroups1.month) > -1) {
                        nextState.optionGroups = {
                            ...optionGroups,
                            day: {
                                list:this.generateNumberArray(1, 30),
                                defaultValue:valueGroups1.day,
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
            }
            return nextState;
        });
    };
    handleChange2 = (name, value) => {
        this.setState(({optionGroups,valueGroups2}) => {
            const nextState = {
                valueGroups2:{
                    ...valueGroups2,
                    [name]:value
                }
            };
            if(this.props.labels.split(',').indexOf('day')!=-1){
                if (name === 'year' && valueGroups2.month === '02') {
                    if (parseInt(value) % 4 === 0) {
                        nextState.optionGroups = {
                            ...optionGroups,
                            day:{
                                list:this.generateNumberArray(1, 29),
                                defaultValue:valueGroups2.day,
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
                                defaultValue:valueGroups2.day,
                                displayValue (item) {
                                    return item;
                                }
                            }
                        };
                    }
                } else if (name === 'month') {
                    if (value === '02') {
                        if(this.isRun(valueGroups2.year)){
                            nextState.optionGroups = {
                                ...optionGroups,
                                day:{
                                    list:this.generateNumberArray(1, 29),
                                    defaultValue:valueGroups2.day,
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
                                    defaultValue:valueGroups2.day,
                                    displayValue (item) {
                                        return item;
                                    }
                                }
                            };
                        }
                    } else if (['01', '03', '05', '07', '08', '10', '12'].indexOf(value) > -1 &&
                        ['01', '03', '05', '07', '08', '10', '12'].indexOf(valueGroups2.month) < 0) {
                        nextState.optionGroups = {
                            ...optionGroups,
                            day:{
                                list:this.generateNumberArray(1, 31),
                                defaultValue:valueGroups2.day,
                                displayValue (item) {
                                    return item;
                                }
                            }
                        };
                    } else if (['01', '03', '05', '07', '08', '10', '12'].indexOf(value) < 0 &&
                        ['01', '03', '05', '07', '08', '10', '12'].indexOf(valueGroups2.month) > -1) {
                        nextState.optionGroups = {
                            ...optionGroups,
                            day: {
                                list:this.generateNumberArray(1, 30),
                                defaultValue:valueGroups2.day,
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
        // const isZh = !navigator.language ||
        //     navigator.language.toLowerCase() === 'zh-cn' ||
        //     navigator.language.toLowerCase() === 'zh';
        // let text1 = !isZh ? 'Cancel' : '取消';
        // let text2 = !isZh ? 'Finish' : '完成';
        const {optionGroups}=this.state;
        return (
            <div>
                <div style={{position:"fixed",width:"100%",top:0,bottom:0,display:'none'}} className={this.state.open1&&styles.pickerModalToggle||''}>
                    <div style={{position:"relative",width:"100%",height:"100%"}}>
                        <div className={classNames([styles.pickerModal])}>
                            <div className={styles.ui_popup_title}>
                                <span onClick={()=>{this.toggleCancle()}}>取消</span>
                                <span>开始日期</span>
                                <span onClick={()=>{this.toggleNext()}}>下一步</span>
                            </div>
                            <div className={styles.ui_popup_content}>
                                {(()=>{
                                    let pickerArr=[]
                                    for(name in optionGroups){
                                        pickerArr.push(
                                            <Picker
                                                onChange={this.handleChange1}
                                                data={optionGroups[name]}
                                                type={name}
                                            />
                                        )
                                    }
                                    return pickerArr
                                })()}
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{position:"fixed",width:"100%",top:0,bottom:0,display:'none'}} className={this.state.open2&&styles.pickerModalToggle||''}>
                    <div style={{position:"relative",width:"100%",height:"100%"}}>
                        <div className={classNames([styles.pickerModal])}>
                            <div className={styles.ui_popup_title}>
                                <span  onClick={()=>{this.toggleCancle()}}>取消</span>
                                <span>结束日期</span>
                                <span onClick={()=>{this.handleConfirm()}}>完成</span>
                            </div>
                            <div className={styles.ui_popup_content}>
                                {(()=>{
                                    let pickerArr=[]
                                    for(name in optionGroups){
                                        pickerArr.push(
                                            <Picker
                                                onChange={this.handleChange2}
                                                data={optionGroups[name]}
                                                type={name}
                                            />
                                        )
                                    }
                                    return pickerArr
                                })()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Index;