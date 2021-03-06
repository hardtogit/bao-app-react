/**
 * Fetch
 */
import config          from '../../config/index'
import passport        from './passport'
import setting         from './setting'
import assetStatistics from './assetStatistics'
import interestRate from './interestRate'
import find            from './find'
import finance         from './finance'
import invite          from './invite'
import coin from './coin'
import bonus from './bonus'
import fridayPop from './redFriday.js'
import fridayCoinList from './redFriday.js'
import scratcheCard from './scratcheCard.js'
import shopping from './shopping'
import getVipInfo from './vipCenter'
import getGoodsList from './goodsInfo'
import weChat from './weChat'

const ROOT_URL = '/mobile_api/'
// const ROOT_URL = '/'
const transferObjectToFormat = (o) => {
  let result = []
  Object.keys(o).map(key => result.push(key + '=' + encodeURIComponent(o[key])))
  return result.join('&')
}

const Fetch = (url, type, data, headers) => {
  return new Promise((resolve, reject) => {
    let options = {
        credentials:"include",
        method: type || 'GET'
    }
    let _headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    }

    options.headers = Object.assign({
      'Accept-Language': 'zh-CN',
      'Cache-Control': 'no-cache',
    //  'Access-Control-Allow-Origin': '*',
    //  'Postman-Token': '6905a27a-4950-8d13-e455-81550f5784f7'
    }, _headers, headers || {})
    if (type && type.toUpperCase() === 'POST' && data) {
      if (data.hasOwnProperty('file')){
           options.body=data.data;
           delete options.headers
       }
      else if(data.get){
          options.body=data;
          delete options.headers
      }
      else {
          options.headers ={
              'Accept-Language': 'zh-CN',
              'Cache-Control': 'no-cache',
              'Content-Type': 'application/json;charset=utf-8',
          };
          options.body =JSON.stringify(data)
       }
    } else if (type && type.toUpperCase() === 'GET') {
        if(url.indexOf('?')!=-1){
            url = data
                ? url + '&' + transferObjectToFormat(data)
                : url
        }else{
            url = data
                ? url + '?' + transferObjectToFormat(data)
                : url
        }

    }
    // return json format result in default
    fetch(ROOT_URL + url, options)
    .then((response) => {
      return response.json();
      // const result = response.json()
      // if (result.code == '0000') {
      //   // 未登录
      //   // utils.PubSub.emit('noLogin')
      // }

    })
    .then(
      response => resolve({response}),
      error => resolve({error})
    )

  })
}

passport(Fetch)
setting(Fetch)
assetStatistics(Fetch)
interestRate(Fetch)
find(Fetch)
finance(Fetch)
coin(Fetch)
bonus(Fetch)
scratcheCard(Fetch)
fridayPop(Fetch)
fridayCoinList(Fetch)
shopping(Fetch)
invite(Fetch)
getVipInfo(Fetch)
getGoodsList(Fetch)
weChat(Fetch)
export default Fetch
