import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import * as Font from 'expo-font';

import HomeScreen from './components/HomeScreen'
import PeopleScreen from './components/PeopleScreen'
import PeopleDetailsScreen from './components/PeopleDetailsScreen'
import PlanetsScreen from './components/PlanetsScreen'
import PlanetsDetailsScreen from './components/PlanetsDetailsScreen'
import SpeciesScreen from './components/SpeciesScreen'
import SpeciesDetailsScreen from './components/SpeciesDetailsScreen'

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    People: PeopleScreen,
    Person: PeopleDetailsScreen,
    Planets: PlanetsScreen,
    Planet: PlanetsDetailsScreen,
    Species: SpeciesScreen,
    SpeciesDetails: SpeciesDetailsScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerTransparent: true,
      headerTintColor: "white",
      headerTitleStyle: {
      fontWeight: 'bold',
      }
    }
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  state = {fontLoaded: false}
  
  async componentDidMount() {
    await Font.loadAsync({
      'star-wars': require('./assets/fonts/Starjedi.ttf'),
    });
    this.setState({fontLoaded: true})
  }


  render() {
    if(!this.state.fontLoaded) {
      return null
    }
    return (
      <AppContainer/>
    );
  }
}