import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    View,
    Text,
    Image
} from 'react-native';
import bgImage from './Image/bgImage.jpg'
import logo from './Image/Map.png'

export default class Example extends Component {
    render() {
        return (
          <ImageBackground source={bgImage} style={styles.backgroundContainer}>
              <View style={styles.logoContainer}>
                <Image source={logo} style={styles.logo}/>
              </View>
              
              <TouchableOpacity style={styles.btnGPS}>
                <Text style={styles.text}>View GPS</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.btnLogout}>
                <Text style={styles.textLog}>Logout</Text>
              </TouchableOpacity>
              
          </ImageBackground>
        );
    }
}

const styles = StyleSheet.create ({
  btnGPS : {
    width : 200,
    height : 45,
    borderRadius : 25,
    backgroundColor :'#2196F3',
    justifyContent : 'center',
    marginTop : 20,
    marginVertical : 15
  },
  btnLogout : {
    width : 200,
    height : 45,
    borderRadius : 25,
    backgroundColor :'#2196F3',
    justifyContent : 'center',
    marginTop : 30
  },
  text : {
    color: '#fff',
    fontSize : 16,
    textAlign : 'center'
  },
  textLog : {
    color: '#fff',
    fontSize : 16,
    textAlign : 'center'
  },
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical : 60
  },
  logo : {
    width: 220,
    height: 220,
    marginTop : -120
  }
});