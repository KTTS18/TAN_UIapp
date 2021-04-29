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

export default class Example extends Component  {
    render() {
        return (
          <View style={styles.bg}>
                <View style={styles.container}>
                      <View style={styles.Header}>
                            <Text style={styles.text_Header}>LOGIN</Text>
                      </View>  
                                
                      <View style={styles.text_h}> 
                            <Text style={styles.text_bar}>Username</Text>
                            <TextInput style={styles.inputBox}/>
                      </View> 
                      
                      <View style={styles.text_h}>
                            <Text style={styles.text_bar}>Password</Text>
                            <TextInput style={styles.inputBox}/>
                      </View>
                      
                      <TouchableOpacity style={styles.btnSighin}>
                            <Text style={styles.textSing}>Sign in</Text>
                      </TouchableOpacity>    
                </View>
        </View>
        )
    } 
};

const styles = StyleSheet.create ({
   container: {
    alignItems: 'center'
  },
  inputBox : {
    width:300,
    backgroundColor:'#a9a9a9',
    borderRadius:25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 15,
  },
  btnSighin : {
    width : 120,
    height : 45,
    borderRadius : 25,
    backgroundColor :'#2196F3',
    marginVertical : 70
  },
  textSing : {
    fontSize:16,
    fontWeight:'500',
    color:'#fff',
    marginVertical: 10,
    textAlign:'center'
  },
  text_bar : {
    fontSize:18,
    fontWeight:'500',
    color:'#000000',
  },
  text_Header : {
    color:'#000',
    fontWeight:'bold',
    fontSize:45
  },
  Header : {
    color:'#000000',
    fontWeight:'bold',
    marginVertical:100,
    marginTop : 110
  },
  text_fg :{
    paddingHorizontal:5,
    fontSize:16,
    color:'#000',
  },
  bg:{
    backgroundColor: '#ffffff',
    marginTop : -25
  }
});