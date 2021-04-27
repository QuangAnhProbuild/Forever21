// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/Home'
import ProductList from './src/screens/ProductList'
import Detail from './src/screens/Detail'
import WishList from './src/screens/WishList'
import Cart from './src/screens/Cart'
import Me from './src/screens/Me'
import Join from './src/screens/Join'
import Login from './src/screens/Login'
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Join" component={Join} />
      <Stack.Screen name="WishLish" component={WishList} />
      <Stack.Screen name="Me" component={Me} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  )
}



export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home-sharp' : 'home-outline';
            } else if (route.name === 'WishList') {
              iconName = focused ? 'heart-sharp' : 'heart-outline';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'lock-closed-sharp' : 'lock-closed-outline';
            } else if (route.name === 'Me') {
              iconName = focused ? 'md-person-sharp' : 'md-person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="WishList" component={WishList} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Me" component={Me} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}