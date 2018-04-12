import React, { Component } from "react";
import { View, Text } from "react-native";
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to JobApp'},
  { text: 'Set your Location, then swipe away'},
]

class WelcomeScreen extends Component {
  render() {
    return (
      <View>
        <Slides data={SLIDE_DATA}/>
      </View>
    );
  }
}

export default WelcomeScreen;
