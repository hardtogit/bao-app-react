import React from 'react'
import {
  RadialBarChart,
  RadialBar,
} from '../../customized_node_modules/recharts/src'

export default class CustomizedRadialBarChart extends React.PureComponent {

  static propTypes = {
    rate: React.PropTypes.number,
    max: React.PropTypes.number,
  }

  static defaultProps = {
    rate: 0,
    max: 10,
  }

  render() {
    return (
      <div style={{
        position: 'absolute',
      }}>
        <RadialBarChart
          style={{
            backgroundColor: 'transparent',
          }}
          cy="100%"
          width={950}
          height={475}
          barSize={10}
          innerRadius={0}
          data={[
            {rate: this.props.rate, fill: '#ffffff', stroke: 'transparent'},
            {rate: this.props.max, fill: 'transparent', stroke: 'transparent'},
          ]}
        >
          <RadialBar startAngle={180} maxAngle={180} endRadius={5} clockWise={true} dataKey='rate'/>
        </RadialBarChart>
      </div>
    )
  }
}
