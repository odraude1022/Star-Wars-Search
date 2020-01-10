import React from 'react'
import { Text, View, ImageBackground, Image, TextInput, ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import axios from 'axios'

import styles from '../styles'

class PeopleScreen extends React.Component {
  state = {query: "", people: [], suggestions: []}

  async componentDidMount() {
    await this.fetchPeople('https://swapi.co/api/people/')
  }

  fetchPeople = async (url) => {
    try {
      let data = (await axios.get(url)).data
      this.setState({people: [...this.state.people, ...data.results]})
      if(data.next) {
        this.fetchPeople(data.next)
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

  getSuggestions = (text) => {
    if(!text) {
      return this.setState({suggestions: []})
    }
    const {people} = this.state
    const suggestions = people.filter(person => {
      return person.name.toLowerCase().includes(text.toLowerCase())
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
            <Text style={styles.heading}>People</Text>
            <TextInput
              value={this.state.query}
              onChangeText={text => this.handleChangeText(text)}
              style={styles.input}
            />
            <View keyboardShouldPersistTaps="never">
              {
                suggestions.map((person, index) => {
                  return(
                    <View key={index}>
                      <Text 
                        style={styles.info} 
                        onPress={() => navigation.navigate('Person', {person})}
                      >
                       {person.name}
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

export default PeopleScreen