import React, { Component } from 'react';
import {
    ImageBackground, 
    StyleSheet,
    Image,
    View 
} from 'react-native';

import bgImage from './Image/bgImage.jpg'
import logo from './Image/Tanlogo.png'

export default class Example extends Component {
    render() {
        return (
          <ImageBackground source={bgImage} style={styles.backgroundContainer}>
              <View style={styles.logoContainer}>
                <Image source={logo} style={styles.logo}/>
              </View>
          </ImageBackground>    
        );
    }
};

const styles = StyleSheet.create ({
    backgroundContainer: {
      flex: 1,
      width: null,
      height: null,
      justifyContent: 'center',
      alignItems: 'center'
    },
    logoContainer: {
      alignItems: 'center'
    },
    logo: {
      width: 260,
      height: 100
    }  
});