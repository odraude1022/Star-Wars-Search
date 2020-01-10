import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, Button } from 'react-native';
import styles from '../styles'

class PlanetsScreen extends React.Component {
  render() {
    const {navigation} = this.props
    return(
      <ImageBackground source={require('../assets/background.png')} style={styles.background}>
      </ImageBackground>
    )
  }
}

export default PlanetsScreen