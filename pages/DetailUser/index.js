import React, {Comment, Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,Image,
  ScrollViewComponent,
  Linking,
  ImageBackground,
} from 'react-native';
import {styles} from './../../assets/style';
import Kotak from './../../components/Kotak';
import {showToastWithGravityAndOffset} from './../../components/_Toasview';
import {BgImage, UserImage} from './../../Tools/constants';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleLeft,faAlignJustify, faCoffee, faPhoneAlt, faPhoneSquareAlt, faPhone, faBuilding, faIdCardAlt, faInbox, faAtom, faMailBulk, faMapMarked} from '@fortawesome/free-solid-svg-icons';
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
              <View style={{alignItems: 'center'}}>
                <View style={{alignItems: 'center'}}>
                  <Text style={styles.HeaderTitle}>{this.state.data.nama}</Text>
                </View>
                <View style={{alignItems: 'flex-start'}}>
                  <View style={styles.detailIcon}>
                    <FontAwesomeIcon
                      color="rgba(50,50,50,0.5)"
                      icon={faIdCardAlt}
                    />
                    <Text> Student ID. {this.state.data.nobp}</Text>
                  </View>
                  <View style={styles.detailIcon}>
                    <FontAwesomeIcon color="green" icon={faPhone} />
                    <Text
                      onPress={() =>
                        Linking.openURL(`tel:${this.state.data.telpon}`)
                      }>
                      {' '}
                      {this.state.data.telpon}
                    </Text>
                  </View>
                  <View style={styles.detailIcon}>
                    <FontAwesomeIcon
                      color="rgba(50,50,50,0.5)"
                      icon={faMapMarked}
                    />
                    <Text> {this.state.data.alamat}</Text>
                  </View>
                  <View style={styles.detailIcon}>
                    <FontAwesomeIcon
                      color="rgba(50,50,50,0.8)"
                      icon={faMailBulk}
                    />
                    <Text
                      onPress={() =>
                        Linking.openURL(`mailto:${this.state.data.email}`)
                      }>
                      {' '}
                      {this.state.data.email}
                    </Text>
                  </View>
                </View>
              </View>
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
              source={require('./../../assets/images/2STMIK-Jayanusa-Padang-removebg-preview.png')
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
