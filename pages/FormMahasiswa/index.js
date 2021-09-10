import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
  ScrollViewComponent,
  ImageBackground,
} from 'react-native';
import {styles} from './../../assets/style';
import Kotak from './../../components/Kotak';
import HeaderMenu from './../../components/HeaderMenu';
import SelectInputNative from '../../components/_comboBoxJurusan';
import {showToastWithGravityAndOffset} from './../../components/_Toasview';
import {BgImage, UserImage, SativaImage} from './../../Tools/constants';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import LinearGradient from 'react-native-linear-gradient';
import {
  faAlignJustify,
  faAngleLeft,
  faMailBulk,
  faSave,
  faIdCardAlt,
  faUmbrella,
  faUserGraduate,
  faMapMarked,
  faPhone,
  faCoffee,
} from '@fortawesome/free-solid-svg-icons';
import {getData, insertData} from './../../Tools/api';

export default class MahasiswaPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nobp: '',
      nama: '',
      phone: '',
      id_jurusan: '',
      alamat: '',
      email:'',
    };
  }
  getDatafromBackend = () => {
    const earn = async () => {
      var Pitcher = await getData('jurusan');
      this.setState({jurusan: Pitcher});
    };
    earn();
  };
  UNSAFE_componentWillMount() {
    this.getDatafromBackend();
  }
  render() {
      const SimpanData=()=>{
              const earn = async () => {
                var data = {
                  nobp: this.state.nobp,
                  nama: this.state.nama,
                  alamat: this.state.alamat,
                  telpon: this.state.phone,
                  email: this.state.email,
                  jurusan_id: this.state.id_jurusan,
                };
                var Pitcher = await insertData('mahasiswa', data);
                if (Pitcher.status){
                  showToastWithGravityAndOffset(Pitcher.message.success);
                  this.props.navigation.push('MahasiswaPage');
                }
              };
              earn();
      }
    const piliJurusan = e => {
      this.setState({id_jurusan: e});
    console.log(e);
    };
    return (
      <LinearGradient
        colors={['#FFFFFF', '#6DD5FA', '#6DD5FA']}
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
            <FontAwesomeIcon color="#52c234" icon={faSave} />
          </View>
          <Text>Save</Text>
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
            <Text
              onPress={() => showToastWithGravityAndOffset("This's Title")}
              style={styles.HeaderTitle}>
              FORM TAMBAH MAHASISWA
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
        <View style={styles.HAvatar}>
          <View style={styles.BoxAvatar}>
            <Image style={styles.ImageAvatar} source={{uri: UserImage}}></Image>
          </View>
        </View>
        {/* // content *Rq */}
        <ScrollView>
          <View style={[styles.ScrollFlex]}>
            <View style={styles.Container}>
              <View style={styles.SubContainer}>
                <View style={styles.FromGroub}>
                  <View style={styles.detailIcon}>
                    <FontAwesomeIcon
                      color="rgba(50,50,50,0.5)"
                      icon={faIdCardAlt}
                    />
                    <Text> Student ID. </Text>
                  </View>
                  <TextInput
                    value={this.state.nobp}
                    onChangeText={e => this.setState({nobp: e})}
                    placeholder="Inputkan Nobp"
                    placeholderTextColor="rgba(50,50,50,0.3)"
                    style={styles.TextInput}
                    keyboardType="number-pad"
                  />
                </View>

                <View style={styles.FromGroub}>
                  <View style={styles.detailIcon}>
                    <FontAwesomeIcon
                      color="rgba(50,50,50,0.5)"
                      icon={faUserGraduate}
                    />
                    <Text> Student Names </Text>
                  </View>
                  <TextInput
                    value={this.state.nama}
                    onChangeText={value => this.setState({nama: value})}
                    placeholder="Inputkan Nama Mahasiswa"
                    placeholderTextColor="rgba(50,50,50,0.3)"
                    style={styles.TextInput}
                  />
                </View>
                <View style={styles.FromGroub}>
                  <View style={styles.detailIcon}>
                    <FontAwesomeIcon
                      color="rgba(50,50,50,0.5)"
                      icon={faMailBulk}
                    />
                    <Text> Jurusan </Text>
                  </View>
                  {
                    <SelectInputNative
                      lable="Pilih Jurusan"
                      lebar={'100%'}
                      style={styles.ComboInput}
                      selectedValue={this.state.id_jurusan}
                      onSelectData={e => piliJurusan(e)}
                      data={this.state.jurusan}
                    />
                  }
                </View>
                <View style={styles.FromGroub}>
                  <View style={styles.detailIcon}>
                    <FontAwesomeIcon
                      color="rgba(50,50,50,0.5)"
                      icon={faMapMarked}
                    />
                    <Text> Address </Text>
                  </View>
                  <TextInput
                    value={this.state.alamat}
                    onChangeText={value => this.setState({alamat: value})}
                    placeholder="Inputkan Alamat Mahasiswa"
                    placeholderTextColor="rgba(50,50,50,0.3)"
                    style={styles.TextInput}
                  />
                </View>

                <View style={styles.FromGroub}>
                  <View style={styles.detailIcon}>
                    <FontAwesomeIcon
                      color="rgba(50,50,50,0.5)"
                      icon={faPhone}
                    />
                    <Text> Phone </Text>
                  </View>
                  <TextInput
                    value={this.state.telp}
                    onChangeText={value => this.setState({phone: value})}
                    placeholder="ex: 083182647716"
                    placeholderTextColor="rgba(50,50,50,0.3)"
                    keyboardType="number-pad"
                    style={styles.TextInput}
                  />
                </View>
                <View style={styles.FromGroub}>
                  <View style={styles.detailIcon}>
                    <FontAwesomeIcon
                      color="rgba(50,50,50,0.5)"
                      icon={faMailBulk}
                    />
                    <Text> Email </Text>
                  </View>
                  <TextInput
                    value={this.state.telp}
                    onChangeText={value => this.setState({email: value})}
                    placeholder="ex: user@example.com"
                    placeholderTextColor="rgba(50,50,50,0.3)"
                    style={styles.TextInput}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    );
  }
}
