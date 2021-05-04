
import React, { createContext, useState } from 'react';
import { View, Text, Pressable, TextInput, TouchableOpacity, Button, Image, StyleSheet, Alert, Animatable, VirtualizedList, Platform } from 'react-native';
import StandardButton from '../components/StandardButton';
import InputField from '../components/InputField';
import Firebase from '../config/Firebasje';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FloatingAction } from 'react-native-floating-action';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';

//OLD DROPDOWN PICKER
//<DropDownPicker style={{ width: 150, backgroundColor: 'white' }} items={[
//  { label: 'Coding', value: "coding" },
//  { label: 'Paperwork', value: "paperwork" },
//  { label: 'Cleaning', value: "Cleaning" },
//  { label: 'Project planning', value: "project planning" },
//]}
//  onChangeItem={item => setTask(item.value)}
//  zIndex={4000}
//></DropDownPicker>
class AddEntry extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      start: '',
      end: '',
      date: new Date(),
      show: true,
      worktask:'coding',
    };
  }

  onChange = (_, selectedDate) => { 
    this.setState({ show: false }) 
    currentDate = selectedDate || date;
    this.setState({ date: currentDate })
  };

  toggle = () => {
    this.setState(state => ({
      show: !state.show
    }))
  }

  goMainScreen = () => {
    this.props.changeComponent('Three');
    console.log('buttonpressed')
  }

  handleSave = () => {
    const db = Firebase.firestore();
    const current = Firebase.auth().currentUser;
    console.log(current)
   // this.goMainScreen();

    db.collection("users").doc(current.uid).collection("workingdays").doc(this.state.date.toDateString()).set({
      shiftStart: "startTime",
      shiftEnd:"endTime",
      workTask: "task"

    })
    
}

  render() {
    return (

      <View style={styles.container}>

        <View style={styles.header}>
          <View style={{ alignContent: "flex-start" }, { marginLeft: "1%" }, { marginRight: "20%" }}>
            <TouchableOpacity onPress={() => this.goMainScreen()}
              style={styles.buttonpressed}>
              <Icon name="arrow-left" size={40} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>
            Add Entry
                </Text>

          <View style={{ marginRight: "1%" }, { marginLeft: "20%" }}>
            <TouchableOpacity onPress ={() => this.handleSave()}
            style={styles.buttonpressed}>
            <Icon name="save" size={30} color="#000000" />
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.field, { flexDirection: "row" }, { alignItems: "center" }, { marginBottom: 20 }}>
          <Text style={{ fontSize: 20, marginRight: 10, fontWeight: 'bold', marginBottom: 10 }}>Date:</Text>

          {this.state.show && Platform.OS === 'ios' && (
            <DateTimePicker
              style={{ width: 320 }}
              mode={'date'}
              display="inline"
              value={this.state.date}
              onChange={this.onChange}
            />
          )}
          {this.state.show && Platform.OS === 'android' && (
            <DateTimePicker
              mode={'date'}
              display="default"
              value={this.state.date}
              onChange={this.onChange}
            />
          )}

          <Pressable
            onPress={this.toggle}>
            <Text>
              {this.state.date.getDate()}.{this.state.date.getMonth() + 1}.{this.state.date.getFullYear()}

            </Text>
          </Pressable>

        </View>

        <View style={styles.viewStyleForLine}></View>
        <View style={styles.field}>
          <Text style={{ fontSize: 20, marginTop: 10, marginRight: 10, fontWeight: 'bold' }}>From</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Shift start">
          </TextInput>
        </View>

        <View style={styles.field, { flexDirection: "row" }}>
          <Text style={{ fontSize: 20, marginTop: 15, marginRight: 10, fontWeight: 'bold' }}>To</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Shift end">
          </TextInput>
        </View>

        <View style={styles.viewStyleForLine}></View>
        <View style={styles.field}>
          <Text style={{ fontSize: 20, marginTop: 5, marginRight: 10, fontWeight: 'bold' }}>Work task</Text>
          
          <Picker
            selectedValue = {this.state.worktask}
            style = {{ height:50, width: 200}}
            onValueChange = {(itemValue, itemIndex) => this.setState({worktask: itemValue})}>
            <Picker.Item label = "Coding" value = "coding"/>
            <Picker.Item label = "Paperwork" value = "paperwork"/>
            <Picker.Item label = "Cleaning" value = "cleaning"/>
            <Picker.Item label = "Project planning" value = "project planing"/>
            </Picker>
        </View>
      </View>
    );
  }
}

export default AddEntry;

const styles = StyleSheet.create({
  title: {
    width: 150,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    marginTop: 0,
  },
  header: {
    backgroundColor: 'skyblue',
    marginTop: 30,
    flexDirection: 'row',
    marginBottom: 0,
    width: 390
  },
  input: {
    height: 40,
    width: "40%",
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
  },
  viewStyleForLine: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignSelf: 'stretch',
    width: "75%",
    marginLeft: "12%",
    marginTop: 70,
    color: 'black'
  },
  buttonpressed: {
    width: 50,
    height: 50
  }
});