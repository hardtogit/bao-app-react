/**
 * Created by Administrator on 2017/5/2.
 */
import React,{Component} from 'react'

class Index extends Component{
    state={
        mod:null
    }
    componentDidMount(){
        this.load(this.props);
    }
    load=(props)=>{
        console.log(props.load)
        props.load((mod)=>{
            console.log(mod,'你大爷')
            this.setState({
                mod: mod.default ? mod.default : mod
            })
        })
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps)
        }
    }
    render(){
        if (!this.state.mod){
            return <div>fsafas</div>
        }else {
            return this.props.children(this.state.mod);
        }
    }
}
export default Index