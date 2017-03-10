import { combineReducers } from 'redux'
import {routerReducer} from 'react-router-redux'

import finance from './finance.reducer'
import find from './find.reducer'
import global from './global.reducer'
import listdata from './listdata.reducer'
import infodata from './infodata.reducers'
import useCoupons from './useCoupons.reducer'

export default combineReducers({
  routing: routerReducer,
  finance,
  global,
  listdata,
  infodata,
  useCoupons
})
