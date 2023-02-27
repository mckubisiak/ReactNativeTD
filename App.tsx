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
  TextInput,
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
    textDecorationLine: item.complete ? 'line-through' : 'none',
  };
  return (
    <View style={styles.item}>
      <Text style={[styles.title, linethrough]}>{item.title}</Text>
    </View>
  );
};

const toggleCompletion = () =>
{
  
}

function App(): JSX.Element {
  const [toDos, setToDos] = React.useState(todos);
  const [text, onChangeText] = React.useState('Useless Text');
  const addToDo = (event) => {

const newToDo = {
  id: toDos.length,
    title: event.nativeEvent.text,
    complete: false,
}

    setToDos([...toDos,newToDo])
    onChangeText('')

  }
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        onSubmitEditing={addToDo}
      />
      <FlatList
        data={toDos}
        renderItem={({ item }) => (
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;
