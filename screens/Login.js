import React from 'react';
import {View,Text,StyleSheet,Image,TextInput,TouchableOpacity,Alert,KeyboardAvoidingView} from 'react-native';
import firebase from 'firebase'
import SearchScreen from '../screens/SearchScreen';
import db from '../config.js';

export default class LoginScreen extends React.Component {

    constructor(){
        super();
        this.state={
          emailId : '',
          password: ''
        }
      }
    
    userlogin = (emailId, password) => {
       console.log("Hii")
    firebase
      .auth()
      .signInWithEmailAndPassword(emailId, password)
      .then(() => {
        this.props.navigation.navigate("Home");
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
      });
  };
      /*login=async(email,password)=>{
        if (email && password){
          console.log("Hiiii");
          try{
            const response = await firebase.auth().signInWithEmailAndPassword(email,password)
            if(response){
              this.props.navigation.navigate('SearchScreen')
            }
          }
          catch(error){
            switch (error.code) {
              case 'auth/user-not-found':
                Alert.alert("user doesn't exists")
                console.log("doesn't exist")
                break
              case 'auth/invalid-email':
                Alert.alert('incorrect email or password')
                console.log('invalid')
                break
            }
          }
        }
        else{
            Alert.alert('enter email and password');
        }
      }*/

  render(){
      return(
        <KeyboardAvoidingView style = {{alignItems:'center',marginTop:20}}>
        <View>
          <Image
            source={require("../assets/logo1.png")}
            style={{width:350, height: 100}}/>
          
        </View>
        <View>
        <TextInput
          style={styles.loginBox}
          placeholder="abc@example.com"
          keyboardType ='email-address'
          onChangeText={(text)=>{
            this.setState({
              emailId: text
            })
          }}
        />

        <TextInput
          style={styles.loginBox}
          secureTextEntry = {true}
          placeholder="enter Password"
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        />
        </View>
        <View>
          <TouchableOpacity style={styles.button}
          onPress={()=>{this.userlogin(this.state.emailId ,this.state.password)}}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>

      )
  }
}


const styles = StyleSheet.create({
  loginBox:
  {
    width: 300,
  height: 40,
  borderWidth: 1.5,
  fontSize: 20,
  margin:10,
  paddingLeft:10
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
})
