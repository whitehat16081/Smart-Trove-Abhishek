 import * as React from 'react';
import { Text, View, Image,  StyleSheet,TouchableOpacity } from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './screens/SearchScreen';
import LoginScreen from "./screens/Login"
import RandomScreen from "./screens/RandomScreen"
import WelcomeScreen from './screens/WelcomeScreen'
import RegistrationPage from './screens/RegistrationPage';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default function App() {
  return (
    <AppContainer/>
  );
}
 
const TabNavigator = createBottomTabNavigator({
  Home: {screen: RandomScreen},
  Search: {screen: SearchScreen},
},
{
defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "Home"){
        return(
          <Image
          source={require("./assets/home.png")}
          style={{width:30, height:30}}
        />
        )

      }
      else if(routeName === "Search"){
        return(
          <Image
          source={require("./assets/search.png")}
          style={{width:30, height:30}}
        />)

      }
    }
  })
}
);


const switchNavigator = createSwitchNavigator({
  WelcomeScreen : {
    screen:WelcomeScreen,
    navigationOptions:{
      headerShown : false
    }},
    LoginScreen:{
    screen: LoginScreen,
    navigationOptions:{
      headerShown : false
    }},
  TabNavigator:{
    screen: TabNavigator,
    navigationOptions:{
      headerShown : false
    }},
    RegistrationPage:{
    screen: RegistrationPage,
    navigationOptions:{
      headerShown : false
    }},
})


const AppContainer =  createAppContainer(switchNavigator);
