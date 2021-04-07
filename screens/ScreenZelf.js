  
import { render } from 'react-dom';
import * as React from 'react';
import {View,Text,} from 'react-native';
import LoginNavigation from './LoginNavigation';

export default class Screenzelf extends React.Component{
    render(){
      return (
        <View style={{flex: 1}}>
          <LoginNavigation />
        </View>
      );
    }
  }