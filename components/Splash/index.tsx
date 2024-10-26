/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  Image,
  StyleSheet,
  View,
} from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withSpring } from 'react-native-reanimated';


const Splash = () => {
  const animatedValue = useSharedValue(0);

  useEffect(()=>{
    animatedValue.value = withDelay(400,withSpring(1, {
      duration: 1000,
    }));
  },[animatedValue]);

  const animatedReactIconStyle = useAnimatedStyle(()=>{
    const rotate = `${animatedValue.value * 360}deg`;
    return {
      transform: [
        {rotate},
      ],
    };
  },[]);

  const animatedReactTextStyle = useAnimatedStyle(()=>{
    const scale = animatedValue.value;
    return {
      transform:[
        {
          scale,
        },
      ],
    };
  },[]);

  return (
    <View style={Styles.container}>
      <Animated.View style={animatedReactIconStyle}>
        <Image
          source={{ uri: 'https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png' }}
          style={Styles.image} />
      </Animated.View>
      <Animated.Text style={[Styles.text, animatedReactTextStyle]}>Welcome to React 0.76</Animated.Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image:{
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  text:{
    fontSize:30,
    fontWeight: '600',
    marginTop: 10,
  },
});

export default React.memo(Splash);
