import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import * as Font from 'expo-font';

import HomeScreen from './components/HomeScreen'
import DetailsScreen from './components/DetailsScreen'
import PeopleScreen from './components/PeopleScreen'
import PeopleDetailsScreen from './components/PeopleDetailsScreen'
import PlanetsScreen from './components/PlanetsScreen'
import SpeciesScreen from './components/SpeciesScreen'

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    People: PeopleScreen,
    Person: PeopleDetailsScreen,
    Planets: PlanetsScreen,
    Species: SpeciesScreen,
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
  
  componentDidMount() {
    Font.loadAsync({
      'star-wars': require('./assets/fonts/Starjedi.ttf'),
    });
  }


  render() {
    return (
      <AppContainer/>
    );
  }
}