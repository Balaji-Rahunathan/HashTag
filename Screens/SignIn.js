import React, { Component } from 'react';
import Container from '../Components/Container/Container';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class SignIn extends Component {
  static navigationOptions=({navigation}) => ({
    header:null

  })
  static defaultProps = {
    title: 'Default Header'
  }

  render() {
    return (
      <Container styles={css.container} >
        <Text style={css.header}>Tamil News
        </Text>
        </Container>
    );
  }

}

const css = StyleSheet.create({
  container: {
    flex:1,
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop:40,
  },
});