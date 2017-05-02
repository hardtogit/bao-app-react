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
        props.load((mod)=>{
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
            return false
        }else {
            return this.props.children(this.state.mod);
        }
    }
}
export default Index