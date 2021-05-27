import React from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, ScrollView, TextInput, Button} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Home({navigation}) {
  return(
    <ScrollView>
      <View style = {{flexDirection:'row',height:50}}>
        <TouchableOpacity style ={{alignSelf:'center'}}>
          <Ionicons style={{}} name ="reorder-three-outline" size={30} color="black" />
        </TouchableOpacity>
        <Text style = {{fontSize:22, alignSelf:'center',marginLeft:100}}>FOREVER 21</Text>
      </View>
      <View style={styles.searchSection}>
        <Ionicons style={styles.searchIcon} name="ios-search" size={20} color="#000"/>
        <TextInput
        style={styles.input}
        placeholder="Search"
        onChangeText={(searchString) => {this.setState({searchString})}}
        underlineColorAndroid="transparent"
        />
        <TouchableOpacity>
        <Ionicons style={styles.a} name="md-mic-outline" size={25} color="#000"/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Ionicons style={styles.b} name="barcode-sharp" size={25} color="#000"/>
        </TouchableOpacity>
      </View>
      <Text style = {styles.c}>All Special Offers(12)</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ProductList')}>
      <Image
        style={styles.d}
        source={{
          uri: 'https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/121726907_1306639199689597_8682660614663370520_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=1yRBKBe2WFgAX8tMTQt&_nc_ht=scontent.fhan14-2.fna&oh=adbecce60c2dffaaca3d7857dc13cd1a&oe=60ADFFA8',
        }}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ProductList')}>
      <Image
        style={{height:250, width:'auto', marginTop:10}}
        source={{
          uri: 'https://scontent.fpnh22-1.fna.fbcdn.net/v/t1.6435-9/178396633_823959741833943_9091597728023307618_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Rut3f4WDI8MAX-rjMOD&_nc_ht=scontent.fpnh22-1.fna&oh=d4010a890e402ca6040bde8562fe95e8&oe=60D19930',
        }}
      />
      </TouchableOpacity>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6E6E6',
},
searchIcon: {
    padding: 10,
},
input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#E6E6E6',
},
a:{
  paddingTop: 10,
  paddingRight: 0,
  paddingBottom: 10,
  paddingLeft: 170,
},
b:{
  marginRight:25,
  marginLeft:15
},
c:{
  color:'#A4A4A4',
  textAlign:'center',
  fontSize:13,
  marginTop:15,
  marginBottom:15
},
d:{
  width:'auto',
  height:250,
},
})