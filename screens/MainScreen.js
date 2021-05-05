import React, { createContext, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Animatable, VirtualizedList } from 'react-native';
import StandardButton from '../components/StandardButton';
import InputField from '../components/InputField';
import Firebase from '../config/Firebasje';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FloatingAction } from 'react-native-floating-action';
import { ListItem } from '@material-ui/core';
import { FlatList } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

class MainScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nameUser: '',
            WorkData: []
        };
    }

    goToAddEntry = () => {
        this.props.changeComponent('Four');
    }

    componentDidMount() {
        this.getFirestore();
    }

    getFirestore = async () => {
        const current = Firebase.auth().currentUser.uid;
        const db = Firebase.firestore();
        const response = db.collection('users').doc(current).collection("workingdays");
        let workdata = [];
        response.onSnapshot(querySnapShot => {
            querySnapShot.forEach(doc => {
                // console.log(doc.data())
                workdata.push(doc.data());
                //  console.log(doc.id)
            });

            this.setState({ WorkData: workdata })
            console.log(this.state.WorkData)

        });
    }

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: '86%',
                    backgroundColor: '#CED0CE',
                    marginLeft: '5%'
                }}
            />
        )
    }

    render() {
        return (
            <View style={{
                flex: 1,
                paddingHorizontal: 20,
                paddingVertical: 20,
                marginTop: 40,
            }}>
                <Text style={styles.text}>Your Entries</Text>
                <TouchableOpacity
                    onPress={() => this.goToAddEntry()}
                    style={styles.roundButton1}>
                    <Text>+</Text>
                </TouchableOpacity>
                <Text>{this.state.nameUser}</Text>
                <FlatList
                    data={this.state.WorkData}
                    renderItem={
                        ({ item }) => {
                            return (<View
                                style={{
                                    marginTop: 20,
                                    flexDirection: 'row',
                                    padding: 16,
                                    alignItems: 'center',
                                    justifyContent: 'flex-end',
                                }}>
                                <Text
                                    category='s1'
                                    style={{
                                        color: '#000',
                                        width: 200,
                                    }}>{`${item.date}: ${item.workTask}`}
                                </Text>
                                <Text
                                    category='s1'
                                    style={{
                                        color: '#000',
                                        width: 100,
                                    }}>{`${item.shiftStart}-${item.shiftEnd}`}
                                </Text>
                            </View>)
                        }}
                    ItemSeparatorComponent={this.renderSeparator}
                ></FlatList>
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
        marginTop: 10,
    },
    text: {
        fontSize: 27,
        marginBottom: 10,
        color: '#051d5f',
        width: 200,
        alignSelf: 'center',
        marginLeft: 50,
    },
    actionbutton: {
        width: 10
    },
    header: {
        marginTop: 100,
        flexDirection: 'row',
        marginLeft: 30,
    },
    main: {
    },
    footer: {
    },
    roundButton1: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 50,
        backgroundColor: 'orange',
        marginLeft: 140
    }
});