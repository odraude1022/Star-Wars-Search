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
          <Button
            title="Go to People Search"
            onPress={() => navigation.navigate('People')}  
          />
          <Button
            title="Go to Planets Search"
            onPress={() => navigation.navigate('Planets')}  
          />
          <Button
            title="Go to Species Search"
            onPress={() => navigation.navigate('Species')}  
          />
        </View>
      </ImageBackground>
    );
  }
}

export default HomeScreen