import React from 'react'
import { StyleSheet, Text, TextInput, View, ScrollView, TouchableWithoutFeedback, ImageBackground, Image, Keyboard } from 'react-native'
import axios from 'axios'
import styles from '../styles'

class PlanetsScreen extends React.Component {

  state = {query: "", planets: [], suggestions: []}

  async componentDidMount() {
    await this.fetchPlanets('https://swapi.co/api/planets/')
  }

  fetchPlanets = async (url) => {
    try {
      let data = (await axios.get(url)).data
      this.setState({planets: [...this.state.planets, ...data.results]})
      if(data.next) {
        this.fetchPlanets(data.next)
      }
    }
    catch(error) {
      console.log(error)
    }
  }

  handleChangeText = text => {
    this.setState({query: text})
    this.getSuggestions(text)
  }

  getSuggestions = text => {
    if(!text) {
      return this.setState({suggestions: []})
    }
    const {planets} = this.state
    const suggestions = planets.filter(planet => {
      return planet.name.toLowerCase().includes(text.toLowerCase())
    })
    this.setState({suggestions})
  }

  render() {
    const {navigation} = this.props
    const {suggestions} = this.state
    return(
      <ImageBackground source={require('../assets/background.png')} style={styles.background}>
        <ScrollView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              <Image source={require('../assets/logo.png')} style={styles.logo}/>
              <Text style={styles.heading}>Planets</Text>
              <TextInput
                value={this.state.query}
                onChangeText={text => this.handleChangeText(text)}
                style={styles.input}
              />
              <View keyboardShouldPersistTaps="never">
                {
                  suggestions.map((suggestion, index) => {
                    return(
                      <View key={index}>
                        <Text 
                          style={styles.info} 
                          onPress={() => navigation.navigate('Planet', {planet: suggestion})}
                        >
                         {suggestion.name}
                        </Text>
                      </View>
                    )
                  })
                }
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </ImageBackground>
    )
  }
}

export default PlanetsScreen