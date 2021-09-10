import React, {Component} from 'react';
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
import Kotak from './../../components/KotakDosen';
import HeaderMenu from './../../components/HeaderMenu';
import {showToastWithGravityAndOffset} from './../../components/_Toasview';
import {BgImage, UserImage, SativaImage} from './../../Tools/constants';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import LinearGradient from 'react-native-linear-gradient';
import {
  faAlignJustify,
  faAngleLeft,
  faBook,
  faBrain,
  faCamera,
  faCoffee,
  faLaptopCode,
  faPlusCircle,
  faUmbrella,
} from '@fortawesome/free-solid-svg-icons';
import {getData} from './../../Tools/api';

export default class DosenPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getDatafromBackend = () => {
    const earn = async () => {
      var Pitcher = await getData('dosen');
      if (Pitcher.length > 0) {
         this.setState({dataMahasiswa: Pitcher});
      } else{s
        console.log('====================================');
        console.log(Pitcher);
        console.log('====================================');
      }
    };
    earn();
  };
  componentDidMount(){
    this.getDatafromBackend();
  }
  UNSAFE_componentWillMount() {
    this.getDatafromBackend();
  }
  render() {
    const EachKotak = () => {
      if (!this.state.dataMahasiswa) {
        return <View style={styles.SubContainer}></View>;
      }
      return (
        <View style={styles.SubContainer}>
          {this.state.dataMahasiswa.map((value, i) => {
            return (
              <Kotak
                onClick={e =>
                  this.props.navigation.navigate('DetailDosenPage', {value})
                }
                data={value}
                gambar={{uri: UserImage}}
                key={i}
              />
            );
          })}
        </View>
      );
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
          onPress={() => this.props.navigation.navigate('FormDosenPage')}
          style={styles.BoxFlatButton}>
          <View>
            <FontAwesomeIcon icon={faPlusCircle} />
          </View>
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
              DATA DOSEN PENGAJAR
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
        <HeaderMenu navprops={this.props.navigation} />
        {/* // content *Rq */}
        <ScrollView>
          <View style={[styles.ScrollFlex]}>
            <View style={styles.Container}>
              <EachKotak />
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    );
  }
}
