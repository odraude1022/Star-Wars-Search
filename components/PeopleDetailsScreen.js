import React from 'react'
import { Text, View, ImageBackground, Image} from 'react-native';
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

  render() {
    const {navigation} = this.props
    const person = navigation.getParam('person')
    return(
      <ImageBackground source={require('../assets/background.png')} style={styles.background}>
        <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.logo}/>
          <Text style={styles.heading}>{person.name}</Text>
          <Text style={styles.info}>Born: {person.birth_year}</Text>
          <Text style={styles.info}>Homeworld: {this.state.homeworld}</Text>
          <Text style={styles.info}>Species: {this.state.species}</Text>
          <Text style={styles.info}>Gender: {person.gender}</Text>
          <Text style={styles.info}>Height: {person.height} cm</Text>
          <Text style={styles.info}>Mass: {person.mass} kg</Text>
          <Text style={styles.info}>Hair Color: {person.hair_color}</Text>
          <Text style={styles.info}>Eye Color: {person.eye_color}</Text>
        </View>
      </ImageBackground>
    )
  }
}

export default PeopleDetailsScreen