import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, Button } from 'react-native';

class DetailsScreen extends React.Component {
  render() {
    return (
      <ImageBackground source={require('./background.png')} style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <Image source={require('./logo.png')} style={{height: 100, width: 200}}/>
          <Text style={{color: 'white'}}>Details</Text>
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.push('Home')}  
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default DetailsScreen