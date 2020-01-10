import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 90,
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontFamily: 'star-wars'
  },
  background: {
    width: '100%', 
    height: '100%',
  },
  logo: {
    height: 100, 
    width: 200
  },
  heading: {
    color: 'yellow', 
    fontSize: 25,
    fontFamily: 'star-wars'
  },
  info: {
    color: 'yellow',
    fontFamily: 'star-wars'
  },
  input: {
    backgroundColor: 'white', 
    width: 200, 
    borderRadius: 10,
    margin: 30,
    fontFamily: 'star-wars'
  }
});

export default styles