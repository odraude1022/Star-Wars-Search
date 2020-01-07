import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, Button } from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  }
  render() {
    const {navigation} = this.props
    return (
      <ImageBackground source={require('./background.png')} style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <Image source={require('./logo.png')} style={{height: 100, width: 200}}/>
          <Text style={{color: 'white'}}>Home</Text>
          <Text style={{color: 'white'}}>id: {navigation.getParam('id')}</Text>
          <Text style={{color: 'white'}}>somethingElse: {navigation.getParam('somethingElse')}</Text>
          <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details', {
              id: 45,
              somethingElse: "hello"
            })}  
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 90,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default HomeScreen