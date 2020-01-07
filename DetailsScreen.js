import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, Button } from 'react-native';

class DetailsScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('otherParam', `${navigation.getParam('id')} Details`),
    }
  }
  render() {
    const {navigation} = this.props
    return (
      <ImageBackground source={require('./background.png')} style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <Image source={require('./logo.png')} style={{height: 100, width: 200}}/>
          <Text style={{color: 'white'}}>Details</Text>
          <Text style={{color: 'white'}}>id: {navigation.getParam('id')}</Text>
          <Text style={{color: 'white'}}>somethingElse: {navigation.getParam('somethingElse')}</Text>
          <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home', {
              id: 54,
              somethingElse: "goodbye"
            })}  
          />
          <Button
            title="Update the title"
            onPress={() => navigation.setParams({ title: 9, otherParam: 'Updated!' })}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 90,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default DetailsScreen