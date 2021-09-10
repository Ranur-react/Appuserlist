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
import {getData, updateData,deleteData} from '../../Tools/api';

import SelectInputNative from '../../components/_comboBoxDosen';

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
  faUserInjured,
  faClock,
  faCheckCircle,
  faTrash,
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
      var Pitcher = await getData('matakuliah/' + v);
      // this.setState({dataMahasiswa: Pitcher});
      console.log('================hasil tes tes====================');
      console.log(Pitcher);
      this.setState({
        data: Pitcher[0],
        id_dosen: Pitcher[0].id_dosen,
        nama: Pitcher[0].nama_matakuliah,
        sks: Pitcher[0].sks,
      });
      console.log('====================================');
      var Pitcher2 = await getData('dosen');
      this.setState({dosen: Pitcher2});
    };
    earn(e);
  };

  UNSAFE_componentWillMount() {
    if (this.props.route.params.value) {
      this.getDatafromBackend(this.props.route.params.value.id_matakuliah);
    }
  }
  render() {
    const simpanUpdateData = v => {
      const earn = async e => {
        var data = {
          nama_matakuliah: this.state.nama,
          sks: this.state.sks,
          alamat: this.state.alamat,
          dosen_id: this.state.id_dosen,
        };

        var Pitcher = await updateData('matakuliah/' + e, data);
        if (Pitcher.status) {
          this.getDatafromBackend(this.props.route.params.value.id_matakuliah);
          showToastWithGravityAndOffset(Pitcher.message.success);
        } else {
          console.log(Pitcher);
        }
      };
      earn(v);
    };
    const exexDeleteData = v => {
      const earn = async e => {
        var Pitcher = await deleteData('matakuliah/' + e, '');

        if (Pitcher.status) {
          this.props.navigation.push('MatakuliahPage');
          showToastWithGravityAndOffset(Pitcher.message.success);
        } else {
          console.log(Pitcher);
        }
      };
      earn(v);
    };
        const piliDosen = e => {
          this.setState({id_dosen: e});
          console.log(e);
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
            onPress={() => {
              if (!this.state.DisiplayNama) {
                exexDeleteData(this.state.data.id_matakuliah);
              } else {
                simpanUpdateData(this.state.data.id_matakuliah);
              }
            }}
            style={styles.BoxFlatButton}>
            <View>
              <FontAwesomeIcon
                color={!this.state.DisiplayNama ? '#ef5350' : '#52c234'}
                icon={!this.state.DisiplayNama ? faTrash : faCheckCircle}
              />
            </View>
            <Text>{!this.state.DisiplayNama ? 'Hapus' : 'Simpan'}</Text>
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
          {/* // content *Rq */}
          <ScrollView style={[styles.ScrollFlex]}>
            <View style={styles.Container}>
              <View style={styles.SubContainer}>
                <View style={{alignItems: 'center'}}>
                  <View style={{alignItems: 'center'}}>
                    <Text
                      style={[
                        styles.HeaderTitle,
                        {
                          display: !this.state.DisiplayNamaTitle
                            ? 'flex'
                            : 'none',
                        },
                      ]}>
                      {this.state.data.nama_matakuliah}
                    </Text>

                    <TextInput
                      value={this.state.nama}
                      onChangeText={e => this.setState({nama: e})}
                      autoFocus={this.state.DisiplayNamaTitle}
                      style={[
                        {
                          display: 'none',
                          borderBottomColor: '#52c234',
                          borderBottomWidth: 1,
                          paddingVertical: 0,
                        },
                        styles.HeaderTitle,
                        {
                          display: !this.state.DisiplayNamaTitle
                            ? 'none'
                            : 'flex',
                        },
                      ]}></TextInput>
                    {/* 
                      Input Edit Telepone
                       */}
                    <TouchableOpacity
                      onPress={() => {
                        if (this.state.DisiplayNamaTitle) {
                          simpanUpdateData(this.state.data.id_matakuliah);
                          
                        }
                        this.setState({
                          DisiplayNamaTitle: !this.state.DisiplayNamaTitle,
                        });
                      }}>
                      <FontAwesomeIcon
                        color={!this.state.DisiplayNamaTitle ? 'grey' : 'green'}
                        icon={
                          !this.state.DisiplayNamaTitle ? faEdit : faCheckCircle
                        }
                      />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      alignItems: 'flex-start',
                      display: !this.state.DisiplayNama ? 'flex' : 'none',
                    }}>
                    <View style={styles.detailIcon}>
                      <Text> {this.state.data.nama_dosen} </Text>
                      <FontAwesomeIcon
                        color="rgba(50,50,50,0.5)"
                        icon={faUserInjured}
                      />
                      <Text> {this.state.data.sks} SKS </Text>
                      <FontAwesomeIcon
                        color="rgba(50,50,50,0.5)"
                        icon={faClock}
                      />
                    </View>
                  </View>
                  <View
                    style={[
                      {
                        alignItems: 'center',
                        display: !this.state.DisiplayNama ? 'none' : 'flex',
                      },
                    ]}>
                    <View
                      style={[
                        styles.FromGroub,
                        {alignItems: 'center', justifyContent: 'center'},
                      ]}>
                      <View style={styles.detailIcon}>
                        <FontAwesomeIcon
                          color="rgba(50,50,50,0.5)"
                          icon={faClock}
                        />
                        <Text> Jumlah SKS </Text>
                      </View>
                      <TextInput
                        value={this.state.sks}
                        onChangeText={value => this.setState({sks: value})}
                        placeholder="Inputkan Jumlah SKS"
                        placeholderTextColor="rgba(50,50,50,0.3)"
                        style={[styles.TextInput, {textAlign: 'center'}]}
                        keyboardType="number-pad"
                      />
                    </View>
                    <View
                      style={[
                        styles.FromGroub,
                        {alignItems: 'center', justifyContent: 'center'},
                      ]}>
                      <View style={styles.detailIcon}>
                        <FontAwesomeIcon
                          color="rgba(50,50,50,0.5)"
                          icon={faClock}
                        />
                        <Text> Dosen Pengajar </Text>
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
                  </View>
                  <View style={{alignItems: 'center'}}>
                    <TouchableOpacity
                      onPress={() => {
                        if (this.state.DisiplayNama) {
                          // simpanUpdateData(this.state.data.nobp);
                        }
                        this.setState({
                          DisiplayNama: !this.state.DisiplayNama,
                        });
                      }}>
                      <FontAwesomeIcon
                        color={!this.state.DisiplayNama ? 'grey' : 'green'}
                        icon={!this.state.DisiplayNama ? faEdit : faCheckCircle}
                      />
                    </TouchableOpacity>
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
