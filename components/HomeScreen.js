import React from 'react'
import { Text, View, ImageBackground, Image, Button } from 'react-native';
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
          <Text style={styles.heading}>Home</Text>
          <View style={styles.buttonView}>
            <Text style={styles.button} onPress={() => navigation.navigate('People')}>
              Go to People Search
            </Text>
          </View>
          <View style={styles.buttonView}>
            <Text style={styles.button} onPress={() => navigation.navigate('Planets')}  >
              Go to Planets Search
            </Text>
          </View>
          <View style={styles.buttonView}>
            <Text style={styles.button} onPress={() => navigation.navigate('Species')}>
              Go to Species Search
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default HomeScreen