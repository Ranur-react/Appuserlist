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
} from '@fortawesome/free-solid-svg-icons';
import {TextInput} from 'react-native-gesture-handler';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_jurusan: '',
      DisiplayPhone: false,
    };
  }
  getDatafromBackend = e => {
    const earn = async v => {
      var P1 = await getData('jurusan');
      this.setState({jurusan: P1});
      var Pitcher = await getData('mahasiswa/' + v);
      // this.setState({dataMahasiswa: Pitcher});
      console.log('================hasil tes tes====================');
      console.log(Pitcher);
      this.setState({data: Pitcher[0]});
      console.log('====================================');
    };
    earn(e);
  };

  UNSAFE_componentWillMount() {
    console.log('------>');
    console.log(this.props.route.params);
    if (this.props.route.params.value) {
      // this.setState({data: this.props.route.params.value});
      this.getDatafromBackend(this.props.route.params.value.nobp);
    }
  }
  render() {
    const piliJurusan = e => {
      this.setState({id_jurusan: e});
      console.log(e);
    };
    const PhoneDisplay = () => {
      if (!this.DisiplayPhone) {
        return (
          <View style={styles.detailIcon}>
            <FontAwesomeIcon color="green" icon={faPhone} />
            <Text
              style={{display: !this.DisiplayPhone ? 'flex' : 'none'}}
              onPress={() => Linking.openURL(`tel:${this.state.data.telpon}`)}>
              {' '}
              {this.state.data.telpon}{' '}
            </Text>
            <TextInput
              value={this.state.data.telpon}
              style={[
                {
                  display: 'none',
                  borderBottomColor: '#52c234',
                  borderBottomWidth: 1,
                  paddingVertical: 0,
                },
                {display: !this.DisiplayPhone ? 'none' : 'flex'},
              ]}></TextInput>
            <TouchableOpacity
              onPress={() => {
                this.setState({DisiplayPhone: !this.DisiplayPhone});
                alert('Data belum tampil');
              }}>
              <FontAwesomeIcon
                color={!this.DisiplayPhone ? 'grey' : 'green'}
                icon={faEdit}
              />
            </TouchableOpacity>
          </View>
        );
      } else {
        <View style={styles.detailIcon}>
          <FontAwesomeIcon color="green" icon={faPhone} />
          <Text
            style={{display: !this.DisiplayPhone ? 'flex' : 'none'}}
            onPress={() => Linking.openURL(`tel:${this.state.data.telpon}`)}>
            {' '}
            {this.state.data.telpon}{' '}
          </Text>
          <TextInput
            value={this.state.data.telpon}
            style={[
              {
                display: 'none',
                borderBottomColor: '#52c234',
                borderBottomWidth: 1,
                paddingVertical: 0,
              },
              {display: !this.DisiplayPhone ? 'none' : 'flex'},
            ]}></TextInput>
          <TouchableOpacity
            onPress={() => {
              this.setState({DisiplayPhone: !this.DisiplayPhone});
              alert(' Data Tampil');
            }}>
            <FontAwesomeIcon
              color={!this.DisiplayPhone ? 'grey' : 'green'}
              icon={faEdit}
            />
            <Text>Tampil Edit Form</Text>
          </TouchableOpacity>
        </View>;
      }
    };

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
            onPress={() => SimpanData()}
            style={styles.BoxFlatButton}>
            <View>
              <FontAwesomeIcon color="#52c234" icon={faEdit} />
            </View>
            <Text>Edit</Text>
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
              <Text style={styles.HeaderTitle}>Details</Text>
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
                source={require('./../../assets/images/2STMIK-Jayanusa-Padang-removebg-preview.png')}></Image>
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
                      <Text> {this.state.data.nama_jurusan}</Text>
                    </View>
                    {/* 
               
               Phone Details
               
                */}
                    <PhoneDisplay />

                    {/* 
                end phone dispalay 
                 */}
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
