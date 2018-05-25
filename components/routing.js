
import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './Home';
import Andreea from './chat_ui.js';



const RootStack = StackNavigator({
  Home: {
      screen: HomeScreen,
    },
    chat: {
      screen:Andreea,
    },
  },
  {
  headerMode: 'none',
    initialRouteName: 'Home',
  }
);


export default class R extends React.Component {
  render() {
    return <RootStack />;
  }
}

  