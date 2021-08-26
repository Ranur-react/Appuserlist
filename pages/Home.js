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
import {faAlignJustify, faAngleLeft, faBook, faBrain, faCamera, faCoffee, faLaptopCode, faUmbrella} from '@fortawesome/free-solid-svg-icons';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SourceList: [
        {
          detail: [
            'Rahmat Nur',
            'Jl. Korong Pauah Nagari Katapiang',
            '083182647716',
          ],
          link: require('./../assets/images/ranur.png'),
        },
        {
          detail: [
            'Satya Sativa',
            'Jl. Korong Pauah Nagari Katapiang',
            '083182647716',
          ],
          link: require('./../assets/images/moya.jpg'),
        },
        {
          detail: [
            'Annisa Sofyan',
            'Jl. Korong Pauah Nagari Katapiang',
            '083182647716',
          ],
          link: require('./../assets/images/annisa.png'),
        },
        {
          detail: [
            'Mulyadi',
            'Jl. Korong Pauah Nagari Katapiang',
            '082288215177',
          ],
          link: require('./../assets/images/imul.png'),
        },
        {
          detail: [
            'Mulyadi',
            'Jl. Korong Pauah Nagari Katapiang',
            '082288215177',
          ],
          link: require('./../assets/images/imul.png'),
        },
        {
          detail: [
            'Mulyadi',
            'Jl. Korong Pauah Nagari Katapiang',
            '082288215177',
          ],
          link: require('./../assets/images/imul.png'),
        },
        {
          detail: [
            'Mulyadi',
            'Jl. Korong Pauah Nagari Katapiang',
            '082288215177',
          ],
          link: require('./../assets/images/imul.png'),
        },
        {
          detail: [
            'Rahmat Nur',
            'Jl. Korong Pauah Nagari Katapiang',
            '083182647716',
          ],
          link: require('./../assets/images/ranur.png'),
        },
        {
          detail: [
            'Satya Sativa',
            'Jl. Korong Pauah Nagari Katapiang',
            '083182647716',
          ],
          link: require('./../assets/images/moya.jpg'),
        },
        {
          detail: [
            'Annisa Sofyan',
            'Jl. Korong Pauah Nagari Katapiang',
            '083182647716',
          ],
          link: require('./../assets/images/annisa.png'),
        },
        {
          detail: [
            'Mulyadi',
            'Jl. Korong Pauah Nagari Katapiang',
            '082288215177',
          ],
          link: require('./../assets/images/imul.png'),
        },
        {
          detail: [
            'Mulyadi',
            'Jl. Korong Pauah Nagari Katapiang',
            '082288215177',
          ],
          link: require('./../assets/images/imul.png'),
        },
        {
          detail: [
            'Mulyadi',
            'Jl. Korong Pauah Nagari Katapiang',
            '082288215177',
          ],
          link: require('./../assets/images/imul.png'),
        },
        {
          detail: [
            'Mulyadi',
            'Jl. Korong Pauah Nagari Katapiang',
            '082288215177',
          ],
          link: require('./../assets/images/imul.png'),
        },
      ],
    };
  }
  render() {
    const EachKotak = () => {
      return (
        <View style={styles.SubContainer}>
          {this.state.SourceList.map((value, i) => {
            return (
              <Kotak
                onClick={e => this.props.navigation.navigate('Detail', {value})}
                data={value}
                key={i}
                nama={'gambar1'}
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
        <ScrollView
          >
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
