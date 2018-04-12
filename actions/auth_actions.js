import { AsyncStorage } from 'react-native';

import {
  FACEBOOK_LOGIN_SUCCESS
} from './types';

// How to use AsyncStorage
// AsyncStorage.setItem('fb_token', token);
// AsyncStorage.getItem('fb_token');

export const facebookLogin = () => {
  return function(dispatch) {
    let token = await AsyncStorage.getItem('fb_token');
    if (token) {
      // DIspatch an action saying FB login is done
    } else {
      // Start up FB Login process
    }

  }

}