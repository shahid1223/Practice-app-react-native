import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {numbers.map((num) => {
        return (
          <Button title="1">{num}</Button>
        )
      })}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
