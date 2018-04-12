import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to JobApp', color: '#03A9F4'},
  { text: 'Use this to get a Job', color: '#009688'},
  { text: 'Set your Location, then swipe away', color:'#03A9F4'},
]

class WelcomeScreen extends Component {
  onSLidesComplete() {
    this.props.navigation.navigate('auth')
  }

  render() {
    return (
      <View style={styles.container}>       
        <Slides data={SLIDE_DATA} onComplete={this.onSLidesComplete.bind(this)} />
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
