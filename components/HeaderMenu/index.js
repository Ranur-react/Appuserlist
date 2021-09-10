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
import {styles} from './../../assets/style';
import {showToastWithGravityAndOffset} from './_Toasview';
import {BgImage, UserImage, SativaImage, menuList} from './../../Tools/constants';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faAlignJustify,
  faAngleLeft,
  faBook,
  faBrain,
  faCamera,
  faCoffee,
  faLaptopCode,
  faUserGraduate,
  faUserInjured,
  faCapsules,
} from '@fortawesome/free-solid-svg-icons';
import {getData} from './../Tools/api';

export default class HeaderMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        {lable: 'Matakuliah', icon: faBook, dest: 'MatakuliahPage'},
        {lable: 'Mahasiswa', icon: faUserGraduate, dest: 'MahasiswaPage'},
        {lable: 'Dosen', icon: faUserInjured, dest: 'DosenPage'},
        {lable: 'Jurusan', icon: faCapsules, dest: 'DosenPage'},
      ],
    };
  }
  render() {
    return (
      <View style={styles.HMenu}>
        {menuList.menu.map((v, i) => {
          return (
            <TouchableOpacity
              onPress={() => this.props.navprops.replace(v.dest)}
              key={i}
              style={styles.BoxMenu}>
              <View>
                <FontAwesomeIcon icon={v.icon} />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}
