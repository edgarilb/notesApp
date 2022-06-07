import {GET_ALL_USER_INFO_SUCCESS, GET_ALL_USER_INFO_READ} from './actions'

const initialState = {
   array: [
    {
        id:'1',
        text:'Go to Walmart today'
    }
   ]
    
}

const reducer = (state=initialState, action)=>{
    switch (action.type){
        case GET_ALL_USER_INFO_SUCCESS:{
            // const {text}=action.payload.text1
            console.log('action.payload', action.payload.text1)
            state.array.push({
                id:'1',
                text:action.payload.text1
            })
            console.log('array bf ', state.array)
            // console.log('newArray', newArray)
            return {
                ...state,
                
            }
        }
        case GET_ALL_USER_INFO_READ:{
            // state.array.push({
            //     id:'1',
            //     text:'read'
            // })
            return {
                ...state,
                
            }
        }
        default:
            return state
    }
}

export {reducer}