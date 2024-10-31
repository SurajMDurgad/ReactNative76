import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

export type Item = {
  id: number;
  brand: string;
  thumbnail: string;
  title: string;
  description: string;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  },
  price: number,
  warrantyInformation: string,
  shippingInformation: string
}

type Props = {
  item: Item
}

const EachItem = (props: Props) => {
  const { item } = props;
  return (
    <View style={Styles.eachItemContainer}>
      <Image source={{ uri: item.thumbnail }} style={Styles.image} />
      <Text style={Styles.brand} numberOfLines={1}>{item.brand}</Text>
      <Text style={Styles.title}>{item.title}</Text>
      <Text style={Styles.description}>{item.description}</Text>
      <Text style={Styles.dimensions}>Dimension: {item.dimensions.width} x {item.dimensions.height} x {item.dimensions.depth}</Text>
      <Text style={Styles.shippingInformation}>Ships in: {item.shippingInformation}</Text>
      <Text style={Styles.warrantyInformation}>Warranty: {item.warrantyInformation}*</Text>
      <Text style={Styles.price}>${item.price}</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  image: {
    width: '100%',
    height: Dimensions.get('window').height / 3,
    resizeMode: 'contain',
  },
  eachItemContainer: {
    flex: 1,
    padding: 20,
    height: Dimensions.get('window').height - 200,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#808080',
    gap: 10,
  },
  brand:{
    fontWeight: '900',
    fontSize: 30,
  },
  title: {
    fontWeight: '600',
    fontSize: 20,
  },
  description: {
  },
  dimensions:{
    fontWeight: '600',
    fontSize: 16,
  },
  price:{
    fontWeight: '900',
    fontSize: 40,
    textAlign: 'right',
    position: 'absolute',
    bottom: 10,
    right: 20,
  },
  shippingInformation:{
    fontWeight: '600',
    fontSize: 16,
  },
  warrantyInformation:{
    fontWeight: '200',
    fontSize: 12,
    fontStyle: 'italic',
  },
});

export default React.memo(EachItem);
