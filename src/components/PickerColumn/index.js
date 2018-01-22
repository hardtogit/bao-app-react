import React, {Component, PropTypes} from 'react';
import styles from './index.less';
import classNames from 'classnames';
class PickerColumn extends Component {
    static propTypes = {
        options: PropTypes.array.isRequired,
        name: PropTypes.string.isRequired,
        value: PropTypes.any.isRequired,
        itemHeight: PropTypes.number.isRequired,
        columnHeight: PropTypes.number.isRequired,
        onChange: PropTypes.func.isRequired
    };
    constructor(props) {
        super(props);
        this.state = {
            isMoving: false,
            startTouchY: 0,
            startScrollerTranslate: 0,
            ...this.computeTranslate(props)
        };
    }
    componentWillReceiveProps(nextProps) {
        if (this.state.isMoving) {
            return;
        }
        this.setState(this.computeTranslate(nextProps));
    }
    computeTranslate = (props) => {
        const {options, value, itemHeight, columnHeight} = props;
        let selectedIndex = options.indexOf(value);
        if (selectedIndex < 0) {
            // throw new ReferenceError();
            console.warn('Warning: "' + this.props.name+ '" doesn\'t contain an option of "' + value + '".');
            this.onValueSelected(options[0]);
            selectedIndex = 0;
        }
        return {
            scrollerTranslate: columnHeight / 2 - itemHeight / 2 - selectedIndex * itemHeight,
            minTranslate: columnHeight / 2 - itemHeight * options.length + itemHeight / 2,
            maxTranslate: columnHeight / 2 - itemHeight / 2
        };
    };
    onValueSelected = (newValue) => {
        this.props.onChange(this.props.name, newValue);
    };
    handleTouchStart = (event) => {
        const startTouchY = event.targetTouches[0].pageY;
        this.setState(({scrollerTranslate}) => ({
            startTouchY,
            startScrollerTranslate: scrollerTranslate,
            isMoving:true
        }));
    };
    handleTouchMove = (event) => {
        event.preventDefault();
        const touchY = event.targetTouches[0].pageY;
        this.setState(({isMoving, startTouchY, startScrollerTranslate, minTranslate, maxTranslate}) => {
            if (!isMoving) {
                return {
                    isMoving: true
                }
            }
            let nextScrollerTranslate = startScrollerTranslate + touchY - startTouchY;
            if (nextScrollerTranslate < minTranslate) {
                nextScrollerTranslate = minTranslate - Math.pow(minTranslate - nextScrollerTranslate, 0.8);
            } else if (nextScrollerTranslate > maxTranslate) {
                nextScrollerTranslate = maxTranslate + Math.pow(nextScrollerTranslate - maxTranslate, 0.8);
            }
            return {
                scrollerTranslate: nextScrollerTranslate
            };
        });
    };
    handleTouchEnd = (event) => {
        if (!this.state.isMoving) {
            return;
        }
        this.setState({
            isMoving: false,
            startTouchY: 0,
            startScrollerTranslate: 0
        });
        setTimeout(() => {
            const {options, itemHeight} = this.props;
            const {scrollerTranslate, minTranslate, maxTranslate} = this.state;
            let activeIndex;
            if (scrollerTranslate > maxTranslate) {
                activeIndex = 0;
            } else if (scrollerTranslate < minTranslate) {
                activeIndex = options.length - 1;
            } else {
                activeIndex = - Math.floor((scrollerTranslate - maxTranslate+itemHeight/2) / itemHeight);
            }
            this.onValueSelected(options[activeIndex]);
        }, 0);
    };
    handleTouchCancel = (event) => {
        if (!this.state.isMoving) {
            return;
        }
        this.setState((startScrollerTranslate) => ({
            isMoving: false,
            startTouchY: 0,
            startScrollerTranslate: 0,
            scrollerTranslate: startScrollerTranslate
        }));
    };
    handleItemClick = (option) => {
        if (option !== this.props.value) {
            this.onValueSelected(option);
        }
    };
    renderItems() {
        const {options, itemHeight, value} = this.props;
        return options.map((option, index) => {
            const style = {
                height: itemHeight + 'px',
                lineHeight: itemHeight + 'px'
            };
            return (
                <div
                    key={index}
                    className={classNames(styles.pickerItem,option === value ? styles.pickerItemSelected: '')}
                    style={style}
                    onClick={() => this.handleItemClick(option)}>{option}</div>
            );
        });
    }
    render() {
        const translateString = `translate3d(0, ${this.state.scrollerTranslate}px, 0)`;
        const style = {
            MsTransform: translateString,
            MozTransform: translateString,
            OTransform: translateString,
            WebkitTransform: translateString,
            transform: translateString
        };
        if (this.state.isMoving) {
            style.transitionDuration = '0ms';
        }
        return(
            <div className={styles.pickerColumn}>
                <div
                    className={styles.pickerScroller}
                    style={style}
                    onTouchStart={this.handleTouchStart}
                    onTouchMove={this.handleTouchMove}
                    onTouchEnd={this.handleTouchEnd}
                    onTouchCancel={this.handleTouchCancel}>
                    {this.renderItems()}
                </div>
            </div>
        )
    }
}
class Picker extends Component {
    static propTyps = {
        optionGroups: PropTypes.object.isRequired,
        valueGroups: PropTypes.object.isRequired,
        onChange: PropTypes.func.isRequired,
        itemHeight: PropTypes.number,
        height: PropTypes.number
    };
    static defaultProps = {
        itemHeight: 36,
        height: 216
    };
    renderInner() {
        const {optionGroups, valueGroups, itemHeight, height, onChange} = this.props;
        const highlightStyle = {
            height: itemHeight,
            marginTop: -(itemHeight / 2)
        };
        const columnNodes = [];
        for (let name in optionGroups) {
            columnNodes.push(
                <PickerColumn
                    key={name}
                    name={name}
                    options={optionGroups[name]}
                    value={valueGroups[name]}
                    itemHeight={itemHeight}
                    columnHeight={height}
                    onChange={onChange} />
            );
        }
        return (
            <div className={styles.pickerInner}>
                {columnNodes}
                <div className={styles.pickerHighlight} style={highlightStyle}></div>
            </div>
        );
    }
    render() {
        const style = {
            height: this.props.height
        };
        const {optionGroups} = this.props;
        const labels=[];
        for (let name in optionGroups) {
            labels.push(name)
        }
        return (
            <div className={styles.pickerContainer} style={style}>
                {this.renderInner()}
            </div>
        );
    }
}
function generateNumberArray(begin, end) {
    let array = [];
    for (let i = begin; i <= end; i++) {
        array.push((i < 10 ? '0' : '') + i);
    }
    return array;
}
export default class DatePicker extends Component {
    constructor(props) {
        super(props);
        let dateArr=props.date?props.date.split('-'):'';
        console.log(new Date().getFullYear());
        this.state = {
            isPickerShow: false,
            valueGroups: {
                year: dateArr[0]|| (new Date().getFullYear()).toString(),
                month: dateArr[1]||(new Date().getMonth()+1).toString(),
                day: dateArr[2]||(new Date().getDate()).toString()
            },
            optionGroups: {
                year: generateNumberArray(1970, 2040),
                month: generateNumberArray(1, 12),
                day: generateNumberArray(1, 31)
            }
        };
    }
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
    componentDidMount(){
        this.handleChange('year',this.state.valueGroups.year);
        this.handleChange('month',this.state.valueGroups.month)
    }
    handleChange = (name, value) => {
        this.setState(({valueGroups, optionGroups}) => {
            const nextState = {
                valueGroups: {
                    ...valueGroups,
                    [name]: value
                }
            };
            if (name === 'year' && valueGroups.month === '02') {
                if (parseInt(value) % 4 === 0) {
                    console.log('s')
                    nextState.optionGroups = {
                        ...optionGroups,
                        day: generateNumberArray(1, 29)
                    };
                } else {
                    nextState.optionGroups = {
                        ...optionGroups,
                        day: generateNumberArray(1, 28)
                    };
                }
            } else if (name === 'month') {
                if (value === '02') {
                    if(this.isRun(valueGroups.year)){
                        nextState.optionGroups = {
                            ...optionGroups,
                            day: generateNumberArray(1, 29)
                        };
                    }else{
                        nextState.optionGroups = {
                            ...optionGroups,
                            day: generateNumberArray(1, 28)
                        };
                    }
                } else if (['01', '03', '05', '07', '08', '10', '12'].indexOf(value) > -1 &&
                    ['01', '03', '05', '07', '08', '10', '12'].indexOf(valueGroups.month) < 0) {
                    nextState.optionGroups = {
                        ...optionGroups,
                        day: generateNumberArray(1, 31)
                    };
                } else if (['01', '03', '05', '07', '08', '10', '12'].indexOf(value) < 0 &&
                    ['01', '03', '05', '07', '08', '10', '12'].indexOf(valueGroups.month) > -1) {
                    nextState.optionGroups = {
                        ...optionGroups,
                        day: generateNumberArray(1, 30)
                    };
                }
            }
            return nextState;
        });
    };
    togglePicker = () => {
        this.setState(({isPickerShow}) => ({
            isPickerShow: !isPickerShow
        }));
    };
    handleOk=()=>{
        this.props.okCallBack(this.state.valueGroups);
        this.togglePicker();
    }
    render() {
        const {isPickerShow, optionGroups, valueGroups} = this.state;
        const maskStyle = {
            display: isPickerShow ? 'block' : 'none'
        };
        return (
            <div className={styles.pickerModalContainer}>
                <div className={classNames(styles.pickerModal,isPickerShow?styles.pickerModalToggle:'')}>
                    <header>
                        <div className={styles.cancel}> <div className={styles.btn} onClick={this.togglePicker}>取消</div></div>
                        <div className={styles.confirm} ><div className={styles.btn} onClick={this.handleOk}>确定</div></div>
                    </header>
                    <Picker
                        optionGroups={optionGroups}
                        valueGroups={valueGroups}
                        onChange={this.handleChange} />
                </div>
            </div>
        );
    }
}