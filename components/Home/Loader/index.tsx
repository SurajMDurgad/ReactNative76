import LottieView from 'lottie-react-native';
import React from 'react';
import { StyleSheet } from 'react-native';

const Loader = () => {
  console.log('inside Loader');
  return (
    <>
      <LottieView
        style={Styles.animation}
        source={require('./loader.json')}
        autoPlay
        loop />
    </>
  );
};

const Styles = StyleSheet.create({
  animation: {
    width: 300,
    height: 300,
  },
});

export default React.memo(Loader);
