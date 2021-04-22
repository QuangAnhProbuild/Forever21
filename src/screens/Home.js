import React from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Home() {
    return (
        <View>
        <View style ={{flexDirection:'row'}}>
            <Ionicons name ="ios-reorder-three-outline" size={35} color="black" />  
              <Text style = {styles.a}>FOREVER 21</Text>
        </View>
            <TextInput style ={{flexDirection:'row', borderWidth:1, marginTop:10, marginLeft:10, marginRight:10}}
            placeholder='Search'>
                <Ionicons name ="ios-search" size={35} color="black" />  
            </TextInput>
        </View>
    )
}
const styles = StyleSheet.create({
    a:{
       
        textAlignVertical:'center',
        marginLeft:100,
        fontSize:20   
    }
})
