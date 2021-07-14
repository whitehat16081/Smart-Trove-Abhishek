import * as React from 'react';
import { TextInput,FlatList,Text, KeyboardAvoidingView,View,Modal, ScrollView, StyleSheet,TouchableOpacity, SafeAreaView, Platform, StatusBar } from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { CheckBox,Header } from 'react-native-elements'
import LoginScreen from '../screens/Login';
import db from '../config.js';

const items = [
  // name key is must. It is to show the text in front
  {id: 1, name: 'Homemade Food'},
  {id: 2, name: 'Education'},
  {id: 3, name: 'General Stores'},
  {id: 4, name: 'Beauticians'},
  {id: 5, name: 'Beauty Shops'},
  {id: 6, name: 'Hardware Shops'},
  {id: 7, name: 'Computer / Mobile Shops'},
  {id: 8, name: 'A'},
  {id: 9, name: 'B'},
  {id: 10, name: 'C'},
];

export default class RandomScreen extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      selectedItem:'',
      checked : true,
      allTransactions:[],
      lastVisibleTransaction: null,
      pinCode : '',
     
    }
  }
/*fetchMoreTransactions = async ()=>{
      var text = this.state.pinCode;
      var enteredText = text.split("")
      var category=this.state.selectedItem;

      
      const query = await db.collection("BusinessPersons").where('pinCode','==',text).where('category','==',category).startAfter(this.state.lastVisibleTransaction).limit(10).get()
      query.docs.map((doc)=>{
        this.setState({
          allTransactions: [...this.state.allTransactions, doc.data()],
          lastVisibleTransaction: doc
        })
      })
    
     
  }*/

    searchTransactions= async() =>{
        
        const transaction =  await db.collection("BusinessPersons").get()
        transaction.docs.map((doc)=>{
          this.setState({
            allTransactions:[...this.state.allTransactions,doc.data()],
            lastVisibleTransaction: doc
          })
        })
      
      
    }

componentDidMount=async()=>{
  const query = await db.collection("BusinessPersons").limit(10).get()
      query.docs.map((doc)=>{
        this.setState({
          allTransactions: [],
          lastVisibleTransaction: doc
        
      })
      })
  this.searchTransactions();
}
  
  
    
   render(){
  return (
<View>
<SafeAreaView style={styles.droidSafeArea} />

 
<FlatList

          data={this.state.allTransactions}
          renderItem={({item})=>(
            <View style={styles.flatlistView}>
              <Text style={styles.flatlistText}>{"Business Name: " + item.business_name}</Text>
              <Text style={styles.flatlistText}>{"Category: " + item.category}</Text>
              <Text style={styles.flatlistText}>{"Details: " + item.details}</Text>
              <Text style={styles.flatlistText}>{"Name: " + item.first_name + " " + item.last_name}</Text>
              <Text style={styles.flatlistText}>{"Contact No: " + item.contact}</Text>
              <Text style={styles.flatlistText}>{"Address: " + item.address}</Text>
            </View>
          )}
         keyExtractor= {(item, index)=> index.toString()}
          onEndReached ={this.fetchMoreTransactions}
          onEndReachedThreshold={0.7}
         
        /> 
        
       
</View>
  )
 }
}


const styles = StyleSheet.create({
   
  droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
 flatlistText:{
   color:'black',
   fontSize:15,
   fontWeight:'bold',
   margin:2,
   
 },
 flatlistView : {
    borderBottomWidth: 2,
    backgroundColor:'#aaf97f'
 }
})

/*<CheckBox
  size = '20'
  title='Food'
  checkedIcon='dot-circle-o'
  uncheckedIcon='circle-o'
  onPress= {() =>{ this.props.navigation.navigate("LoginScreen")   }}
/>
<CheckBox
  size = '20'
  title='Education'
  checkedIcon='dot-circle-o'
  uncheckedIcon='circle-o'
  onPress= {() =>{ this.props.navigation.navigate("LoginScreen")   }}
/>
<CheckBox
  size = '20'
  title='Beauty'
  checkedIcon='dot-circle-o'
  uncheckedIcon='circle-o'
  onPress= {() =>{ this.props.navigation.navigate("LoginScreen")   }}
/>
*/