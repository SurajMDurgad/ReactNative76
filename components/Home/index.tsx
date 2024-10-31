/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useCallback, useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import EachItem, { Item } from './EachItem';
import ListHeaderComponent from './ListHeaderComponent';
import Loader from './Loader';



const Home = ({navigation}: any) => {
  const [allData, setAllData] = useState([]);
  const [dataToLoad, setDataToLoad] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = useCallback(async ()=>{
    setLoading(true);
    const data = await fetch('https://dummyjson.com/products?limit=0');
    const json = await data.json();
    setAllData(json.products);
    setDataToLoad(json.products.slice(0, 10));
    setLoading(false);
  },[]);

  // onMount
  useEffect(()=>{
    getData();
  },[getData]);

  return (
    <View style={Styles.container}>
      {
        loading ?
        <Loader /> :
        <FlatList
        ListHeaderComponent={ListHeaderComponent}
        data={dataToLoad}
        keyExtractor={(item: Item) => item.id.toString()}
        onEndReached={()=>{
          setDataToLoad(allData.slice(0 ,dataToLoad.length + 10));
        }}
        renderItem={({item})=>(
          <EachItem
            item={item} />
        )}/>
      }

    </View>
  );
};

const Styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default React.memo(Home);
