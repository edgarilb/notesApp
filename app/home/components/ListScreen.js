import React from 'react'
import {View, Text} from 'react-native'

const List = (id, name, email)=>{
    return (
        <View style={{flex:1, justifyContent:'center', alignContent:'center'}}>
            <Text>
                {id}
            </Text>
        </View>
    )
}

export{List}