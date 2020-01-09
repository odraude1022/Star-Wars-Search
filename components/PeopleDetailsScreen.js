import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, Button, TextInput, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import axios from 'axios'

import styles from '../styles'

class PeopleDetailsScreen extends React.Component {

  state = {homeworld: "", species: ""}

  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('person').name,
    }
  }

  componentDidMount() {
    const person = this.props.navigation.getParam('person')
    axios.get(person.homeworld).then(res => this.setState({homeworld: res.data.name}))
    axios.get(person.species[0]).then(res => this.setState({species: res.data.name}))
  }

  getHomeworld = async () => {
    
  }

  render() {
    const {navigation} = this.props
    const person = navigation.getParam('person')
    return(
      <ImageBackground source={require('../assets/background.png')} style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={{height: 100, width: 200}}/>
          <Text style={{color: 'yellow', fontSize: 25}}>{person.name}</Text>
          <Text style={{color: 'yellow'}}>Born: {person.birth_year}</Text>
          <Text style={{color: 'yellow'}}>Homeworld: {this.state.homeworld}</Text>
          <Text style={{color: 'yellow'}}>Species: {this.state.species}</Text>
          <Text style={{color: 'yellow'}}>Gender: {person.gender}</Text>
          <Text style={{color: 'yellow'}}>Height: {person.height} cm</Text>
          <Text style={{color: 'yellow'}}>Mass: {person.mass} kg</Text>
          <Text style={{color: 'yellow'}}>Hair Color: {person.hair_color}</Text>
          <Text style={{color: 'yellow'}}>Eye Color: {person.eye_color}</Text>
        </View>
      </ImageBackground>
    )
  }
}

export default PeopleDetailsScreen