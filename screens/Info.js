import * as React from 'react';
import { TextInput,Text, View, StyleSheet,TouchableOpacity,Alert } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
export default class SearchScreenPin extends React.Component {
  constructor(){
    super();
    this.state = {
      pincode : ''
    }
  }
  checkPincode =()=>{
Alert.alert("hiii");
  }
  render() {
  return (
    <View>
    <TextInput
            style={styles.loginBox}
            placeholder="Enter your pincode"
            onChangeText={text => {
              this.setState({
                pincode: text
              });
            }}
          />
          <TouchableOpacity
          onPress ={this.checkPincode}>
          <Text>Search</Text>
          </TouchableOpacity>
    </View>
  )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8BE85",
    alignItems: "center",
    justifyContent: "center"
  },
  registerButton: {
    width: 200,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 30
  },
  registerButtonText: {
    color: "#ff5722",
    fontSize: 15,
    fontWeight: "bold"
  },
  loginBox: {
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor: "#ff8a65",
    fontSize: 20,
    margin: 10,
    paddingLeft: 10
  },
});
