/*请求单次数据*/
import * as actionTypes from '../actions/actionTypes'
import Immutable from 'immutable'

const defaultState = Immutable.Map();//Immutable 不变的 增删查改即是新的

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_INFO_DATA_REQUEST:
            if (state.has(action.key)) {
                return state.setIn([action.key, 'pending'], true);
            }else {
                return state.withMutations(i => {
                    i
                        .set(action.key, Immutable.Map())
                        .setIn([action.key, 'pending'], true)
                });
            }

        case actionTypes.FETCH_INFO_DATA_SUCCESS:
          return state.withMutations(i => {
              i
                .setIn([action.key, 'data'], action.data)
                .setIn([action.key, 'pending'], false)
                .setIn([action.key, 'test'], false)
            })
        case actionTypes.FETCH_INFO_DATA_FAIL:
            return state.setIn([action.key, 'error'], action.error);
        case actionTypes.SET_USERNAME_SUCCESS:
            return updateUserInfo(state,action.key,action.data)
     
        case actionTypes.IDENTITY_AUTH_SUCCESS:
            return updataCard(state,action.key,action.data)

        case actionTypes.BIND_MOBILE_SUCCESS:
            return updateUserInfo(state,action.key,action.data)
        case actionTypes.REGISTER_NUM:
            return state.setIn([actionTypes.REGISTER_NUM,action.key],action.data)
        case actionTypes.FOR_GET_PWD:
            return state.setIn([actionTypes.FOR_GET_PWD,'data'],action.data)
        case actionTypes.CLAER_USER:
            return state.withMutations(i => {
                i
                    .setIn([actionTypes.USER_INFO_WITH_LOGIN],Immutable.Map())
                    .setIn([actionTypes.LOGIN_OUT], Immutable.Map())
            })
        case actionTypes.CLEAR_USER_INFO:
            return state.setIn(['USER_INFO','data'],Immutable.Map())
            const key=action.key;
            return state.withMutations(i => {
                key.map((item)=>i.setIn([item],Immutable.Map()))
            })
        case actionTypes.CLEAR_INFO_DATA:
            const clearKey=action.key;
            return state.setIn([clearKey,'data'],null)
        case actionTypes.DEEP_CLEAR_INFO_DATA:
            const deepClearKey=action.key;
            return state.setIn([deepClearKey],null)
        default:
            return state
    }
}

function updateUserInfo(state,keys,obj) {
  const newUserInfo = Immutable
    .fromJS(state.getIn([actionTypes[keys], 'data']))
    .withMutations(i => {
      Object.keys(obj).map(key => i.setIn(['data',key], obj[key]))
    })
    .toJS()

  return state.setIn([actionTypes[keys], 'data'], newUserInfo)
}
function updataCard(state,keys,obj) {
    const newUserInfo = Immutable
        .fromJS(state.getIn([actionTypes[keys], 'data']))
        .withMutations(i => {
            Object.keys(obj).map(key =>i.setIn([key],obj[key]))
        })
        .toJS()

    return state.setIn([actionTypes[keys], 'data'], newUserInfo)
}

