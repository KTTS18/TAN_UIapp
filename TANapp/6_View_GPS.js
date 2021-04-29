import React, { Component } from 'react';
import {
    ImageBackground, 
    StyleSheet,
    Image,
    TouchableOpacity,
    Text,
    View 
} from 'react-native';

import bgImage from './Image/bgImage.jpg'
import logo from './Image/gray.jpg'

export default class Example extends Component {
    render() {
        return (
          <ImageBackground source={bgImage} style={styles.backgroundContainer}>  
              <View style={styles.logoContainer}>
                <Image source={logo} style={styles.logo}/>
              </View>
              
              <TouchableOpacity style={styles.btnLogout}>
                  <Text style={styles.textLog}>back</Text>
              </TouchableOpacity>
                
          </ImageBackground>                      
        );
    }
};

const styles = StyleSheet.create ({
    backgroundContainer: {
      flex: 1,
      width: null,
      height: null,
      // justifyContent: 'center',
      alignItems: 'center'
    },
    btnLogout : {
      width : 100,
      height : 45,
      borderRadius : 25,
      backgroundColor :'#2196F3',
      justifyContent : 'center',
      marginVertical : 10
    },
    textLog : {
      color: '#fff',
      fontSize : 16,
      textAlign : 'center'
    },
    logo : {
      width : 320,
      height : 520,
      borderRadius : 25,
      marginVertical : 20
    }
});