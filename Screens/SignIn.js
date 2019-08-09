import React, { Component } from 'react';
import TextInputComp from '../Components/TextInputComp';
import Container from '../Components/Container/Container';
import FooterComp from '../Components/FooterComp';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import TitleText from '../Components/TitleText';

import SubTitle from '../Components/SubTitle';
import ContentHeading from '../Components/ContentHeading';
import Content from '../Components/Content';



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
        <TextInputComp name=" "></TextInputComp>
        <TextInputComp name="lakshmi"></TextInputComp>
        <TitleText name="Interests"></TitleText>
        <SubTitle name= "Choose your interest"></SubTitle>
        <ContentHeading name="Today Head Lines ghjjk fkkglll gjitkl jkllll kooll kkll rrr w g y  kkl"></ContentHeading>
        <Content name ="tyu rjkgo fmfkofg llpp ekkoop kkoogg gkko roopg kprodjyiok njj qwe kk ds kkl kkl kll wwe ujh ikr ppppp wklg gigkjfk ">
        </Content>
        <FooterComp name= "SIGNUP"></FooterComp>

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
    color:'deeppink'
  },
});