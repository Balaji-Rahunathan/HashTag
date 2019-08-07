import React, { Component } from 'react';
import TextInputComp from '../Components/TextInputComp';
import Container from '../Components/Container/Container';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import TitleText from '../Components/TitleText';
import SubTitle from '../Components/SubTitle';

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
        <TitleText name= "Discussions"></TitleText>

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