import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, Button, TextInput, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';

import styles from '../styles'

class PeopleDetailsScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('name'),
    }
  }

  render() {
    const {person, name} = this.props
    return(
      <ImageBackground source={require('../assets/background.png')} style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <Text>{name}</Text>
        </View>
      </ImageBackground>
    )
  }
}

export default PeopleDetailsScreen