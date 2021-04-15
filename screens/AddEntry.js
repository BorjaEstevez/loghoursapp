
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
   
    render() {
      return (

        <View style={styles.container}>
    
    
    <View style={styles.header}>
    <View style={{alignContent: "flex-start"}, {marginLeft: "1%"}, {marginRight: "20%"}}>
                <Icon name="arrow-left" size={30} color="#000000" />
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
            <DropDownPicker items={[
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
        marginTop:100,
        flexDirection:'row',
        marginBottom: 100,
    },
    main:{

    },
    footer:{

    }
});