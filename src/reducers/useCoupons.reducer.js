import * as actionTypes from '../actions/actionTypes'
import Immutable from 'immutable'
const defaultState = Immutable.fromJS({
  coupons: {
  	//vouchers: '',             // 抵用券
    //interestRates: '',        // 加息券
    selectedCoupon: '',       // 用户选择使用的优惠券
    useCoupon: true             // 是否使用优惠券
  }
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_USE_COUPONS:
      return state.withMutations(i => {
        //'vouchers' in action && i.setIn(['coupons', 'vouchers'], action.vouchers)
        //'interestRates' in action && i.setIn(['coupons', 'interestRates'], action.interestRates)
        'selectedCoupon' in action && i.setIn(['coupons', 'selectedCoupon'], action.selectedCoupon)
        i.setIn(['coupons', 'useCoupon'], action.useCoupon)
      })
      
      break;
    default:
      return state
  }
}
