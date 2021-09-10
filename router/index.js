import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
// import Toyota from './../pages/Toyota';
import Splash from './../pages/splash';
import Home from './../pages/Home';
import MahasiswaPage from './../pages/Mahasiswa';
import DetailUser from './../pages/DetailMahasiswa';
import DetailDosen from './../pages/DetailDosen';
import DosenPage from './../pages/Dosen';
import MatakuliahPage from './../pages/Matakuliah';
import FormMahasiswaPage from './../pages/FormMahasiswa';
import FormDosenPage from './../pages/FormDosen';
import FormMatakuliahPage from './../pages/FormMatakuliah';
import DetaiMatakuliah from './../pages/DetaiMatakuliah';
import About from './../pages/About';

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
          name="DetailDosenPage"
          component={DetailDosen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MahasiswaPage"
          component={MahasiswaPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DosenPage"
          component={DosenPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MatakuliahPage"
          component={MatakuliahPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FormMahasiswaPage"
          component={FormMahasiswaPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FormDosenPage"
          component={FormDosenPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FormMatakuliahPage"
          component={FormMatakuliahPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetaiMatakuliah"
          component={DetaiMatakuliah}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AboutPage"
          component={About}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }
}
export default Router
