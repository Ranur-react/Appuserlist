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
import {getData, updateData, deleteData} from '../../Tools/api';
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
  faCheckCircle,
  faRemoveFormat,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import {TextInput} from 'react-native-gesture-handler';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_jurusan: '',
      telpon: '',
      DisiplayPhone: false,
      alamat: '',
      DisiplayAlamat: false,
      email: '',
      DisiplayEamil: false,
    };
  }
  getDatafromBackend = e => {
    const earn = async v => {
      var P1 = await getData('jurusan');
      this.setState({jurusan: P1});
      var Pitcher = await getData('dosen/' + v);
      // this.setState({dataMahasiswa: Pitcher});
      console.log('================hasil tes tes====================');
      console.log(Pitcher);
      this.setState({
        data: Pitcher[0],
        nama: Pitcher[0].nama_dosen,
        pendidikan: Pitcher[0].pendidikan,
        alamat: Pitcher[0].alamat,
        email: Pitcher[0].email,
      });

      console.log('====================================');
    };
    earn(e);
  };

  UNSAFE_componentWillMount() {
    console.log('------>');
    console.log(this.props.route.params);
    if (this.props.route.params.value) {
      // this.setState({data: this.props.route.params.value});
      this.getDatafromBackend(this.props.route.params.value.id_dosen);
    }
  }
  render() {
    const piliJurusan = e => {
      this.setState({id_jurusan: e});
      console.log(e);
    };
const simpanUpdateData = (v) => {
  const earn = async (e) => {
    var data = {
      nama_dosen: this.state.nama,
      pendidikan: this.state.pendidikan,
      alamat: this.state.alamat,
      email: this.state.email,
    };

    var Pitcher = await updateData('dosen/'+e, data);
    if (Pitcher.status) {
      this.getDatafromBackend(this.props.route.params.value.id_dosen);
      showToastWithGravityAndOffset(Pitcher.message.success);
    }else{
    console.log(Pitcher);

    }
  };
  earn(v);
};
const exexDeleteData = v => {
  const earn = async e => {
    
    var Pitcher = await deleteData('dosen/' + e, '');

    if (Pitcher.status) {
      this.props.navigation.replace('DosenPage')
      showToastWithGravityAndOffset(Pitcher.message.success);
    } else {
      console.log(Pitcher);
    }
  };
  earn(v);
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
              exexDeleteData(this.state.data.id_dosen);
            }}
            style={styles.BoxFlatButton}>
            <View>
              <FontAwesomeIcon color="#52c234" icon={faTrashAlt} />
            </View>
            <Text>Remove</Text>
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
                source={{uri:UserImage}}></Image>
            </View>
          </View>
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
                          display: !this.state.DisiplayNama ? 'flex' : 'none',
                        },
                      ]}>
                      {this.state.nama}
                    </Text>

                    <TextInput
                      value={this.state.nama}
                      onChangeText={e => this.setState({nama: e})}
                      autoFocus={this.state.DisiplayNama}
                      style={[
                        {
                          display: 'none',
                          borderBottomColor: '#52c234',
                          borderBottomWidth: 1,
                          paddingVertical: 0,
                        },
                        styles.HeaderTitle,
                        {
                          display: !this.state.DisiplayNama ? 'none' : 'flex',
                        },
                      ]}></TextInput>
                    {/* 
                      Input Edit Telepone
                       */}
                    <TouchableOpacity
                      onPress={() => {
                        if (this.state.DisiplayNama) {
                          simpanUpdateData(this.state.data.id_dosen);
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
                  <View style={{alignItems: 'flex-start'}}>
                    <View style={styles.detailIcon}>
                      <FontAwesomeIcon
                        color="rgba(50,50,50,0.5)"
                        icon={faIdCardAlt}
                      />
                      <Text>
                        {' '}
                        Lecture ID. {this.props.route.params.value.id_dosen}
                      </Text>
                    </View>
                    {/* <View style={styles.detailIcon}>
                      <FontAwesomeIcon
                        color="rgba(50,50,50,0.5)"
                        icon={faLaptopCode}
                      />
                      <Text> {this.state.data.pendidikan}</Text>
                    </View> */}
                    {/* 
               
               Phone Details
               
                */}
                    <View style={styles.detailIcon}>
                      <FontAwesomeIcon color="green" icon={faLaptopCode} />
                      <Text
                        style={{
                          display: !this.state.DisiplayPhone ? 'flex' : 'none',
                        }}>
                        {' '}
                        {this.state.data.pendidikan}{' '}
                      </Text>
                      {/* 
                      Input Edit Telepone
                       */}
                      <TextInput
                        value={this.state.pendidikan}
                        onChangeText={e => this.setState({pendidikan: e})}
                        autoFocus={this.state.DisiplayPhone}
                        style={[
                          {
                            display: 'none',
                            borderBottomColor: '#52c234',
                            borderBottomWidth: 1,
                            paddingVertical: 0,
                          },
                          {
                            display: !this.state.DisiplayPhone
                              ? 'none'
                              : 'flex',
                          },
                        ]}></TextInput>
                      {/* 
                      Input Edit Telepone
                       */}
                      <TouchableOpacity
                        onPress={() => {
                          if (this.state.DisiplayPhone) {
                            simpanUpdateData(this.state.data.id_dosen);
                          }
                          this.setState({
                            DisiplayPhone: !this.state.DisiplayPhone,
                          });
                        }}>
                        <FontAwesomeIcon
                          color={!this.state.DisiplayPhone ? 'grey' : 'green'}
                          icon={
                            !this.state.DisiplayPhone ? faEdit : faCheckCircle
                          }
                        />
                      </TouchableOpacity>
                    </View>

                    {/* 
                end phone dispalay 
                 */}
                    <View style={styles.detailIcon}>
                      <FontAwesomeIcon
                        color="rgba(50,50,50,0.5)"
                        icon={faMapMarked}
                      />
                      <Text
                        style={{
                          display: !this.state.DisiplayAlamat ? 'flex' : 'none',
                        }}>
                        {' '}
                        {this.state.data.alamat}{' '}
                      </Text>
                      <TextInput
                        value={this.state.alamat}
                        onChangeText={e => this.setState({alamat: e})}
                        autoFocus={this.state.DisiplayAlamat}
                        style={[
                          {
                            display: 'none',
                            borderBottomColor: '#52c234',
                            borderBottomWidth: 1,
                            paddingVertical: 0,
                          },
                          {
                            display: !this.state.DisiplayAlamat
                              ? 'none'
                              : 'flex',
                          },
                        ]}></TextInput>
                      {/* 
                      Input Edit Telepone
                       */}
                      <TouchableOpacity
                        onPress={() => {
                          if (this.state.DisiplayAlamat) {
                            simpanUpdateData(this.state.data.id_dosen);
                          }
                          this.setState({
                            DisiplayAlamat: !this.state.DisiplayAlamat,
                          });
                        }}>
                        <FontAwesomeIcon
                          color={!this.state.DisiplayAlamat ? 'grey' : 'green'}
                          icon={
                            !this.state.DisiplayAlamat ? faEdit : faCheckCircle
                          }
                        />
                      </TouchableOpacity>
                    </View>

                    <View style={styles.detailIcon}>
                      <FontAwesomeIcon
                        color="rgba(50,50,50,0.8)"
                        icon={faMailBulk}
                      />
                      <Text
                        style={{
                          display: !this.state.DisiplayEamil ? 'flex' : 'none',
                        }}
                        onPress={() =>
                          Linking.openURL(`mailto:${this.state.data.email}`)
                        }>
                        {' '}
                        {this.state.data.email}{' '}
                      </Text>
                      <TextInput
                        value={this.state.email}
                        onChangeText={e => this.setState({email: e})}
                        autoFocus={this.state.DisiplayEamil}
                        style={[
                          {
                            display: 'none',
                            borderBottomColor: '#52c234',
                            borderBottomWidth: 1,
                            paddingVertical: 0,
                          },
                          {
                            display: !this.state.DisiplayEamil
                              ? 'none'
                              : 'flex',
                          },
                        ]}></TextInput>
                      {/* 
                      Input Edit Telepone
                       */}
                      <TouchableOpacity
                        onPress={() => {
                          if (this.state.DisiplayEamil) {
                            simpanUpdateData(this.state.data.id_dosen);
                          }
                          this.setState({
                            DisiplayEamil: !this.state.DisiplayEamil,
                          });
                        }}>
                        <FontAwesomeIcon
                          color={!this.state.DisiplayEamil ? 'grey' : 'green'}
                          icon={
                            !this.state.DisiplayEamil ? faEdit : faCheckCircle
                          }
                        />
                      </TouchableOpacity>
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
