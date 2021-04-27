import React from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Me() {
    return (
        <ScrollView>
        <View style={{ flexDirection: 'row', borderBottomWidth: 0.5, borderBottomColor: 'Black'}}>
            <Text style = {styles.c}>MY ACCOUNT</Text>
            <Ionicons name ="settings-sharp" size={35} color="black" />
        </View>
        <Text style = {styles.d}> Hello, Quang Anh</Text>
        <TouchableOpacity>
        <View style ={{flexDirection: 'row', height:60, marginTop:25}}>
            <View style ={styles.h}>
            <Text style ={styles.f}>MY ORDERS</Text>
            <Text style ={styles.g}>Order Status, History and Tracking</Text>
            </View>
            <Ionicons name ="chevron-forward-outline" size={35} color="black" />
        </View> 
        </TouchableOpacity>
        <TouchableOpacity>
        <View style ={{flexDirection: 'row', height:60, marginTop:25}}>
            <View style ={styles.h}>
            <Text style ={styles.f}>PROFILE</Text>
            <Text style ={styles.g}>Manage user information</Text>
            </View>
            <Ionicons name ="chevron-forward-outline" size={35} color="black" />
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style ={{flexDirection: 'row', height:60, marginTop:25}}>
            <View style ={styles.h}>
            <Text style ={styles.f}>PASSWORD</Text>
            <Text style ={styles.g}>Manage password</Text>
            </View>
            <Ionicons name ="chevron-forward-outline" size={35} color="black" />
        </View> 
        </TouchableOpacity>
        <TouchableOpacity>
        <View style ={{flexDirection: 'row', height:60, marginTop:25}}>
            <View style ={styles.h}>
            <Text style ={styles.f}>MANAGE PREFERENCE</Text>
            <Text style ={styles.g}>Maketing preference for email and push notification</Text>
            </View>
            <Ionicons name ="chevron-forward-outline" size={35} color="black" />
        </View> 
        </TouchableOpacity>
        <TouchableOpacity>
        <View style ={{flexDirection: 'row', height:60, marginTop:25}}>
            <View style ={styles.h}>
            <Text style ={styles.f}>ADDRESS BOOK</Text>
            <Text style ={styles.g}>Manage shipping and billing address</Text>
            </View>
            <Ionicons name ="chevron-forward-outline" size={35} color="black" />
        </View> 
        </TouchableOpacity>
        <TouchableOpacity>
        <View style ={{flexDirection: 'row', height:60, marginTop:25}}>
            <View style ={styles.h}>
            <Text style ={styles.f}>WALLET</Text>
            <Text style ={styles.g}>Manage payment type methods</Text>
            </View>
            <Ionicons name ="chevron-forward-outline" size={35} color="black" />
        </View>
        </TouchableOpacity>
        <TouchableOpacity> 
        <View style ={{flexDirection: 'row', height:60, marginTop:25}}>
            <View style ={styles.h}>
            <Text style ={styles.f}>FOREVER 21 CREDIT CARD</Text>
            <Text style ={styles.g}>Manage F21 Credit Card</Text>
            </View>
            <Ionicons name ="chevron-forward-outline" size={35} color="black" />
        </View> 
        </TouchableOpacity> 
        </ScrollView>
    )
}
    const styles = StyleSheet.create({
        c:{
            flex:1,
            fontWeight:'bold',
            fontSize:20,
            marginBottom:10,
            textAlign:'center',
            marginTop:10,
            marginLeft:35,
        },
        d:{
            width:'auto',
            height:55,
            backgroundColor:'#e5e3da',
            textAlign:'center',
            textAlignVertical:'center'
        },
        h:{
            flex:1,
        },
        g:{
            marginLeft:15,
            fontSize:12,
            color:'#a0997e'
        },
        f:{
            marginLeft:15,
        },
});

