import React from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, TextInput, ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import RadioButtonRN from 'radio-buttons-react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const data = [
    {
      label: 'Nam'
     },
     {
      label: 'Nữ'
     }
    ];
export default function Join() {
    return(
        <ScrollView>
        <View style={{}}>
            <Text style={styles.a}>FIRST NAME</Text>
            <TextInput style = {styles.b}></TextInput>
            <Text style={styles.a}>LAST NAME</Text>
            <TextInput style = {styles.b}></TextInput>
            <Text style={styles.a}>DATE OF BIRTH (OPTIONAL)</Text>
            <TouchableOpacity style = {{flexDirection:'row', borderWidth:1,marginLeft:10, marginRight:10}}>
                <TextInput style = {{flex:1, color:'black'}}
                placeholder='MM/DD'></TextInput>
                <Ionicons name ="chevron-down-outline" size={35} color="black"/>
            </TouchableOpacity>
            <Text style={styles.a}>GENDER (OPTIONAL)</Text>
            <RadioButtonRN style = {{}}
                data={data}
                selectedBtn={(e) => console.log(e)}
                icon={
                    <MaterialIcons name ="radio-button-on" size={25} color="black" />
                    
                }
            />
            <Text style={styles.a}>MOBILE (OPTIONAL)</Text>
            <TextInput style={styles.b}></TextInput>
            <Text style={styles.a}>EMAIL ADDRESS</Text>
            <TextInput style={styles.b}></TextInput>
            <Text style={styles.a}>CONFIRM EMAIL ADDRESS</Text>
            <TextInput style={styles.b}></TextInput>
            <Text style={styles.a}>PASSWORD</Text>
            <TextInput style={styles.b}></TextInput>
            <Text style={styles.a}>CONFIRM PASSWORD</Text>
            <TextInput style={styles.b}></TextInput>

        </View>
        </ScrollView> 
    )
}
const styles = StyleSheet.create({
    a:{
        color:'gray',
        fontWeight:'bold',
        fontSize:13,
        marginTop:20,
        marginLeft:10
    },
    b:{
        borderWidth:1,
        marginLeft:10,
        marginRight:10
    },
})