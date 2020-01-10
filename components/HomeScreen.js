import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, Button } from 'react-native';
import styles from '../styles'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  }
  render() {
    const {navigation} = this.props
    return (
      <ImageBackground source={require('../assets/background.png')} style={styles.background}>
        <View style={styles.container}>
          <Image source={require('../assets/logo.png')} style={styles.logo}/>
          <Text style={styles.info}>Home</Text>
          <Text style={styles.info}>id: {navigation.getParam('id')}</Text>
          <Text style={styles.info}>somethingElse: {navigation.getParam('somethingElse')}</Text>
          <Button
            title="Go to People Search"
            onPress={() => navigation.navigate('People')}  
          />
          <Button
            title="Go to Planets Search"
            onPress={() => navigation.navigate('Planets')}  
          />
        </View>
      </ImageBackground>
    );
  }
}

export default HomeScreen