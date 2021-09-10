import React, {Comment, Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollViewComponent,
  Linking,
  ImageBackground,
} from 'react-native';
import {styles} from '../../assets/style';
import Kotak from '../../components/Kotak';
import {showToastWithGravityAndOffset} from '../../components/_Toasview';
import {getData} from '../../Tools/api';
import SelectInputNative from '../../components/_comboBoxJurusan';

import {BgImage, UserImage} from '../../Tools/constants';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faAngleLeft,
  faAlignJustify,
  faPhone,
  faIdCardAlt,
  faMailBulk,
  faSave,
  faMapMarked,
  faLaptopCode,
  faEdit,
  faHandPointDown,
  faPhoneSquare,
} from '@fortawesome/free-solid-svg-icons';
import {TextInput} from 'react-native-gesture-handler';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_jurusan: '',
      data:{
        nama:'Rahmat Nur',
        nobp:'1720001',
        alamat:'Jl. Dhamar No. 8B',
        jurusan:'Sistem Komputer',
        email:'rahmatnur844@gmail.com',
        telpon:'083182647716'
      }
    };
  }


  render() {



    if (this.state.data) {
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
          <TouchableOpacity
            onPress={() =>    Linking.openURL(`tel:${this.state.data.telpon}`)}
            style={styles.BoxFlatButton}>
            <View>
              <FontAwesomeIcon color="#52c234" icon={faPhone} />
            </View>
            {/* <Text>Hubungi Saya</Text> */}
          </TouchableOpacity>
          <View style={styles.Header}>
            {/* // Back Button *Rq */}

            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={styles.HLeft}>
              <FontAwesomeIcon icon={faAngleLeft} />
            </TouchableOpacity>
            {
              // header Title *Rq
            }
            <View style={styles.HCenter}>
              <Text style={styles.HeaderTitle}>About Creator</Text>
              <Text style={styles.HeaderTitleDetail}></Text>
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
          <View style={styles.HAvatar}>
            <View style={styles.BoxAvatar}>
              <Image
                style={styles.ImageAvatar}
                source={require('./../../assets/images/ranur.png')}></Image>
            </View>
          </View>
          {/* // content *Rq */}
          <ScrollView style={[styles.ScrollFlex]}>
            <View style={styles.Container}>
              <View style={styles.SubContainer}>
                <View style={{alignItems: 'center'}}>
                  <View style={{alignItems: 'center'}}>
                    <Text style={styles.HeaderTitle}>
                      {this.state.data.nama}
                    </Text>
                  </View>
                  <View style={{alignItems: 'flex-start'}}>
                    <View style={styles.detailIcon}>
                      <FontAwesomeIcon
                        color="rgba(50,50,50,0.5)"
                        icon={faIdCardAlt}
                      />
                      <Text> Student ID. {this.state.data.nobp}</Text>
                    </View>
                    <View style={styles.detailIcon}>
                      <FontAwesomeIcon
                        color="rgba(50,50,50,0.5)"
                        icon={faLaptopCode}
                      />
                      <Text> {this.state.data.jurusan}</Text>
                    </View>
                   
                    <View style={styles.detailIcon}>
                      <FontAwesomeIcon
                        color="rgba(50,50,50,0.5)"
                        icon={faMapMarked}
                      />
                      <Text> {this.state.data.alamat}</Text>
                    </View>
                    <View style={styles.detailIcon}>
                      <FontAwesomeIcon
                        color="rgba(50,50,50,0.8)"
                        icon={faMailBulk}
                      />
                      <Text
                        onPress={() =>
                          Linking.openURL(`mailto:${this.state.data.email}`)
                        }>
                        {' '}
                        {this.state.data.email}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      );
    } else {
      return <View></View>;
    }
  }
}
