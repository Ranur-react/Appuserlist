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
import {styles} from '../../assets/style';
import Kotak from '../../components/Kotak';
import HeaderMenu from '../../components/HeaderMenu';
import SelectInputNative from '../../components/_comboBoxDosen';
import {showToastWithGravityAndOffset} from '../../components/_Toasview';
import {BgImage, UserImage, SativaImage} from '../../Tools/constants';
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
  faBookOpen,
} from '@fortawesome/free-solid-svg-icons';
import {getData, insertData} from '../../Tools/api';

export default class MahasiswaPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      nama: '',
      sks: '',
      id_dosen: '',
    };
  }
  getDatafromBackend = () => {
    const earn = async () => {
      var Pitcher = await getData('dosen');
      this.setState({dosen: Pitcher});
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
                  id_matakuliah: this.state.id,
                  nama_matakuliah: this.state.nama,
                  sks: this.state.sks,
                  dosen_id: this.state.id_dosen,
                };
                var Pitcher = await insertData('matakuliah', data);
                if (Pitcher.status){
                  showToastWithGravityAndOffset(Pitcher.message.success);
                  this.props.navigation.push('MatakuliahPage');
                  this.setState({
                    id: '',
                    nama: '',
                    sks: '',
                    id_dosen: '',
                  });
                }
              };
              earn();
      }
    const piliDosen = e => {
      this.setState({id_dosen: e});
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
              FORM TAMBAH MATAKULIAH
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
        {/* <View style={styles.HAvatar}>
          <View style={styles.BoxAvatar}>
            <Image
              style={styles.ImageAvatar}
              source={require('./../../assets/images/ranur.png')}></Image>
          </View>
        </View> */}
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
                    <Text> ID Matakuliah . </Text>
                  </View>
                  <TextInput
                    value={this.state.id}
                    onChangeText={e => this.setState({id: e})}
                    placeholder="Inputkan ID Matakuliah"
                    placeholderTextColor="rgba(50,50,50,0.3)"
                    style={styles.TextInput}
                    keyboardType="number-pad"
                  />
                </View>

                <View style={styles.FromGroub}>
                  <View style={styles.detailIcon}>
                    <FontAwesomeIcon
                      color="rgba(50,50,50,0.5)"
                      icon={faBookOpen}
                    />
                    <Text> Nama Matakuliah </Text>
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
                    <Text> Dosoen Pengajar </Text>
                  </View>
                  {
                    <SelectInputNative
                      lable="Pilih Dosen"
                      lebar={'100%'}
                      style={styles.ComboInput}
                      selectedValue={this.state.id_dosen}
                      onSelectData={e => piliDosen(e)}
                      data={this.state.dosen}
                    />
                  }
                </View>
                <View style={styles.FromGroub}>
                  <View style={styles.detailIcon}>
                    <FontAwesomeIcon
                      color="rgba(50,50,50,0.5)"
                      icon={faMapMarked}
                    />
                    <Text> Jumlah SKS </Text>
                  </View>
                  <TextInput
                    value={this.state.sks}
                    onChangeText={value => this.setState({sks: value})}
                    placeholder="Inputkan Jumlah SKS"
                    placeholderTextColor="rgba(50,50,50,0.3)"
                    style={styles.TextInput}
                    keyboardType="number-pad"
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
