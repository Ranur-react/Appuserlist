import React, { Comment, Component } from 'react';
import {
  View, Text, StyleSheet, ScrollView, StatusBar,ScrollViewComponent,ImageBackground
} from 'react-native';
import { styles } from './assets/style';
import Kotak from './components/Kotak';
import {BgImage,UserImage} from './Tools/constants';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SourceList: [
       {detail:[
          'Rahmat Nur',
          'Jl. Korong Pauah Nagari Katapiang',
          '083182647716',
        ],
          link: { uri: UserImage },
        },{detail:[
          'Rahmat Nur',
          'Jl. Korong Pauah Nagari Katapiang',
          '083182647716',
        ],
          link: { uri: UserImage },
        },{detail:[
          'Rahmat Nur',
          'Jl. Korong Pauah Nagari Katapiang',
          '083182647716',
        ],
          link: { uri: UserImage },
        },{detail:[
          'Rahmat Nur',
          'Jl. Korong Pauah Nagari Katapiang',
          '083182647716',
        ],
          link: { uri: UserImage },
        },
      ]
    }
  }
  render() {
    const EachKotak = () => {
      return (
        <View style={styles.SubContainer}>
          {
            this.state.SourceList.map((value, i) => {
              return (
                <Kotak data={value} key={i} nama={'gambar1'} />
              )
            })
          }
        </View>
      )
    }
    return (
      <ImageBackground source={{uri: BgImage}} resizeMode="cover" style={styles.Layout}>
        <StatusBar barStyle = 'dark-content' translucent backgroundColor = 'rgba(0,0,0,0)' />
        <ScrollView style={[styles.ScrollFlex,{top:150}]} >
          <View style={styles.Container}>
            <EachKotak />
          </View>
        </ScrollView>
      </ImageBackground>


    )
  }
}