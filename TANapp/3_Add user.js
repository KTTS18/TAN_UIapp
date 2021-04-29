import React, { Component } from 'react';
import {
    StyleSheet,
    backgroundColor,
    TouchableOpacity,
    View,
    Text,
    Image,
    TextInput
} from 'react-native';

import logo from './Image/Add_user.png'

export default class Example extends Component  {
    render() {
        return (
          <View style={styles.bg}>
                <View style={styles.container}>
                      <View style={styles.Header}>
                            <Text style={styles.text_Header}>Select your user</Text>
                      </View>
                      
                      <View style={styles.logoContainer}>
                            <Image source={logo} style={styles.logo}/>
                      </View>  
                                
                      <View style={styles.text_f}> 
                            <Text style={styles.text_bar}>Female</Text>
                      </View> 
                      
                      <View style={styles.logoContainer}>
                            <Image source={logo} style={styles.logo}/>
                      </View>  
                      
                      <View style={styles.text_m}>
                            <Text style={styles.text_bar}>Male</Text>
                      </View>                   
                </View>
        </View>
        )
    } 
};

const styles = StyleSheet.create ({
   container: {
    alignItems: 'center'
  },
  text_bar : {
    fontSize:18,
    fontWeight:'500',
    color:'#000000',
  },
  text_Header : {
    color:'#000',
    fontWeight:'300',
    fontSize:25
  },
  Header : {
    color:'#000000',
    fontWeight:'bold',
    marginVertical:100,
    marginTop : 90
  },
  bg:{
    backgroundColor: '#ffffff'
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical : 80
  },
  logo : {
    width: 100,
    height: 100,
    marginTop : -120
  },
  text_f :{
    marginVertical:-90
  },
  text_m :{
    marginVertical:120
  }
});