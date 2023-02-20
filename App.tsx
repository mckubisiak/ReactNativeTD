/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const todos = [
  {
    id: 0,
    title: 'Walk the dog',
    complete: true,
  },
  {
    id: 1,
    title: 'Pet the cat',
    complete: true,
  },
  {
    id: 2,
    title: 'Water the plants',
    complete: false,
  },
];

const Item = function (item) {
  const linethrough = {
    textDecorationLine: item.complete ? 'line-through' : 'None',
  };
  return (
    <View style={styles.item}>
      <Text style={[styles.title, linethrough]}>{item.title}</Text>
    </View>
  );
};
function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={todos}
        renderItem={({item}) => (
          <Item title={item.title} complete={item.complete} />
        )}
        // keyExtractor = {item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
