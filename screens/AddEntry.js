
import React, { createContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert, Animatable, VirtualizedList } from 'react-native';
import StandardButton from '../components/StandardButton';
import InputField from '../components/InputField';
import Firebase from '../config/Firebasje';  
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FloatingAction } from 'react-native-floating-action';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-datepicker';

//<Icon
     //             onPress={() => this.goToMain()}
      //            name="arrow-left" size={30} color="#000000"  />

const App = () => {
  const [date, setDate] = useState('09-10-2020');}

class AddEntry extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            start: '',
            end:'',
        }; 
    }
   

    goMainScreen = () =>{
      this.props.changeComponent('Three');
  }

    render() {
      return (

        <View style={styles.container}>
    
    
    <View style={styles.header}>
    <View style={{alignContent: "flex-start"}, {marginLeft: "1%"}, {marginRight: "20%"}}>
               <StandardButton onPress={() => this.goMainScreen()}
                  style={styles.roundButton2}>
                    <Text style={styles.title1}>
                      Go Back</Text>
                  </StandardButton>
                </View>
                    <Text style={styles.title}>
                       Add Entry
                </Text>
                <View style={{marginRight:"20%"}, {marginLeft: "10%"}}>
                <Icon name="trash" size={30} color="#000000" />
                </View>
                <View style={{marginRight:"1%"}, {marginLeft:"5%"}}>
                <Icon name="save" size={30} color="#000000" />
                </View>
                
    </View>
    
    
    
    
   
    <View style={styles.field, {flexDirection:"row"}, {alignItems: "center" }}>
        <Text style={{fontSize:20, marginRight:10, fontWeight: 'bold'}}>Date:</Text>
         
          <DatePicker
          date={this.date} // Initial date from state
          mode="date" // The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2021"
          maxDate="01-01-2100"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          />
        </View>
    
    <View style = {styles.viewStyleForLine}></View>
        <View style={styles.field, {flexDirection:"row"}, {alignItems: "center" }}>
        <Text style={{fontSize:20, marginTop:5, marginRight:10, fontWeight: 'bold'}}>From:</Text>
          <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Shift start"
         // value={start}
          //onChangeText={text => setStart(text)}
    
            >
    
          </TextInput>
        </View>
    
        <View style={styles.field, {flexDirection:"row"}, {alignItems: "center"}}>
          <Text style={{fontSize:20, marginTop:5, marginRight:10, fontWeight: 'bold'}}>To:</Text>
          <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Shift end"
       //   value={end}
          //onChangeText={text => setEnd(text)}
    
            >
    
          </TextInput>
        </View>
        <View style = {styles.viewStyleForLine}></View>
          <View style={styles.field, {alignItems: "center"}}>
          <Text style={{fontSize:20, marginTop:5, marginRight:10, fontWeight: 'bold'}}>Work task</Text>
            <DropDownPicker style={{width:200, backgroundColor: 'white'}} items={[
              { label: 'Coding', value: "coding" },
              { label: 'Paperwork', value: "paperwork" },
              { label: 'Cleaning', value: "Cleaning" },
              { label: 'Project planning', value: "project planning" },
            ]}
            zIndex={50}
            ></DropDownPicker>
    
    <View style = {styles.viewStyleForLine}></View>
    
    
          </View>
          
    
        </View>
      );
    }
}

export default AddEntry;

const styles = StyleSheet.create({
  title:{
        width:150,
        fontSize:30,
        fontWeight: 'bold',
        color: '#fff',    
    },
    title1:{
      color: 'white',
    },
    roundButton2:{
      width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    padding: 10,
    borderRadius: 50,
    backgroundColor: 'black',
    },
  container: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        marginTop:200,
    },
    text: {
        fontSize: 27,
        marginBottom: 40,
        color: '#051d5f',
        width:300,
        
    },
    actionbutton:{
        width:10
    },
    header:{
      backgroundColor: 'skyblue',
        marginTop:150,
        flexDirection:'row',
        marginBottom: 90,
    },
    main:{

    },
    footer:{
        marginTop: 20,
        backgroundColor:'skyblue',
        flexDirection:'row',
    },
    row:{
        margin:20,
        padding:10,
    },
    flex:{
          flexDirection:'row',
    },
    button: {
      margin: 30,
      flexDirection: "row",
      padding: 10,
      backgroundColor: "#73CED6",
      width: 150,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonText: {
      color: "#2B2B52",
      fontSize: 20
    },
    input: {
      height: 40,
      width: "50%",
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 8,
      marginTop: 10,
      marginBottom: 20,
      fontSize: 18,
      backgroundColor: '#DCDCDC'
    },
  
    dropdown: {
      zIndex: 500,
      width:100,
    },
    field: {
      margin: 10,
      flexDirection: "row"
    },
    dropdown: {
      zIndex: 1000,
    },
    viewStyleForLine: {
      borderBottomColor: "black",
      borderBottomWidth: StyleSheet.hairlineWidth,
      alignSelf: 'stretch',
      width: "75%",
      marginLeft: "12%",
      color: 'black',
    }  
});