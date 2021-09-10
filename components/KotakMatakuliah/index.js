/* @flow weak */

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Alert,
  TouchableOpacity,
  Svg,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  Button,
  Image,
} from 'react-native';
import {styles} from '../../assets/style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faAngleLeft,
  faAlignJustify,
  Linking,
  faCoffee,
  faPhoneAlt,
  faPhoneSquareAlt,
  faPhone,
  faBuilding,
  faIdCardAlt,
  faInbox,
  faAtom,
  faMailBulk,
  faBookmark,
  faBookOpen,
  faUserInjured,
  faUserTimes,
  faBusinessTime,
  faTimesCircle,
  faTimes,
  faUserClock,
  faClock,
} from '@fortawesome/free-solid-svg-icons';

class Kotak extends Component {
  constructor(props) {
    super(props);
  }
  UNSAFE_componentWillMount() {
    console.log(this.props.data);
  }
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.props.onClick()}
          style={styles.HistoryCard}>
          {/* <Image style={styles.ImageCapture} source={this.props.gambar} /> */}
          <View>
            <View style={styles.detailIcon}>
              <FontAwesomeIcon color="rgba(50,50,50,1)" icon={faBookOpen} />
              <Text style={styles.Title}>
                {' '}
                {this.props.data.nama_matakuliah}
              </Text>
            </View>
            <View style={styles.detailIcon}>
              <FontAwesomeIcon
                color="rgba(50,50,50,0.5)"
                icon={faUserInjured}
              />
              <Text style={styles.label}>{this.props.data.nama_dosen}
              {
                ' '
              }
              </Text>
              <FontAwesomeIcon
                color="rgba(50,50,50,0.5)"
                icon={faClock}
              />
              <Text style={styles.label}>{this.props.data.sks} SKS </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Kotak;
