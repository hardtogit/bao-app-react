// import * as actionTypes from '../actions/actionTypes'
// import Immutable from 'immutable'
// const defaultState = Immutable.fromJS({
//       activityDetail:{
//         actionList:{
//           data:[],
//           pending:false
//         },
//       }
// })
// export default (state = defaultState, action) => {
//   switch (action.type) {
//     case actionTypes.FETCH_ACTIVE_LIST: 
//         const datas = action.payload.data.response.data
//       return state.withMutations(i=>{
//         i
//           .updateIn(['activityDetail','actionList','data'],data=>data.concat(datas))
//       })
//       break;
//     case actionTypes.FETCH_ACTIVE_MASSAGE:
//         const data=action.payload.data.response.data,
//                num=parseInt(data.msg_count)+parseInt(data.notice_count);
//         return state.withMutations(i=>{
//         i
//           .setIn(['activityDetail','massegeNum'],num)
//       })   
//       break;
//     default:
//       return state
//   }
// }
