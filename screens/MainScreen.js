
import React, { createContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert, Animatable, VirtualizedList } from 'react-native';
import StandardButton from '../components/StandardButton';
import InputField from '../components/InputField';
import Firebase from '../config/Firebasje';  
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FloatingAction } from 'react-native-floating-action';




class MainScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nameUser: '',
            
        };

    }


    goToAddEntry = () =>{
        this.props.changeComponent('Four');
    }


//<IconButton style={{ color: orange[500] }}>add_circle</IconButton>

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                <Text style={styles.text}>Your Entries</Text>
                <TouchableOpacity
                 onPress={() => this.goToAddEntry()}
                  style={styles.roundButton1}>
                     <Text>+</Text>
                 </TouchableOpacity>
                </View>
                <View styles={styles.main}>
                </View>
                <View styles={styles.footer}>

                </View>
            </View>
        );
    }
}

export default MainScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        marginTop:10,
    },
    text: {
        fontSize: 27,
        marginBottom: 10,
        color: '#051d5f',
        width:200,
        alignSelf: 'center',
        
        
    },
    actionbutton:{
        width:10
    },
    header:{
        marginTop:100,
        flexDirection:'row',
        marginLeft: 30,
    },
    main:{

    },
    footer:{

    },
  roundButton1: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
    backgroundColor: 'orange',
  }
});