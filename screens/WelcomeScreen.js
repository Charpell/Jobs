import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to JobApp'},
  { text: 'Use this to get a Job'},
  { text: 'Set your Location, then swipe away'},
]

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        <Slides data={SLIDE_DATA}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});


export default WelcomeScreen;
