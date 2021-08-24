import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { WARNA_UTAMA, WARNA_DISABLE, WARNA_SEKUNDER, WARNA_TEKS, TEKS_SIZE, TEKS_SIZE_TITTLE } from '../../utils/constant'
import { IconDataUser, IconInputData, IconLaporan, IconMasjid } from '../../assets'

class ItemInput extends Component {
  constructor(props) {
    super(props);
  }
  UNSAFE_componentWillMount() {
    // this.LoadData();
  }
  inputdata = () => {
    this.props.navprops.navigate('InputDataPage')
  }

  laporan = () => {
    this.props.navprops.navigate('LaporanPage')
  }

  forminputuser = () => {
    this.props.navprops.navigate('FormInputDataUser')
  }

  inputprofilmasjid = () => {
    this.props.navprops.navigate('FormInputDataProfilMasjid')
  }

  render() {
    if (!this.props.data) {
      return (
        <View>
        </View>
      )
    } else {
      if (this.props.data.login.data[0].level_user == 1) {
        return (
          <ScrollView style={styles.container}>
            <View>
              <Text style={styles.txtjudul}>Menu ( {!this.props.data ? '' : this.props.data.login.data[0].nama_level})</Text>
            </View>

            <TouchableOpacity key="99" activeOpacity={0.6} style={styles.card} onPress={this.forminputuser}>
              <IconDataUser />
              <Text style={styles.text}>Data User</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6} style={styles.card} onPress={this.inputdata}>
              <IconInputData />
              <Text style={styles.text}>Input Data</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.6} style={styles.card} onPress={this.inputprofilmasjid}>
              <IconMasjid />
              <Text style={styles.text}>Profil Masjid</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.6} style={styles.card} onPress={this.laporan}>
              <IconLaporan />
              <Text style={styles.text}>Laporan</Text>
            </TouchableOpacity>

          </ScrollView>
        )

      } 
      else if (this.props.data.login.data[0].level_user == 2) {
        return (
          <ScrollView style={styles.container}>
            <View>
              <Text style={styles.txtjudul}>Menu ( {!this.props.data ? '' : this.props.data.login.data[0].nama_level})</Text>
            </View>
            <TouchableOpacity activeOpacity={0.6} style={styles.card} onPress={this.inputprofilmasjid}>
              <IconMasjid />
              <Text style={styles.text}>Profil Masjid</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.6} style={styles.card} onPress={this.laporan}>
              <IconLaporan />
              <Text style={styles.text}>Laporan</Text>
            </TouchableOpacity>

          </ScrollView>
        )

      }
      else if (this.props.data.login.data[0].level_user == 3) {
        return (
          <ScrollView style={styles.container}>
            <View>
              <Text style={styles.txtjudul}>Menu ( {!this.props.data ? '' : this.props.data.login.data[0].nama_level})</Text>
            </View>

            <TouchableOpacity activeOpacity={0.6} style={styles.card} onPress={this.laporan}>
              <IconLaporan />
              <Text style={styles.text}>Laporan</Text>
            </TouchableOpacity>

          </ScrollView>
        )

      }
      else {
        return (
          <View>
          </View>
        )
      }
    }
  }
}
export default ItemInput

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },

  txtjudul: {
    fontFamily: 'Raleway-Bold',
    fontSize: TEKS_SIZE + 5,
    color: WARNA_TEKS,
    marginHorizontal: 20
  },

  text: {
    fontFamily: 'Raleway-Bold',
    fontSize: TEKS_SIZE_TITTLE + 1,
    marginLeft: 15,
    color: WARNA_TEKS
  },

  card: {
    backgroundColor: WARNA_SEKUNDER,
    marginTop: 20,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 40,
    borderTopLeftRadius: 30,
    alignItems: 'center',
    elevation: 6,
    marginHorizontal: 20
  }
})
