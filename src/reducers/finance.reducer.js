import * as actionTypes from '../actions/actionTypes'
import Immutable from 'immutable'

const defaultState = Immutable.fromJS({
  buyIuputProject:{
    direct:{
      value:200,
    },
    creditor:{
      value:200,
    },
    demand:{
      value:10000,
    },
    deposit:{
      value:200,
    },
  },
  appointPassword:{
    passWord:'',
  },
  Cavnum:0
})


export default (state = defaultState, action) => {
  switch (action.type) {
      case actionTypes.CHANGE_CREDITORS_DETAIL_INDEX:
        if (action.payload !== state.getIn(['creditorsDetailData','showIndex'])) {
          return state.setIn(['creditorsDetailData','showIndex'],action.payload)
        }
        break;
      case actionTypes.BUYINPUT_VALUE_CHANGE: 
          return state.setIn(['buyIuputProject',action.product,'value'],action.payload)
          break;
      case actionTypes.BUYINPUT_OVER: 
          return state.setIn(['buyIuputProject',action.product,'value'],action.payload)
         break;
      case actionTypes.BUYINPUT_VALUE_COUNT:
        if (action.payload === '+') {
          let value = state.getIn(['buyIuputProject',action.product,'value'])
          return state.setIn(['buyIuputProject',action.product,'value'],++value)
        }else{
          let value = state.getIn(['buyIuputProject',action.product,'value'])
          if (value>1) {
            return state.setIn(['buyIuputProject',action.product,'value'],--value)
          }
        }
        return state
        break;
         case actionTypes.Tab_CAV:
            return state.setIn(['Cavnum'],action.payload.num)    
      default:
        return state;
  }
}
