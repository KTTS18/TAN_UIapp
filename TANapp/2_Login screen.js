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
import logo from './Image/login.png'

export default class Example extends Component {
    render() {
        return (
          <ImageBackground source={bgImage} style={styles.backgroundContainer}>
              <View style={styles.logoContainer}>
                  <Image source={logo} style={styles.logo}/>
              </View>
              
              <TouchableOpacity style={styles.btnLogin}>
                <Text style={styles.text}>Log In</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.btnSignin}>
                <Text style={styles.textSing}>Sign Up</Text>
              </TouchableOpacity>

          </ImageBackground>
        );
    }
}

const styles = StyleSheet.create ({
  btnLogin : {
    width : 200,
    height : 45,
    borderRadius : 25,
    backgroundColor :'#2196F3',
    justifyContent : 'center',
    marginTop : 20,
    marginVertical : 15
  },
  btnSignin : {
    width : 200,
    height : 45,
    borderRadius : 25,
    backgroundColor :'#2196F3',
    justifyContent : 'center',
    marginTop : 20
  },
  text : {
    color: '#fff',
    fontSize : 16,
    textAlign : 'center'
  },
  textSing : {
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