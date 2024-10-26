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
  Text,
} from 'react-native';
import Animated from 'react-native-reanimated';


function App(): React.JSX.Element {
  return (
    <SafeAreaView style={Styles.container}>
      <Animated.View style={Styles.innerContainer}>
        <Text>This is a test</Text>
      </Animated.View>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  innerContainer:{
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
  },
});

export default App;
