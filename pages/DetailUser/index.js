import React, {Comment, Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,Image,
  ScrollViewComponent,
  ImageBackground,
} from 'react-native';
import {styles} from './../../assets/style';
import Kotak from './../../components/Kotak';
import {showToastWithGravityAndOffset} from './../components/_Toasview';
import {BgImage, UserImage} from './../../Tools/constants';

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
          link: {uri: UserImage},
        },
        {
          detail: [
            'Annisa Sofyan',
            'Jl. Korong Pauah Nagari Katapiang',
            '083182647716',
          ],
          link: {uri: UserImage},
        },
        {
          detail: [
            'Nurdianto Utomo',
            'Jl. Korong Pauah Nagari Katapiang',
            '083182647716',
          ],
          link: {uri: UserImage},
        },
        {
          detail: [
            'Satya Sativ',
            'Jl. Korong Pauah Nagari Katapiang',
            '083182647716',
          ],
          link: {uri: UserImage},
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
                onClick={e => this.props.navigation.navigate('Detail')}
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

          <View style={styles.HLeft}>
            <Text style={styles.HeaderTitle}>B</Text>
          </View>
          {
            // header Title *Rq
          }
          <View style={styles.HCenter}>
            <Text style={styles.HeaderTitle}>Students List</Text>
            <Text style={styles.HeaderTitleDetail}>
              Jayanusa College of Informatics Management{' '}
            </Text>
          </View>
          <View style={styles.HRight}>
            <Text style={styles.HeaderTitle}>X</Text>
          </View>
        </View>
        {
          // header menu *JS
        }
        <View style={styles.HMenu}>
          <View style={styles.BoxMenu}>
            <Image
              resizeMode="center"
              style={styles.ImageSplash}
              source={require('./../../assets/images/2STMIK-Jayanusa-Padang-removebg-preview.png')}></Image>
          </View>
        </View>
        {/* // content *Rq */}
        <ScrollView style={[styles.ScrollFlex]}>
          <View style={styles.Container}></View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
