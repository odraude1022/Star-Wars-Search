import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, Button, TextInput, ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native';
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
      <ImageBackground source={require('../assets/background.png')} style={{width: '100%', height: '100%'}}>
        <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Image source={require('../assets/logo.png')} style={{height: 100, width: 200}}/>
            <Text h2 style={{color: 'white'}}>People</Text>
            <TextInput
              value={this.state.query}
              onChangeText={text => this.handleChangeText(text)}
              style={{backgroundColor: 'white', width: 200, borderRadius: 10, margin: 30}}
            />
            <View keyboardShouldPersistTaps="never">
              {
                suggestions.map((person, index) => {
                  return(
                    <View key={index}>
                      <Text 
                        style={{color: 'white'}} 
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