/* @flow weak */

import React, { Component } from 'react';
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
    
    Image
} from 'react-native';
import { styles } from '../../assets/style';

class Kotak extends Component {
    constructor(props) {
        super(props)
    }
UNSAFE_componentWillMount(){
    console.log(this.props.data);
}
    render() {

        return (
            <View>
                <TouchableOpacity style={styles.HistoryCard} >
                    <Image style={styles.ImageCapture} source={this.props.data.link} />
                    <View>
                        {
                            this.props.data.detail.map((value, i) => {
                                return (
                                    <Text style={i==0?styles.Title:styles.label}> {value}</Text>

                                )
                              })
                        }
                    </View>
                </TouchableOpacity >
            </View>
        )


    }
}




export default Kotak;
