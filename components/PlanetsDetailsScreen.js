import React from 'react'
import { Text, View, ImageBackground, Image} from 'react-native';
import axios from 'axios'

import styles from '../styles'

class PlanetsDetailsScreen extends React.Component {

  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('planet').name,
    }
  }

  // componentDidMount() {
  //   const planet = this.props.navigation.getParam('planet')
  //   axios.get(person.homeworld).then(res => this.setState({homeworld: res.data.name}))
  //   axios.get(person.species[0]).then(res => this.setState({species: res.data.name}))
  // }

  render() {
    const {navigation} = this.props
    const planet = navigation.getParam('planet')
    console.log(planet)
    return(
      <ImageBackground source={require('../assets/background.png')} style={styles.background}>
        <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.logo}/>
          <Text style={styles.heading}>{planet.name}</Text>
          <Text style={styles.info}>Rotation Period: {planet.rotation_period} Hours</Text>
          <Text style={styles.info}>orbital Period: {planet.orbital_period} Days</Text>
          <Text style={styles.info}>Diameter: {planet.diameter} km</Text>
          <Text style={styles.info}>Climate: {planet.climate}</Text>
          <Text style={styles.info}>Gravity: {planet.gravity}</Text>
          <Text style={styles.info}>Surface Water: {planet.surface_water === "unknown" ? planet.surface_water : `${planet.surface_water} Percent`}</Text>
          <Text style={styles.info}>Population: {planet.population}</Text>
        </View>
      </ImageBackground>
    )
  }
}

export default PlanetsDetailsScreen