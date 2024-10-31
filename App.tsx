import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Home from './components/Home';
import Splash from './components/Splash';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {

  const Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#FFF',
    },
  };

  return (
    <SafeAreaView style={Styles.container}>
      <NavigationContainer theme={Theme}>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false, gestureEnabled: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  container:{
    flex: 1,
  },
});

export default App;
