/**
 * Created by Administrator on 2016/11/15.
 */
import React from 'react'
export default class index extends  React.Component{
    componentDidMount(){
        console.log(this.props)
    }
    render(){
        return <div>
            {this.props.children}
        </div>
    }
}