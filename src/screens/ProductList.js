import React, {useEffect, useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios'
import { getProduct } from '../services/Api';
import {getImage} from '../utils'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// const DATA = [
//   {
//     id: 1,
//     photo: 'https://anhdepblog.com/wp-content/uploads/2020/09/anh-gai-xinh-facebook-21.jpg',
//     name: 'ao 2 day',
//     price: '2000$',
//     star: 4
//   }
// ]
const DATA = Array(10).fill('').map((e, i) => ({
  id: i + 1,
  photo: 'https://anhdepblog.com/wp-content/uploads/2020/09/anh-gai-xinh-facebook-21.jpg',
  name: 'ao 2 day',
  price: '2000$',
  heart: i % 2 === 0
}))

export default function ProductList({navigation}) {
    const [product, setProduct] = useState()
    useEffect(() => {
        //alert('hello')
        const getApiproduct = async () => {
            const result = await getProduct()
            console.log('result', result)
            setProduct(result.data.data)
        }

   getApiproduct() 
}, [])

  const renderItem = ({ item }) => (
    <View style={{ width: '45%', }}>
      <TouchableOpacity onPress={()=> navigation.navigate('Detail')}>
      <Image
        style={styles.imgStyle}
        source={{ uri: getImage(item.images?.[0]) }}
      />
      </TouchableOpacity>
      <View style={styles.rowPrice}>
        <Text>{item.price}</Text>
        <Ionicons name="heart" size={30} color={item.heart ? 'red' : 'grey'} />
      </View>
      <Text>{item.name}</Text>
    </View>
  );
  
  return (
    <View>
      <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'grey' }}>
        <TouchableOpacity style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>SORT</Text>
          <Ionicons name="chevron-down-outline" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ textAlign: 'center', }}>REFINE</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ textAlign: 'center', marginTop: 15, marginBottom: 20 }}>405 styles</Text>
      <FlatList
        data={product}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item._id?.toString()}
        columnWrapperStyle={{ justifyContent: 'space-around', marginBottom: 20, flex: 1 }}
        style={{ marginBottom: 100 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  rowPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  imgStyle: {
    height: 300,
    width: 'auto'
  }
});
