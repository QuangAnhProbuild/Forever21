import React from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Cart() {
    return(
        <View>
            <Text style={{fontWeight:'bold',fontSize:18,marginTop:10,justifyContent:'center',textAlign:'center'}}>WISHLISH</Text>
            <Text style = {{borderTopWidth:0.5,marginTop:10}}/>
            <Text style = {styles.a}>1 Item(s)</Text>
            <View style ={styles.b}>
                <View>
                <Image
                    style={styles.c}
                    source={{
                    uri: 'https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-9/165307715_308550240628036_7131228911794356840_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=nTDf7o9dv7AAX9H9dkH&tn=AdwrbZkqVvZlGPEM&_nc_ht=scontent.fhan14-1.fna&oh=9b3086a3dc60cd92bbe58d9b23852f14&oe=60AE6C4A',
                    }}
                />
                </View>
                <View style={{marginTop:20,marginLeft:10}}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style ={{fontSize:15, fontWeight:'bold'}}>đ600,900</Text>
                    <Ionicons name="md-ellipsis-vertical" size={30} color="#000"/>
                </View>
                <Text style={{color:'#A4A4A4',fontSize:12,fontWeight:'bold'}}>Frayed Distressed Denim Shorts</Text>
                <View style = {{flexDirection:'row',marginTop:70}}>
                    <TouchableOpacity style = {{flexDirection:'row', marginRight:15}}>
                        <Text style = {{marginRight:15}}>LIGHT DENIM</Text>
                        <Ionicons name="chevron-down" size={25} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style = {{flexDirection:'row'}}>
                        <Text style = {{marginRight:50}}>29</Text>
                        <Ionicons name="chevron-down" size={25} color="black" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style = {{flexDirection:'row',marginTop:10}}>
                    <Text>QTY: 1</Text>
                    <Ionicons name="chevron-down" size={25} color="black" />
                </TouchableOpacity>
                </View>
            </View>
            <Text style ={{borderBottomWidth:0.5}}></Text>
        </View>
    )
}
const styles = StyleSheet.create({
    a:{
        fontWeight:'bold',
        color:'#A4A4A4',
        textAlign:'center'
    },
    b:{
        flexDirection:'row',
    },
    c:{
        height:200,
        width:120,
        marginLeft:20,
        marginTop:20,
    },
})
