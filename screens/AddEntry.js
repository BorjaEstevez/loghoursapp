import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AddEntry() {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [task, setTask] = useState('');


  return (


    <View style={styles.container}>


      <View style={styles.header}>
        <View style={{ alignContent: "flex-start" }, { marginLeft: "2%" }}>
          <Icon name="arrow-left" size={40} color="#FFFFFF" />
        </View>
        <Text style={styles.title}>
          New entry
            </Text>

        <View style={{ marginRight: "2%" }}>
          <Icon name="save" size={40} color="#000000" />
        </View>

      </View>





      <View style={styles.field, { flexDirection: "row" }, { alignItems: "center" }}>
        <Text style={{ fontSize: 20, marginTop: 5, marginRight: 10, fontWeight: 'bold' }}>Date:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Shift start"
          value={start}
          onChangeText={text => setStart(text)}

        >

        </TextInput>
      </View>

      <View style={styles.viewStyleForLine}></View>
      <View style={styles.field, { flexDirection: "row" }, { alignItems: "center" }}>
        <Text style={{ fontSize: 20, marginTop: 5, marginRight: 10, fontWeight: 'bold' }}>From:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Shift start"
          value={start}
          onChangeText={text => setStart(text)}

        >

        </TextInput>
      </View>

      <View style={styles.field, { flexDirection: "row" }, { alignItems: "center" }}>
        <Text style={{ fontSize: 20, marginTop: 5, marginRight: 10, fontWeight: 'bold' }}>To:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Shift end"
          value={end}
          onChangeText={text => setEnd(text)}

        >

        </TextInput>
      </View>
      <View style={styles.viewStyleForLine}></View>
      <View style={styles.field, { alignItems: "center" }}>
        <Text style={{ fontSize: 20, marginTop: 5, marginRight: 10, fontWeight: 'bold' }, { flexDirection: "row" }}>Work task</Text>
        <DropDownPicker items={[
          { label: 'Coding', value: "coding" },
          { label: 'Paperwork', value: "paperwork" },
          { label: 'Cleaning', value: "Cleaning" },
          { label: 'Project planning', value: "project planning" },


        ]}

          zIndex={5000}
        ></DropDownPicker>

        <View style={styles.viewStyleForLine}></View>


      </View>


    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'


  },
  header: {
    backgroundColor: 'skyblue',
    flexDirection: 'row'
  },
  footer: {
    marginTop: 20,
    backgroundColor: 'skyblue',
    flexDirection: 'row'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },

  row: {
    margin: 20,
    padding: 10
  },
  flex: {
    flexDirection: "row"
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
    marginLeft: "12%"
  }
});