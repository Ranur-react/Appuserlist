import React, {Comment, Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  ScrollViewComponent,
  ImageBackground,
} from 'react-native';
import {styles} from './../assets/style';
import Kotak from './../components/Kotak';
import HeaderMenu from './../components/HeaderMenu';
import {showToastWithGravityAndOffset} from './../components/_Toasview';
import {BgImage, UserImage, SativaImage} from './../Tools/constants';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faAlignJustify,
  faAngleLeft,
  faBook,
  faBrain,
  faCamera,
  faCoffee,
  faLaptopCode,
  faUmbrella,
} from '@fortawesome/free-solid-svg-icons';
import {getData} from './../Tools/api';
import Mahasiswa from './Mahasiswa';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ImageBackground
        source={{uri: BgImage}}
        resizeMode="cover"
        style={styles.Layout}>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="rgba(0,0,0,0)"
        />
        <View style={styles.Header}>
          {/* // Back Button *Rq */}

          <TouchableOpacity
            onPress={() =>
              showToastWithGravityAndOffset('Ini Adalah Halaman Utama')
            }
            style={styles.HLeft}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </TouchableOpacity>
          {
            // header Title *Rq
          }
          <View style={styles.HCenter}>
            <Text
              onPress={() => showToastWithGravityAndOffset("This's Title")}
              style={styles.HeaderTitle}>
              HOME
            </Text>
            <Text
              onPress={() =>
                showToastWithGravityAndOffset("This's Deskcriptions of Title")
              }
              style={styles.HeaderTitleDetail}>
              Jayanusa College of Informatics Management
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => showToastWithGravityAndOffset('Ini Adalah Menu')}
            style={styles.HLeft}>
            <FontAwesomeIcon icon={faAlignJustify} />
          </TouchableOpacity>
        </View>
        {
          // header menu *JS
        }
        <View>
          <HeaderMenu />
        </View>
        {/* // content *Rq */}
        <ScrollView></ScrollView>
      </ImageBackground>
    );
  }
}
