import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {styles} from './../../assets/style';
import {
  menuList,
} from './../../Tools/constants';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBook,
  faCapsules,
  faUserGraduate,
  faUserInjured,
} from '@fortawesome/free-solid-svg-icons';

export default class Menu extends Component {
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
      <View style={[styles.ScrollFlex]}>
        <View style={styles.ContainerMenu}>
          {menuList.menu.map((v, i) => {
            return (
              <TouchableOpacity
                onPress={() => this.props.navprops.navigate(v.dest)}
                key={i}
                style={styles.BoxMenuMedium}>
                <FontAwesomeIcon icon={v.icon} />
                <Text>{v.lable}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }
}
