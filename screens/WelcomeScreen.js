import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Image, Modal, TextInput, ScrollView, KeyboardAvoidingView, ImageBackground, Alert, SafeAreaView, StatusBar, Platform } from 'react-native';
import firebase from 'firebase'
//import DropDownPicker from 'react-native-dropdown-picker';
import db from '../config.js';
//import { Dropdown } from 'react-native-material-dropdown-v2';
import SearchableDropdown from 'react-native-searchable-dropdown';
import SearchScreen from '../screens/SearchScreen';
import RegistrationPage from '../screens/RegistrationPage';

import LoginScreen from '../screens/Login';
import { Card } from 'react-native-paper';
import { RFValue } from "react-native-responsive-fontsize";



export default class WelcomeScreen extends React.Component {
  
  render() {
  return (
    <View style={styles.container}>
    <SafeAreaView style={styles.droidSafeArea} />
      
  
    <View>
    <Image
     source={require("../assets/logo1.png")}
      style={styles.image}
       />
    </View>
    <TouchableOpacity 
    style={styles.button}
      onPress= {() =>{
       this.props.navigation.navigate("Home")
      }}>
    <Text style={styles.buttonText}> I am a user </Text>
    </TouchableOpacity>

    <TouchableOpacity 
    style={styles.button}
    onPress= {() =>{
       this.props.navigation.navigate("LoginScreen")
      }}>
    <Text style={styles.buttonText}> I am a Business person </Text>
    </TouchableOpacity>

    <TouchableOpacity
     onPress= {() =>{
       this.props.navigation.navigate("RegistrationPage")
      }}>
    <Text style={{fontWeight:'500',fontSize:17,margin:20}}> I want to register </Text>
    </TouchableOpacity>

  
    </View>
  )
  }
}

const styles = StyleSheet.create({
  container:{
   flex:1,
  backgroundColor : 'white',
   alignItems : 'center',
   justifyContent : 'center'
   
 },
 profileContainer:{
   flex:1,
   justifyContent:'center',
   alignItems:'center',
 },
 title :{
   fontSize:65,
   fontWeight:'300',
   paddingBottom:30,
   color : '#ff3d00'
 },
 loginBox:{
   width: 300,
   height: 40,
   borderBottomWidth: 1.5,
   borderColor : '#ff8a65',
   fontSize: 20,
   margin:10,
   paddingLeft:10
 },
 KeyboardAvoidingView:{
   flex:1,
   justifyContent:'center',
   alignItems:'center'
 },
 modalTitle :{
   justifyContent:'center',
   alignSelf:'center',
   fontSize:30,
   color:'#ff5722',
   margin:50
 },
 modalContainer:{
   flex:1,
   borderRadius:20,
   justifyContent:'center',
   alignItems:'center',
   backgroundColor:"#ffff",
   marginRight:30,
   marginLeft : 30,
   marginTop:80,
   marginBottom:80,
 },
 formTextInput:{
   width:"75%",
   height:35,
   alignSelf:'center',
   borderColor:'#ffab91',
   borderRadius:10,
   borderWidth:1,
   marginTop:20,
   padding:10
 },
 registerButton:{
   width:200,
   height:40,
   alignItems:'center',
   justifyContent:'center',
   borderWidth:1,
   borderRadius:10,
   marginTop:30
 },
 registerButtonText:{
   color:'#ff5722',
   fontSize:15,
   fontWeight:'bold'
 },
 cancelButton:{
   width:200,
   height:30,
   justifyContent:'center',
   alignItems:'center',
   marginTop:5,
 },

 button:{
   width:300,
   height:50,
   margin :20,
   justifyContent:'center',
   alignItems:'center',
   borderRadius:25,
   backgroundColor:"#88dd6c",
   shadowColor: "#000",
   shadowOffset: {
      width: 0,
      height: 8,
   },
   shadowOpacity: 0.30,
   shadowRadius: 10.32,
   elevation: 16,
   padding: 10
 },
 buttonText:{
   color:'#ffff',
   fontWeight:'500',
   fontSize:20
 },
 image :{
   width: 350,
   height:100
 },
 backgroundImage: {
        flex: 0.5,
        resizeMode: 'cover',
        
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    itemStyle:{
              padding: 10,
              marginTop: 2,
              backgroundColor: '#ddd',
              borderColor: '#bbb',
              borderWidth: 1,
              borderRadius: 5,
            },
            categoryText:{
   color:'#ff5722',
   fontSize:15,
   fontWeight:'bold',
   marginRight:110
 },
})

/* <ImageBackground source={require('../assets/bg1.jpg')} style={styles.backgroundImage}>*/
