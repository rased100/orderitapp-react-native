/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Router from './src/router/Router';
import {SafeAreaView} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <Router />
    </SafeAreaView>
  );
}

export default App;
