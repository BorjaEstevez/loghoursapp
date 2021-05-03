
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
      end: '',
      date: new Date(),
      show: true,
    };
  }
  //const [date, setDate] = useState(new Date()); // State variable for the data.
  //const [show,setShow] = useState(false); // State variable, that controls, if calendar is visible or not.

  // I don't know if this onChange and toggle its properly code by the way.

  onChange = (_, selectedDate) => {
    // if (Platform.OS === 'ios') { 
    this.setState({ show: false })
    //this.state.show(false);
    // }
    currentDate = selectedDate || date;
    this.setState({ date: currentDate })
    //this.state.date(currentDate);
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
    this.goMainScreen();

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
            placeholder="Shift start"
          // value={start}
          //onChangeText={text => setStart(text)}

          >

          </TextInput>
        </View>

        <View style={styles.field, { flexDirection: "row" }}>
          <Text style={{ fontSize: 20, marginTop: 15, marginRight: 10, fontWeight: 'bold' }}>To</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Shift end"
          //   value={end}
          //onChangeText={text => setEnd(text)}

          >

          </TextInput>
        </View>
        <View style={styles.viewStyleForLine}></View>
        <View style={styles.field}>
          <Text style={{ fontSize: 20, marginTop: 5, marginRight: 10, fontWeight: 'bold' }}>Work task</Text>
          <DropDownPicker style={{ width: 150, backgroundColor: 'white' }} items={[
            { label: 'Coding', value: "coding" },
            { label: 'Paperwork', value: "paperwork" },
            { label: 'Cleaning', value: "Cleaning" },
            { label: 'Project planning', value: "project planning" },
          ]}
            onChangeItem={item => setTask(item.value)}
            zIndex={4000}
          ></DropDownPicker>

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
    flexDirection: "row"
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