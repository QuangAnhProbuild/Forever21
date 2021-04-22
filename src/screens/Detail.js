import React from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const DATA = [
  {
    photo: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw91f2d4aa/1_front_750/00430045-03.jpg?sw=400&sh=600',
  }
]

export default function Detail() {
    const renderItem = ({ item }) => (
        <View style={{ width: '100%', }}>
            <Image
        style={styles.imgStyle}
        source={{ uri: item.photo, }}
        />
        </View>
    );
    return (
        <View>
          <FlatList
            data={DATA}
            numColumns={2}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            columnWrapperStyle={{ justifyContent: 'space-around', marginBottom: 20, flex: 1 }}
            style={{ marginBottom: 15 }}
          />
          <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'white' }}>
          <Ionicons name="ios-ellipse-outline" size={40} color="black" />
        <TouchableOpacity style={styles.a}>
          <Text style={styles.b}>ADD TO CART</Text>
        </TouchableOpacity>
        <Ionicons name="heart-outline" size={40} color="White" />
        </View>
        </View>
      )
    }
    
    const styles = StyleSheet.create({
      imgStyle: {
        height: 550,
        width: 'auto',
      },
      a:{ 
        flex:1,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor:'black',
        width:220,
        height:50,
        marginLeft:20,
        marginRight:20
      },
      b:{
          color:'#ffffff'
      }
    });