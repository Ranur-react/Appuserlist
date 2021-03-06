import React, {Comment, Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  ScrollViewComponent,
  Image,
  ImageBackground,
} from 'react-native';
import {styles} from './../../assets/style';
import {showToastWithGravityAndOffset} from './../../components/_Toasview';
import {BgImage, UserImage} from './../../Tools/constants';
import LinearGradient from 'react-native-linear-gradient';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
           setTimeout(async () => {
              setTimeout(() => {
                this.props.navigation.replace('HomePages');
              }, 2000);
          }, 2000);
    return (
      <LinearGradient
        colors={['#FFFFFF', '#6DD5FA', '#6DD5FA']}
        style={styles.Layout}>

          <StatusBar
            barStyle="dark-content"
            translucent
            backgroundColor="rgba(0,0,0,0)"
          />
          <View style={styles.SplasIconBox}>
            <Image
              resizeMode="center"
              style={styles.ImageAvatar}
              source={require('./../../assets/images/2STMIK-Jayanusa-Padang-removebg-preview.png')}></Image>
          </View>
      </LinearGradient>
    );
  }
}
