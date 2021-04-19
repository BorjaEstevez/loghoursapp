  
import React, { Component, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import StandardButton from '../components/StandardButton';
import InputField from '../components/InputField';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Firebase from '../config/Firebasje';


class RegisterScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            username: '',
            name: "",
            isValidEmail: true,
            isValidPassword: true,
            isInvalidInput: true,
            isvalidUsername: true,
            isValidName: true,
        }
    }


    
    handleValidPassword = (val) => {
        if (val.trim().length >= 5) {
            this.state.isValidPassword = true;
        }
        else {
            this.state.isValidPassword = false;
        }
    }

    
    handleValidName = (val) => {
        if (val.trim().length >= 1 && isNaN(val)) {
            this.state.isValidName = true;
        }
        else {
            this.state.isValidName = false;
        }

        if (this.state.isValidName == false) {
            alert("The name has to be a string value longer than 1 char.");
        }
    }

    
    handleValidEmail = (val) => {
        var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (val.trim().length >= 5) {
            if (regEmail.test(val)) {
                this.state.isValidEmail = true;
            }
            else {
                this.state.isValidEmail = true;
            }
        }
        else {
            this.state.isValidEmail = true;
        }
    }

   

    
    handleValidUsername = (val) => {
        if (val.trim().length >= 1) {
            for (let item of this.state.users) {
                if (item.username == val) {
                    alert("The username entered " + item.username + " is already in use. Try a different username.");
                    this.state.isvalidUsername = false;
                    break;
                }
                else {
                    this.state.isvalidUsername = true;
                }
            }
        }
        else{
            this.state.isvalidUsername = false;
            alert("The username must be longer than 1 character");
        }
    }

    
    handleRegister = () => {
        if (this.state.isValidName) {
            if(this.state.name==""){
                alert("give input with the name");
                return;
            }
            console.log("name: ", this.state.name);
            if (this.state.isvalidUsername) {
                console.log("username: ", this.state.username);
                if (this.state.isValidPassword) {
                    if (this.state.password == "") {
                        alert("give input with the password");
                        return;
                    }
                    console.log("password: ", this.state.password);
                    if (this.state.isValidEmail) {
                        if (this.state.email == "") {
                            alert("give input with the email");
                            return;
                        }
                        console.log("email: ", this.state.email);
                        this.handleSignUp();
                    } else {
                        alert("There is still invalid input, check each field before pushing the registration button.");
                    }
                } else {
                    alert("There is still invalid input, check each field before pushing the registration button.");
                }
            } else {
                alert("There is still invalid input, check each field before pushing the registration button.");
            }
        }
    }

    
    goToLogin = () => {
        this.props.changeComponent('One');
    }

    handleSignUp = () => {
        Firebase.auth()         
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => this.goToLogin())
            .catch(error => console.log(error))
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Create your profile here!</Text>
                <InputField
                    labelValue={this.state.name}
                    onChangeText={(name) => this.setState({ name }, (name) => this.handleValidName(this.state.name))}
                    placeholderText="Name"
                    iconType="user"
                    secureTextEntry={false}
                    autoCapitalize="none"
                />

                <InputField
                    labelValue={this.state.email}
                    onChangeText={(email) => this.setState({ email }, (email) => this.handleValidEmail(this.state.email))}
                    placeholderText="Email"
                    iconType="user"
                    secureTextEntry={false}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                {this.state.isValidEmail ? null :
                    <Text style={styles.errorMessage}>The email needs to look like xxx@domain</Text>
                }

                <InputField
                    labelValue={this.state.password}
                    onChangeText={(password) => this.setState({ password }, (password) => this.handleValidPassword(this.state.password))}
                    placeholderText="Password"
                    iconType="lock"
                    secureTextEntry={true}
                />
                {this.state.isValidPassword ? null :
                    <Text style={styles.errorMessage}>The password needs to be 6 characters long</Text>
                }

                <View>
                    <Text style={styles.textPrivate}>By registering you agree with our Terms of Service and Privacy Policy.</Text>
                </View>

                <StandardButton
                    buttonTitle="Register Now"
                    onPress={() => { this.handleRegister() }}
                />

                <TouchableOpacity style={styles.forgotButton} onPress={() => this.goToLogin()}>
                    <Text style={styles.navButtonText} >Already registered? Sign in</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
    },
    text: {
        fontSize: 27,
        marginBottom: 10,
        color: '#051d5f',
    },
    navButton: {
        marginTop: 15,
    },
    forgotButton: {
        marginVertical: 35,
    },
    navButtonText: {
        fontSize: 17,
        fontWeight: '500',
        color: '#2e64e5',
    },
    textPrivate: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 19,
        textAlign: "center",
    },
    errorMessage: {
        color: '#FE0000',
    },
    errorMessage2: {
        color: '#FE0000',
        fontSize: 23,
    }
});