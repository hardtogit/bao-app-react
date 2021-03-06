import {take, put, call, fork, select, apply} from 'redux-saga/effects'
import {takeEvery} from 'redux-saga'
import actionMap from '../actions/infoActionMap'
import * as actionTypes from '../actions/actionTypes'
import {push,replace} from 'react-router-redux'
import * as notLoginMap from '../actions/notLogin.map'
import {auths} from '../actions/authMap'
import {GET_EDUCATION_INFO} from "../actions/actionTypes";
function* takeRequest (action) {
    yield put({
        type: actionTypes.FETCH_INFO_DATA_REQUEST,
        key: action.type
    });
    if (action.params && !Array.isArray(action.params)) {
        throw new TypeError(`params must be Array, now it's ${typeof action.params}`)
    }
     const HasKey = notLoginMap.hasOwnProperty(action.type)
     if(!HasKey){
         const key=sessionStorage.getItem("bao-auth");
           if(!key){
             if(action.type==actionTypes.USER_INFO_WITH_LOGIN){
                 yield put(push('/login'))
             }else{
                yield put(replace('/login'))
             }
              return false
          }
       }
    const args = action.params ? action.params : [];
    const {response, error} = yield call(actionMap[action.type].apiFn, ...args);
    if (response) {
       if(action.type==actionTypes.USER_INFO&&response.code!='0000'){
           if (!action.hasOwnProperty('lx')){
               sessionStorage.setItem("bao-user",JSON.stringify(response.data));
               sessionStorage.setItem("bao-auth", true);
           }
       }
        if(action.type==actionTypes.GET_EDUCATION_INFO&&response.code!='0000'){
               sessionStorage.setItem("user-education",JSON.stringify(response.data));
        }
        if(action.type==actionTypes.USER_INFO_WITH_LOGIN&&response.code!='0000'){
            sessionStorage.setItem("bao-user",JSON.stringify(response.data));
        }else if(action.type==actionTypes.USER_INFO_WITH_LOGIN&&response.code=='0000'){
            yield put(replace('/login'))
            sessionStorage.removeItem('bao-user')
            sessionStorage.removeItem("bao-auth");
        }
        if(action.type==actionTypes.STORE_STATUS_INFO&&response.code=='100'){

            for(var i in auths){
                if(response.data.authInstrCd.indexOf){
                    if(response.data.authInstrCd.indexOf(auths[i].value)!=-1){
                        response.data[auths[i].key]=true
                    }else{
                        response.data[auths[i].key]=false
                    }
                }
            }
            sessionStorage.setItem("bao-store",JSON.stringify(response.data));
        }
       if (action.type==actionTypes.USER_LOGIN_FLOW&&response.code==100){
           sessionStorage.setItem("bao-auth", true);
           sessionStorage.removeItem('bao-sc');
           yield put({
               type:'USER_INFO'
           })
           yield put({
               type:'SAFE_CARD_INFO'
           })
           yield put({
               type:'STORE_STATUS_INFO'
           })
           yield put({
               type:'AUTH_COOKIE',
               lx:'set'
           })
           yield put({
               type:'CLEAR_DATA',
               key:'FETCH_DIRECTLIST_DATA'
           })
       }
       if (action.type==actionTypes.SAFE_CARD_INFO&&(response.code==101||response.code==301)){
           sessionStorage.setItem("bao-bank",JSON.stringify(response.data));
       }else if (action.type==actionTypes.SAFE_CARD_INFO){
           sessionStorage.removeItem('bao-bank');
       }
       if (action.type==actionTypes.DEPOSITBS_PLANB&&response.code==100){
           sessionStorage.setItem("bao-depositbs",JSON.stringify(response.data));
       }
       if (action.type==actionTypes.LOGIN_OUT&&response.code==100){
           yield put({
               type:'CLEAR_STORE_DATA'
           })
           yield put({
               type:'CLEAR_DATA',
               key:'FETCH_DIRECTLIST_DATA'
           })
           sessionStorage.removeItem("bao-auth");
           sessionStorage.removeItem("bao-user");
       }
       if (action.type==actionTypes.AUTH_COOKIE&&response.code==100&&action.lx=='set'){
           const auth=response.data.auth;
           sessionStorage.setItem("bao-auth-str",auth);
       }
       if (action.type==actionTypes.RATE&&response.code==100){
           sessionStorage.setItem("bao-deposit",JSON.stringify(response.data));
       }
       if (action.go && response.code == 100) {
         yield put(push(action.go))
       }
        if(action.id){//当组件会发送多次相同的请求是，根据id避免陷入循环
            response.id = action.id;
        }
        yield put({
            type: actionTypes.FETCH_INFO_DATA_SUCCESS,
            data: response,
            key:　action.type
        })
    }else {
        yield put({
            type: actionTypes.FETCH_INFO_DATA_FAIL,
            error,
            key:　action.type
        })
    }
}
export function* watchInfoActions() {
    yield* takeEvery(Object.keys(actionMap), takeRequest)
}
