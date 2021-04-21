
import React, { createContext, useState } from 'react';
import { View, Text, Pressable, TextInput, TouchableOpacity, Image, StyleSheet, Alert, Animatable, VirtualizedList, Platform } from 'react-native';
import StandardButton from '../components/StandardButton';
import InputField from '../components/InputField';
import Firebase from '../config/Firebasje';  
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FloatingAction } from 'react-native-floating-action';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';

//this gives a hook error and I'm not able to fix it, this all 4 constants.
//Also if you put them inside the class AddEntry for some reason it doesn't works.

//Until here

//THIS IS THE OLD DATEPICKER, THAT DOESN'T WORKS, DON'T DELETE IT JUST IN CASE
//<DatePicker
        //  date={this.date} // Initial date from state
      //    mode="date" // The enum of date, datetime and time
          //placeholder="select date"
          //format="DD-MM-YYYY"
          //minDate="01-01-2021"
          //maxDate="01-01-2100"
          //confirmBtnText="Confirm"
          //cancelBtnText="Cancel"
          // />

class AddEntry extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            start: '',
            end:'',
            date: new Date(),
            show: true,
        }; 
    }
    //const [date, setDate] = useState(new Date()); // State variable for the data.
//const [show,setShow] = useState(false); // State variable, that controls, if calendar is visible or not.

  onChange = (_, selectedDate) => {
      if (Platform.OS === 'ios') { 
        this.state.show(false);
      }
      currentDate = selectedDate || date;
      this.state.date(currentDate);
  };

  toggle = () => {
      this.state.show(prevShow => prevShow);
      console.log('aqui')
  }

  goMainScreen = () => {
      this.props.changeComponent('Three');
      console.log('buttonpressed')
  }

  //{this.date.getDate()}.{this.date.getMonth() + 1}.{this.date.getFullYear()}


    render() {
      return (

        <View style={styles.container}>
    
    
    <View style={styles.header}>
    <View style={{alignContent: "flex-start"}, {marginLeft: "1%"}, {marginRight: "20%"}}>
      <TouchableOpacity onPress={() => this.goMainScreen()}
      style={styles.buttonpressed}>
          <Icon name="arrow-left" size={40} color="#FFFFFF" />
          </TouchableOpacity>
                </View>
                    <Text style={styles.title}>
                       Add Entry
                </Text>

                <View style={{marginRight:"1%"}, {marginLeft:"20%"}}>
                <Icon name="save" size={30} color="#000000" />
                </View>
                
    </View>
   
    <View style={styles.field, {flexDirection:"row"}, {alignItems: "center" }}>
        <Text style={{fontSize:20, marginRight:10, fontWeight: 'bold'}}>Date:</Text>
         
          {this.show && Platform.OS === 'ios' &&  (
          <DateTimePicker
            style={{width: 320}}
            mode={'date'}
            display="inline"
            value={this.date}
            onChange={this.onChange}
          />
          )}
          {this.show && Platform.OS === 'android' &&  (
          <DateTimePicker
            mode={'date'}
            display="default"
            value={this.date}
            onChange={this.onChange}
          />
          )}

        <Pressable 
          onPress={this.toggle}>
          <Text>
            problem here
            {this.state.date}
          </Text>
        </Pressable>
          
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
            <DropDownPicker style={{width:170, backgroundColor: 'white'}} items={[
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
  container: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        marginTop:0,
    },
    header:{
      backgroundColor: 'skyblue',
        marginTop:410,
        flexDirection:'row',
        marginBottom: 0,
        width:390
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
    field: {
      margin: 10,
      flexDirection: "row"
    },
    viewStyleForLine: {
      borderBottomColor: "black",
      borderBottomWidth: StyleSheet.hairlineWidth,
      alignSelf: 'stretch',
      width: "75%",
      marginLeft: "12%",
      color: 'black'
    },
    buttonpressed: {
      width:50,
      height:50
    }
});