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
import {styles} from './../assets/style';
import Kotak from './../components/Kotak';
import {showToastWithGravityAndOffset} from './../components/_Toasview';
import {BgImage, UserImage, SativaImage} from './../Tools/constants';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faAlignJustify,
  faAngleLeft,
  faBook,
  faBrain,
  faCamera,
  faCoffee,
  faLaptopCode,
  faUmbrella,
} from '@fortawesome/free-solid-svg-icons';
import {getData} from './../Tools/api';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  getDatafromBackend = () => {
    const earn=async () => {
      var Pitcher = await getData('Mahasiswa');
      this.setState({dataMahasiswa: Pitcher});
      console.log('====================================');
      console.log(Pitcher);
      console.log('====================================');
    };
    earn();
  };
  UNSAFE_componentWillMount(){
    this.getDatafromBackend();

  }

  render() {
    const EachKotak = () => {
      if (!this.state.dataMahasiswa){
        return(
           <View style={styles.SubContainer}>
           </View>
        )
      }
        return (
          <View style={styles.SubContainer}>
            {this.state.dataMahasiswa.map((value, i) => {
              return (
                <Kotak
                  onClick={e =>
                    this.props.navigation.navigate('Detail', {value})
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
      <ImageBackground
        source={{uri: BgImage}}
        resizeMode="cover"
        style={styles.Layout}>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="rgba(0,0,0,0)"
        />
        <View style={styles.Header}>
          {/* // Back Button *Rq */}

          <TouchableOpacity
            onPress={() =>
              showToastWithGravityAndOffset('Ini Adalah Halaman Utama')
            }
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
              Students List
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
        <View style={styles.HMenu}>
          <View style={styles.BoxMenu}>
            <View>
              <FontAwesomeIcon icon={faBook} />
            </View>
          </View>
          <View style={styles.BoxMenu}>
            <View>
              <FontAwesomeIcon icon={faCamera} />
            </View>
          </View>
          <View style={styles.BoxMenu}>
            <View>
              <FontAwesomeIcon icon={faLaptopCode} />
            </View>
          </View>
        </View>
        {/* // content *Rq */}
        <ScrollView>
          <View style={[styles.ScrollFlex]}>
            <View style={styles.Container}>
              <EachKotak />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
