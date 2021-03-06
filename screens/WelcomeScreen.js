import React, { Component } from "react";
import { StyleSheet, View, Text, AsyncStorage } from "react-native";
import { connect } from 'react-redux';
import { AppLoading } from 'expo';
import _ from 'lodash';

import store from '../store'
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to JobApp', color: '#03A9F4'},
  { text: 'Use this to get a Job', color: '#009688'},
  { text: 'Set your Location, then swipe away', color:'#03A9F4'},
]

class WelcomeScreen extends Component {
  state= { token: null }

  async componentWillMount() {
    let token = await AsyncStorage.getItem('fb_token');

    if (token) {
      this.props.navigation.navigate('map')
      this.setState({ token })
    } else {
      this.setState({ token: false })
    }
  }

  onSLidesComplete() {
    this.props.navigation.navigate('auth')
  }

  render() {
    if (_.isNull(this.state.token)) {
      return <AppLoading />
    }

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
