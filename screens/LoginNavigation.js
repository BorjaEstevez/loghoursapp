
import React from 'react'
import { View, Alert, Text, TextInput, StyleSheet } from 'react-native'
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import MainScreen from './MainScreen';
import AddEntry from './AddEntry';


export default class LoginNavigation extends React.Component{

constructor(props) {
    super(props);
    this.state =
    {
      componentSelected: 'One',
    }
  }

  changeComponent = (component) => {
    this.setState({ componentSelected: component });
  }

  renderComponent(component) {
    if (component == 'One') {
      return <LoginScreen changeComponent={this.changeComponent} />
    } else if (component == 'Two') {
      return <RegisterScreen changeComponent={this.changeComponent} />
    } else if (component == 'Three') {
      return <MainScreen changeComponent={this.changeComponent} />
    }else if (component == 'Four') {
      return <AddEntry changeComponent={this.changeComponent} />
    }//else if (component == 'Five') {
     // return <MainScreen changeComponent={this.changeComponent} />
   // }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.renderComponent(this.state.componentSelected)}
      </View>
    );
  }
}