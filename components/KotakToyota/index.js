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
} from '@fortawesome/free-solid-svg-icons';
class KotakOLD extends Component {
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
          onPress={() => this.props.onClick(this.props.data.detail[0])}
          style={styles.HistoryCard}>
          <Image style={styles.ImageCapture} source={this.props.data.link} />
          <View>
            {this.props.data.detail.map((value, i) => {
              return (
                <Text key={i} style={i == 0 ? styles.Title : styles.label}>
                  {' '}
                  {value}
                </Text>
              );
            })}
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

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
          <Image style={styles.ImageCapture} source={this.props.gambar} />
          <View>
            <Text style={styles.Title}>
              {this.props.data.first_name}, {this.props.data.last_name}
            </Text>
            <View style={styles.detailIcon}>
              <FontAwesomeIcon color="rgba(50,50,50,0.5)" icon={faIdCardAlt} />

              <Text style={styles.label}>{this.props.data.id}</Text>
              <FontAwesomeIcon color="rgba(50,50,50,0.5)" icon={faMailBulk} />

              <Text style={styles.label}>{this.props.data.email}</Text>
            </View>
            <View style={styles.detailIcon}></View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Kotak;
