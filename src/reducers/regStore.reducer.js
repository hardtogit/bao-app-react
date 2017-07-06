/**
 * Created by xiangguo .
 * time:2017/7/5 0005.
 * email:413401168@qq.com.
 * use:auto...
 */
import * as actionTypes from '../actions/actionTypes'
import Immutable from 'immutable'

const defaultState = Immutable.Map();//Immutable 不变的 增删查改即是新的

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHOICE_POINT:
            return state.setIn([action.type, 'bankInfoPoint'], action.pointData)
            break;
        case actionTypes.CHOICE_BANK:
            return state.setIn([action.type, 'bankInfo'], action.bankData)
            break;
         default:return state
    }
}