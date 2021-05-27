import React, {Component} from 'react'
import {StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback} from 'react-native'
export default function Login({navigation}){
        return(
            <View style={styles.container}>
                <View style={styles.up}>
                     <Text style={styles.title}>SIGN IN</Text>
                </View>
                <Text style = {styles.abcd}>EMAIL ADDRESS</Text>
           <View style={styles.textInputContainer}>
            <TextInput style={styles.texInput}
                textContentType='emailAddress'
                keybroadType='email-address'
                placeholder='qu.anh261299@gmail.com'>
            </TextInput>
           </View>
           <Text style = {styles.abcd}>PASSWORD</Text>
            <View style={styles.textInputContainer}>
            <TextInput style={styles.texInput}
            placeholder='Enter your pass'>
            </TextInput>
           </View>
           <TouchableOpacity style={styles.loginbutton} >
           <Text style={styles.loginbuttontitle}> SIGN IN </Text>
           </TouchableOpacity>
        <Text style = {styles.abcd1}>Forgot Password?</Text>
        <TouchableOpacity onPress={()=> navigation.navigate ('Join')}>
            <Text style={{textDecorationLine: 'underline', textAlign:'center'}}>Don't have an account?</Text>
        </TouchableOpacity>
        <View style={styles.down}>
              <Text>TOUCH ID SETTING </Text>
                <Text>To turn on/off face ID, go to[My Account] - [Setting] - [Touch ID] - On/Off </Text>
            </View>
             </View>
        )
    }
const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems: 'stretch',
        backgroundColor:'#ffffff'
    },
    up:{
          backgroundColor:'white',
          justifyContent:'center',
          alignItems:'center',
          marginBottom:60,
          marginTop:60,
    },
    down:{
          backgroundColor:'white',
          marginTop:190,
          marginLeft:10,
          marginRight:10,
          backgroundColor:'rgba(255,255,255,0.2)'
    },
    title:{
        color: 'black',
        textAlign:'center',
        width: 400,
        fontSize: 23,
        fontWeight:'bold',
        borderBottomWidth:0.5,
    },
    textInputContainer:{
        paddingHorizontal: 10,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom:20,
        borderWidth:1,
        marginLeft:10,
        marginRight:10,
    },
    texInput:{
        width:280,
        height:45,
    },
    abcd:{
        fontSize:18,
        color:'gray',
        fontWeight:'bold',
        marginLeft:10,
    },
    loginbutton:{
        width:280,
        height:45,
        backgroundColor:'yellow',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:60
    },
    loginbuttontitle:{
        fontSize:18,
        color:'black',
        fontWeight:'bold',
    },
    abcd1:{
        textAlign:'center',
        marginTop:20,
        textDecorationLine: 'underline'
    },
    abcd2:{
        textAlign:'center',
        marginTop:30,
        textDecorationLine: 'underline'
    }
})