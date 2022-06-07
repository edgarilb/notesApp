import {take, takeEvery, put, call} from 'redux-saga/effects'
import { GET_ALL_USER_INFO_REQUEST, GET_ALL_USER_INFO_SUCCESS } from './actions'
import axios from 'axios';

// generator function handler
function* handler(){
    yield takeEvery(GET_ALL_USER_INFO_REQUEST, getAllUserInfo)
}

const getData = ()=>{
    return axios.request({
        method:'GET',
        url:"http://localhost:4001/notes",
        contentType: "application/json",
        // url:"http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=xml"
        // url:"https://dummyjson.com/products/1"
    })
    // .then((res)=>{

    // })
    // axios.get("http://localhost:4001/notes")
    // .then(res => {
    // //   const notes = res.data;
    //   console.log('notes here', res.json)
    // //   setArray(notes)
    // })
    // .catch(error => console.log(error));
}

function* getAllUserInfo (action) {
    console.log(action)
 
    // try{
    //     const data = yield call(getData)
    //     console.log('data here', data)
    //     yield put({
    //         type:GET_ALL_USER_INFO_SUCCESS,
    //         payload:data
    //     })
    //     // api calls here
    // }catch(err){
    //     console.log('err', err)
    // }
}

export {handler}