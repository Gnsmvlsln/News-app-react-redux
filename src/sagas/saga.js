import * as actions from  '../Actions/NewsApi'
import {take,put,call} from 'redux-saga/effects'
import axios from 'axios'
export function* newsfnc(data){
    console.log('saga',data)
    let arry=[];
    const arr = data.map((item)=>{
       return {...arry},item.value   
    })
    console.log('arrr',arr)
    let filters='';
    console.log('filter1',filters)
    arr.map((data)=>{
        if(filters.length>0){
            filters=filters+' OR '
        }
        console.log('length',filters.length)
       return filters=filters+data
       console.log('filter2',filters)
    })
    console.log('filter3',filters)

    const API_URL = `https://newsapi.org/v2/everything?q=${filters}&from=2019-06-26&sortBy=popularity&language=en&apiKey=a1c6f17cfee84049b925dbd8c7c8190c`
    // const API_URL = `https://newsapi.org/v2/everything?q=${filters}&from=2019-06-26&sortBy=popularity&apiKey=a1c6f17cfee84049b925dbd8c7c8190c`

    console.log(API_URL)
    // const response = () =>{
    //     return axios.get(API_URL)
    // .then(res=>{
    //    return res;
    //    }).catch(error => console.log(error))
    // }
    // response().then(data=>{
    //     res.json(data)
    // })
    // const newsd = (response)
    // console.log('appppi',newsd)

    //     const response = yield call(fetch,axios.get(API_URL))
    //     const request = response.json()
    // console.log('vayyandayi',request)
    const response = yield fetch(API_URL,{
        headers : { 
        'Accept': 'application/json'
       }
    })
    .then(res=>res.json())
    .then(result => result)
    // console.log('yield response', yield response.articles[0].author)
    const request = yield response;
    
    // .catch(data =>{
    //     return data
    // })
    // const request = response;
    // const request= 
    // console.log('Api response', request.articles[0].author)
    yield put({type:'NEWS_REQUEST_ONE',payload:request.articles})
}


export function* watchNewsRequest(){
    while(true){
        const{data}=yield take(actions.NEWS_REQUEST)
        yield call(newsfnc,data)
    }
}