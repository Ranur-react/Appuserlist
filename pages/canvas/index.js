import React, { Comment, Component } from 'react';
import {
  View, Text, StyleSheet, ScrollView, StatusBar, ScrollViewComponent, ImageBackground
} from 'react-native';
import { styles } from './assets/style';
import Home from './pages/Home';
import { showToastWithGravityAndOffset } from './components/_Toasview';
import { BgImage, UserImage } from './Tools/constants';


export default class App extends Component {
  constructor(props) {
    super(props);
  this.state={}
  }
  render() {
    
    return (
      <ImageBackground source={{ uri: BgImage }} resizeMode="cover" style={styles.Layout}>
        <StatusBar barStyle='dark-content' translucent backgroundColor='rgba(0,0,0,0)' />
      </ImageBackground>
    )
  }
}