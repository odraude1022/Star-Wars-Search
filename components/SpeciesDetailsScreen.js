import React from 'react'
import { Text, View, ImageBackground, Image} from 'react-native';
import axios from 'axios'

import styles from '../styles'

class SpeciesDetailsScreen extends React.Component {

  state = {homeworld: ""}

  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('species').name,
    }
  }

  componentDidMount() {
    const species = this.props.navigation.getParam('species')
    axios.get(species.homeworld).then(res => this.setState({homeworld: res.data.name}))
  }

  render() {
    const {navigation} = this.props
    const species = navigation.getParam('species')
    return(
      <ImageBackground source={require('../assets/background.png')} style={styles.background}>
        <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.logo}/>
          <Text style={styles.heading}>{species.name}</Text>
          <Text style={styles.info}>Classification: {species.classification}</Text>
          <Text style={styles.info}>Designation: {species.designation}</Text>
          <Text style={styles.info}>Average Height: {species.average_height} cm</Text>
          <Text style={styles.info}>Skin Colors: {species.skin_colors}</Text>
          <Text style={styles.info}>Hair Colors: {species.hair_colors}</Text>
          <Text style={styles.info}>Eye Colors: {species.eye_colors}</Text>
          <Text style={styles.info}>Average Lifespan: {species.average_lifespan}</Text>
          <Text style={styles.info}>Homeworld: {this.state.homeworld}</Text>
          <Text style={styles.info}>Language: {species.language}</Text>
        </View>
      </ImageBackground>
    )
  }
}

export default SpeciesDetailsScreen