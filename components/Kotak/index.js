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
            <Text style={styles.Title}>{this.props.data.nama}</Text>
            <Text style={styles.label}>
              {this.props.data.nobp} -
              {this.props.data.alamat}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Kotak;
