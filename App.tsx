/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Splash from './components/Splash';


function App(): React.JSX.Element {
  return (
    <SafeAreaView style={Styles.container}>
      <Splash />
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  container:{
    flex: 1,
  },
});

export default App;
