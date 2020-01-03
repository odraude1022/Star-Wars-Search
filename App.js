import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

export default function App() {
  return (
    // <ImageBackground source={require('./background.png')} style={{height: '100%', width: '100%'}}>
    <ImageBackground source={require('./background.png')} style={{width: '100%', height: '100%'}}>
      <View style={styles.container}>
        <Text style={{color: 'white'}}>Open up App.js to start working on your app!</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
