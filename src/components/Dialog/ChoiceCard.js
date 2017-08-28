/**
 * Created by xiangguo .
 * time:2017/7/31 0031.
 * email:413401168@qq.com.
 * use:auto...
 */
import React from 'react'
import cn from 'classnames'
import Boron from '../../customized_node_modules/boron'
import Dialog from './index'
import helper from './helper.js'
import styles from './index.styl'
import PropTypes from 'prop-types'
class Index extends React.Component {

    static propTypes = {
        text: PropTypes.string,
        mode: PropTypes.oneOf(['OutlineModal', 'ScaleModal', 'FadeModal', 'FlyModal', 'DropModal', 'WaveModal'])
    }

    constructor(props) {
        super(props)
        this.state = {
            text: this.props.text || ''
        }
    }
    handClick=(name,code)=>{
        const options = this.props.options;
        if (options.choiceCallback) {
            return options.choiceCallback.call(null, this.hide, name,code)
        }
    }
    static defaultProps = {
        mode: 'OutlineModal'
    }

    show(text) {
        this.setState({text})
        this.refs.dialog.show()
    }

    hide=()=> {
        this.refs.dialog.hide()
    }
    componentWillUnmount() { }

    setText = (text) => {
        this.refs.text.setText(text)
    }
    render() {
        const options = this.props.options
        const Modal = Boron[this.props.mode]
        return (
            <Modal ref='dialog'  modalStyle={{ transform: 'none', animation: 'none', backgroundColor: '#fff', width: '100%', bottom: 0, left: 0, top: 'auto'}}  closeOnClick={false} >
                <div className={styles.c_container}>
                    <div className={styles.c_header}>
                        <span onClick={this.hide}>X</span> 选择付款方式
                    </div>
                    <div className={styles.c_body}>
                        {options.banks&&options.banks.data&&options.banks.data.map((value,i)=>{
                             return <div key={i} className={styles.c_item} onClick={()=>{this.handClick(value.bankName,value.bankCard)}}>
                                 <span>{value.bankName}</span><span>({value.bankCard.substr(value.bankCard.length-4,4)})</span>
                             </div>
                        })}
                    </div>

                </div>
            </Modal>
        )
    }
}

export default Index