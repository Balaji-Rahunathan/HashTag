import React, { Component } from 'react';
import TextInputComp from '../Components/TextInputComp';
import Container from '../Components/Container/Container';
import FooterComp from '../Components/FooterComp';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Height } from '../Components/Constants/Constants';
// import console = require('console');
export default class SignIn extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null

  })
  static defaultProps = {
    title: 'Default Header'
  }

  sampleFunction(){
    
  }

  render() {
    return (
      <Container styles={css.container} >
        <View style={css.logoView}>
          <Image style={css.logo}
            source={require('../assets/icons/Logo.png')} />
        </View>
        <View style={css.buttonView}>
          <TextInputComp styles={css.textInput} name="Email"></TextInputComp>
          <TextInputComp name="Password"></TextInputComp>
        </View>
        <View style={css.footerView}>
          <FooterComp  name="SIGNIN" onPress={() => this.props.navigation.navigate("SignUp")}>
          </FooterComp>
        </View>
      </Container>
    );
  }

}

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1D27'
  },
  logoView: {
    flex: 0.3,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode:"contain"
  },
  buttonView: {
    flex: 0.6,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  textInput:{
    marginTop:Height*0.15
  },
  footerView: {
    flex: 0.1,
    justifyContent: 'flex-end',
  }

})

