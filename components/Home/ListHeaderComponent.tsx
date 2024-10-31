import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ListHeaderComponent = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Products</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  container:{
    marginHorizontal: 10,
    paddingBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
  },
});

export default React.memo(ListHeaderComponent);
