import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './../pages/splash';
import Home from './../pages/Home';
import DetailUser from './../pages/DetailMahasiswa';
// import Toyota from './../pages/Toyota';
import MahasiswaPage from './../pages/Mahasiswa';
import FormMahasiswaPage from './../pages/FormMahasiswa';

const Stack = createStackNavigator();


class Router extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomePages"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Detail"
          component={DetailUser}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MahasiswaPage"
          component={MahasiswaPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FormMahasiswaPage"
          component={FormMahasiswaPage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }
}
export default Router
