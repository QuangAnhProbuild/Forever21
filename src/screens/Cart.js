import React from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Cart() {
    return(
        <View>
            <ScrollView style = {{height:550}}>
            <Text style = {{borderTopWidth:0.5,marginTop:10}}/>
            <Text style = {styles.a}>1 Item(s) : Total (exduding delivery) đ731,800</Text>
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
                <View style={{flexDirection:'row'}}>
                    <Text style ={{fontSize:15, fontWeight:'bold',textDecorationLine: 'line-through'}}>đ1,045,200</Text>
                    <Text style={{color:'red',marginLeft:10, marginRight:55,fontSize:15, fontWeight:'bold'}}>đ731,800</Text>
                    <Ionicons name="md-ellipsis-vertical" size={30} color="#000"/>
                </View>
                <Text style={{color:'#A4A4A4',fontSize:12,fontWeight:'bold'}}>WESC Lets Get Weird Graphic Tee</Text>
                <View style = {{flexDirection:'row',marginTop:70}}>
                    <TouchableOpacity style = {{flexDirection:'row', marginRight:15}}>
                        <Text style = {{marginRight:15}}>WHITE/MULTI</Text>
                        <Ionicons name="chevron-down" size={25} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style = {{flexDirection:'row'}}>
                        <Text style = {{marginRight:50}}>M</Text>
                        <Ionicons name="chevron-down" size={25} color="black" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style = {{flexDirection:'row', marginTop:10}}>
                    <Text>QTY: 1</Text>
                    <Ionicons name="chevron-down" size={25} color="black" />
                </TouchableOpacity>
                </View>
            </View>
            <View style ={styles.d}>
                <Text style ={{textAlign:'center',fontWeight:'bold'}}>Order Summary</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{marginLeft:10}}>Subtotal</Text>
                    <Text style={{marginRight:10}}>đ731,800</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{marginLeft:10}}>DisCount</Text>
                    <Text style={{marginRight:10}}>đ0</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{marginLeft:10,fontWeight:'bold'}}>TOTAL</Text>
                    <Text style={{marginRight:10,fontWeight:'bold'}}>đ731,800</Text>
                </View>
            </View>
            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',height:50}}>
                <Text style={{marginLeft:10, textAlignVertical:'center'}}>PROMOTION CODE</Text>
                <Ionicons style ={{alignSelf:'center'}} name="chevron-forward" size={25} color="black" />
            </TouchableOpacity>
            <View style={{height:12,backgroundColor:'#D4D4D4'}}></View>
            <View style = {{marginTop:10}}>
                <Text style={{textAlign:'center'}}>SAVE FOR LATER (0)</Text>
                <Text style={{borderTopWidth:0.5,marginTop:10, marginBottom:15}}/>
                <Text style={{textAlign:'center'}}>There are no items in save for later</Text>
            </View>
        </ScrollView>
        <View>
            <TouchableOpacity style = {styles.e}>
                <Text style = {{textAlign:'center'}}>CHECKOUT</Text>
            </TouchableOpacity>
        </View>
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
    d:{
        backgroundColor:'#D4D4D4',
        height:150,
        justifyContent:'space-around',
        marginTop:15
    },
    e:{
        backgroundColor:'yellow',
        height:40,
        width:250,
        justifyContent:'center',
        alignSelf:'center',
    }
})