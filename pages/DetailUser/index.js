import React, {Comment, Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,Image,
  ScrollViewComponent,
  ImageBackground,
} from 'react-native';
import {styles} from './../../assets/style';
import Kotak from './../../components/Kotak';
import {showToastWithGravityAndOffset} from './../../components/_Toasview';
import {BgImage, UserImage} from './../../Tools/constants';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleLeft,faAlignJustify, faCoffee} from '@fortawesome/free-solid-svg-icons';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  UNSAFE_componentWillMount(){
      console.log("------>");
      console.log(this.props.route.params);
      if(this.props.route.params.value){
          this.setState({data: this.props.route.params.value});
      }
  }
  render() {
    const UserDetail = () => {
        if(this.state.data){
          return (
            <View style={styles.SubContainer}>
              {this.state.data.detail.map((value, i) => {
                return (
                  <View style={{alignItems:'center'}} key={i}>
                    <Text style={!i==0?styles.HeaderTitleDetail:styles.HeaderTitle}>{value}</Text>
                  </View>
                );
              })}
            </View>
          );
        }else{
            return(
                <View></View>
            )
        }
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
            onPress={() => this.props.navigation.goBack()}
            style={styles.HLeft}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </TouchableOpacity>
          {
            // header Title *Rq
          }
          <View style={styles.HCenter}>
            <Text style={styles.HeaderTitle}>Details</Text>
            <Text style={styles.HeaderTitleDetail}></Text>
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
        <View style={styles.HAvatar}>
          <View style={styles.BoxAvatar}>
            <Image
              style={styles.ImageAvatar}
              source={
                !this.state.data
                  ? require('./../../assets/images/2STMIK-Jayanusa-Padang-removebg-preview.png')
                  : this.state.data.link
              }></Image>
          </View>
        </View>
        {/* // content *Rq */}
        <ScrollView style={[styles.ScrollFlex]}>
          <View style={styles.Container}>
            <UserDetail />
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
