import React, { useEffect, useState } from 'react'
import {View, Text, TouchableOpacity, SafeAreaView, Dimensions, TextInput, Platform} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import {List} from './components/ListScreen'
import { connect } from 'react-redux'
import axios from 'axios';
// import { Card } from 'native-base';
import Constants from 'expo-constants'
import {GET_ALL_USER_INFO_REQUEST, GET_ALL_USER_INFO_SUCCESS} from '../models/user/actions'
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
            payload:{}
        })
    },
    updateArray:(text1)=>{
        dispatch({
            type:GET_ALL_USER_INFO_SUCCESS,
            payload:{text1}
        })
    }
})

const DetailView = ({array, getAllUserInfo, updateArray,navigation})=>{
    
    // fetchData  = async()=>{
    //     axios.get("http://localhost:4000/notes")
    //     .then(res => {
    //     //   const notes = res.data;
    //       console.log('notes here', res)
    //     //   setArray(notes)
    //     })
    // }
    
    useEffect( ()=>{
        // fetchData()
        console.log('array', array)

        getAllUserInfo()
    },[getAllUserInfo])

    

    // const [narray, setArray] = useState(['1', '2']);
    const [text1, onChangeText] = useState('');

     return (
        <SafeAreaView style={{flex:1}}>
         <View style={{flex:1, justifyContent:'center', alignItems:'center', borderColor:'red', borderWidth:0, marginTop:10}}>
            <KeyboardAwareScrollView 
                style={{flex:1}}
                enableOnAndroid={true}
                enableAutomaticScroll={(Platform.OS === 'ios')}
                >  
                <View style={{flex:2, justifyContent:'center', alignItems:'center', borderColor:'red', borderWidth:0, marginBottom:20, marginTop:20 }}>
                    <Text style={{fontSize:25, fontWeight:'bold'}}>
                    Add a Note { } {'\u270F\uFE0F'}
                    </Text>
                </View>
                <View style={{flex:3,justifyContent:'flex-start', alignItems:'flex-start', borderColor:'blue', borderWidth:0, width:width-20 }}>
                    <TextInput
                        editable
                        multiline
                        numberOfLines={6}
                        style={{
                            // flex:1,
                            width:width-60,
                            height: height/4,
                            margin: 12,
                            borderWidth: 1,
                            padding: 10,
                        }}
                        onChangeText={onChangeText}
                        value={text1}
                        placeholder="write a note here..."
                        // keyboardType="numeric"
                    />
                
                
                </View>
                <View style={{flex:5, justifyContent:'center', alignItems:'center', marginTop:10}}>
                        <TouchableOpacity
                            style={{
                                justifyContent:'center', alignItems:'center',
                                backgroundColor: "#0984e3",
                                padding: 15
                            }}
                            onPress={()=>{
                                console.log('text bf', text1)
                                updateArray(text1)
                                navigation.navigate('Home')
                                // axios
                                // .post('http://localhost:4000/notes', book)
                                // .then(() => console.log('Book Created'))
                                // .catch(err => {
                                //     console.error(err);
                                // });
                            }}
                            >
                            <Text style={{color:'#fff', fontWeight:'bold'}}>Save Note</Text>
                        </TouchableOpacity>
                    </View>
            </KeyboardAwareScrollView>
         </View>
         </SafeAreaView>
     )
}

DetailView.navigationOptions = {
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
    // headerBackTitle:'',
    // headerLeftTitle:null
  }

const Detail = connect(
    mapStateToProps,
    mapDistpachToProps
)(DetailView)

export{Detail}