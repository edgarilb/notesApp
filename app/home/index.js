import React, { useEffect, useState } from 'react'
import {View, Text, TouchableOpacity, FlatList, Dimensions} from 'react-native'
// import {List} from './components/ListScreen'
import { connect, useSelector, useDispatch } from 'react-redux'
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationEvents } from 'react-navigation';
import axios from 'axios';
// import { Card } from 'native-base';
import Constants from 'expo-constants'
import {GET_ALL_USER_INFO_REQUEST, GET_ALL_USER_INFO_READ} from '../models/user/actions'
// create functions related to quering api, dispatching actions, talking to redux

const statusBarHeight =  Constants.statusBarHeight
var {height, width} = Dimensions.get('window')

const mapStateToProps = (state,props) =>{
    const {array} = state.user
    return {array}
}

const mapDistpachToProps = (dispatch, props) =>({
    getAllUserInfo: ()=>{
        dispatch({
            type:GET_ALL_USER_INFO_REQUEST,
            // payload:{}
        })
    },
    updateInfo:()=>{
        dispatch({
            type:GET_ALL_USER_INFO_READ
        })
    }
    
})



const HomeView = ({array, getAllUserInfo, updateInfo,navigation})=>{

//    const array = useSelector((state)=>{state.array})

    useEffect(()=>{
        console.log('array', array)
        getAllUserInfo()
    },[getAllUserInfo])

    // const [array, setArray] = useState(['Go for a walk', 'Buy vegetables and fruits']);


     return (

        <View style={{flex:1, justifyContent:'center', alignItems:'center', borderColor:'red', borderWidth:0, marginTop:10}}>
            <NavigationEvents
                onWillFocus={payload => {
                    updateInfo()
                }}
              />
            <View style={{flex:1, flexDirection:'row',justifyContent:'center', alignItems:'center', borderColor:'red', borderWidth:0, width:width, marginLeft:0}}>
                <View style={{flex:3,flexDirection:'row',justifyContent:'flex-start', alignItems:'center', marginLeft:20 }}>
                        <Text style={{fontSize:25, fontWeight:'bold',marginBottom:0}}>
                        Your Notes 
                        </Text>
                </View>
                <View style={{flex:1,flexDirection:'row',justifyContent:'center', alignItems:'center',  }}>
                        <Icon  
                            onPress={()=>{navigation.navigate('Detail')}}
                            name={"pencil-square-o"} 
                            size={25} 
                            color={'#0984e3'} />
                </View>
                
            </View>
            <View style={{flex:4,justifyContent:'flex-start', alignItems:'flex-start', borderColor:'blue', borderWidth:0, width:width-0 }}>
                {
                    array.length > 0 ?
                    array.map((item)=>{
                        return(
                        <View style={{
                            // flex:1, 
                            justifyContent:'center', 
                            alignItems:'felx-start', 
                            borderColor:'red', 
                            borderWidth:0,  
                            borderBottomWidth:0, 
                            borderBottomColor:'#dfe6e9', 
                            width:width-0, 
                            borderColor:'blue', borderWidth:0,
                            marginBottom:10
                            }}>
                            <Card style={{}}>
                                <Text style={{marginBottom:20, borderColor:'red', borderWidth:0,width:width-60}}>
                                    {item.text}
                                </Text>
                            </Card>
                        
                        </View>
                    
                        )
                        
                    })
                    :
                    <View>
                        <Text style={{fontSize:18, marginBottom:20, borderColor:'red', borderWidth:0,marginLeft:20}}>
                            No notes add yet { } <Text style={{fontSize:40}}>{'\uD83E\uDD96'}</Text>
                        </Text>
                    </View>
                }
            
            
            </View>
        {/* <View style={{flex:3, justifyContent:'center', alignItems:'center'}}>
               <TouchableOpacity
                   style={{
                       justifyContent:'center', alignItems:'center',
                       backgroundColor: "#ff7675",
                       padding: 15
                   }}
                   onPress={()=>{navigation.navigate('Detail')}}
                   >
                   <Text style={{color:'#fff', fontWeight:'bold'}}>Add a Note</Text>
               </TouchableOpacity>
           </View> */}

      
    </View>

    
       
     )
}

HomeView.navigationOptions = {
    // title: 'Your custom label...',
    headerTitle: 'Notes',
    headerStyle: {
        backgroundColor: '#fdcb6e',
    },
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize:18,
        color:'#fff'
      },
  }


const Home = connect(
    mapStateToProps,
    mapDistpachToProps
)(HomeView)

export{Home}