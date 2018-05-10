/***按项目所需加载echarts相关组件***/

import React,{Component} from 'react'
import echarts from  'echarts/lib/echarts'
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
class Index extends Component{
    constructor(props){
        super(props);
    }
    static defaultProps={
          options:{}
    };
    componentDidMount(){
        let myChart = echarts.init(document.getElementById("main"));
        myChart.setOption(this.props.options)
    }
    render(){
      return(
          <div id="main" style={this.props.style}>

          </div>
          )
    }
}
export default Index