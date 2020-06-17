import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellowView}>
        <Text>Ciao!</Text>
        </View>
      <View style={styles.blueView}>
        <Text>Annyong!</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  yellowView: {
    flex: 1,
    backgroundColor: 'pink'
  },

  blueView: {
    flex: 1,
    backgroundColor: 'blue'
  }

});
