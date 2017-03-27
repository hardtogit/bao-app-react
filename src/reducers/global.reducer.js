import * as actionTypes from '../actions/actionTypes'
import {LOCATION_CHANGE} from 'react-router-redux'
import Immutable from 'immutable'
const defaultState = Immutable.fromJS({
  hasBack: false,
  routeAction: 'PUSH',
  PRODUCT_INDEX:0,
  HOME_TAB_CAV:{index:0},
  PRODUCT_INDEX_PAGE:1,
  LOGIN_OUT_PATH:null
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOCATION_CHANGE:
      return state.withMutations(i => {
        i
          .set('hasBack', action.payload.pathname !== '/')
          .set('routeAction', action.payload.action)
      })
      case actionTypes.PRODUCT_INDEX:
          return state.setIn(['PRODUCT_INDEX'],action.index);
      case actionTypes.PRODUCT_INDEX_PAGE:
          return state.setIn(['PRODUCT_INDEX_PAGE'],action.index);
      case actionTypes.LOGIN_OUT_PATH:
          return state.setIn(['LOGIN_OUT_PATH'],action.path);
    default:
      return state
  }
}
