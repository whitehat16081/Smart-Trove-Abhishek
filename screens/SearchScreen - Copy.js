import * as React from 'react';
import { TextInput,FlatList,Text, KeyboardAvoidingView,View,Modal, ScrollView, StyleSheet,TouchableOpacity, SafeAreaView, Platform, StatusBar } from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { CheckBox } from 'react-native-elements'
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
  {id: 7, name: 'Electronic Shops'},
  {id: 8, name: 'Chemist'},
  {id: 9, name: 'Doctor'},
  {id: 10, name: 'Technicians'},
];

export default class SearchScreen extends React.Component {
  constructor(){
    super();
    this.state ={
      selectedItem:'',
      checked : true,
      allTransactions:[],
      pinCode : ''
    }
  }

  searchTransactions= async(text) =>{
      var enteredText = text.split("")
      //var text1 = text.toUpperCase()
  
      
      const transaction =  await db.collection("BusinessPersons").where('pinCode','==',enteredText).get()
        transaction.docs.map((doc)=>{
          this.setState({
            allTransactions:[...this.state.allTransactions,doc.data()],
          })
        })
      }
      componentDidMount = async ()=>{
      const query = await db.collection("BusinessPersons").get()
      query.docs.map((doc)=>{
        this.setState({
          allTransactions: [],
          
        })
      })
    }
   render(){
  return (
<View>
<SafeAreaView style={styles.droidSafeArea} />
 <TextInput
    style={styles.formTextInput}
    placeholder ={"Pin Code"}
    onChangeText={(text)=>{
    this.setState({
      pinCode: text
    })
      
    }}
/>
<Text style={[styles.categoryText]}>Category : {this.state.pinCode}</Text>

 <SearchableDropdown
        containerStyle={{ padding: 5, borderColor:'#ffab91', margin : 10, width :200, height : 100,
   borderRadius:10,
   borderWidth:1,}}
          itemStyle={{
              padding: 10,
              marginTop: 2,
              backgroundColor: '#ddd',
              borderColor: '#bbb',
              borderWidth: 1,
              borderRadius: 5,
            }}
            itemTextStyle={{ color: '#222' }}
            itemsContainerStyle={{ maxHeight: 140 }}
          placeholder = "Category"

          items = {items}

          onTextChange={(text) => console.log(text)}
          onItemSelect={(item) => {this.setState({selectedItem:item.name})}}
          resPtValue={false}
       />
       <Text style={[styles.categoryText]}>Category : {this.state.selectedItem}</Text>
       
  <TouchableOpacity
  onPress={()=>{this.searchTransactions(this.state.pinCode)}}>
<Text>Search</Text>
</TouchableOpacity>

<FlatList
          data={this.state.allTransactions}
          renderItem={({item})=>(
            <View style={{borderBottomWidth: 2}}>
              <Text>{"Business Name: " + item.business_name}</Text>
              <Text>{"Business Name: " + item.business_name}</Text>
              <Text>{"Name: " + item.first_name + " " + item.last_name}</Text>
              <Text>{"Contact No: " + item.contact}</Text>
              <Text>{"Address: " + item.address}</Text>
            </View>
          )}
          keyExtractor= {(item, index)=> index.toString()}
         
        /> 
</View>
  )
 }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
container1:{
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
   backgroundColor:"#ff9800",
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
   fontWeight:'200',
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