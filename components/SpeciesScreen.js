import React from 'react'
import { Text, TextInput, View, ScrollView, TouchableWithoutFeedback, ImageBackground, Image, Keyboard } from 'react-native'
import styles from '../styles'

import axios from 'axios'

class SpeciesScreen extends React.Component {

  state = {query: '', species: [], suggestions: []}

  componentDidMount() {
    this.fetchSpecies("https://swapi.co/api/species/")
  }

  fetchSpecies = async url => {
    try {
      let data = (await axios.get(url)).data
      this.setState({species: [...this.state.species, ...data.results]})
      if(data.next) {
        this.fetchSpecies(data.next)
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
    const {species} = this.state
    const suggestions = species.filter(species => {
      return species.name.toLowerCase().includes(text.toLowerCase())
    })
    this.setState({suggestions})
  }

  render() {
    const {navigation} = this.props
    const {species, suggestions} = this.state
    return(
      <ImageBackground source={require('../assets/background.png')} style={styles.background}>
        <ScrollView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              <Image source={require('../assets/logo.png')} style={styles.logo}/>
              <Text style={styles.heading}>Species</Text>
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

export default SpeciesScreen