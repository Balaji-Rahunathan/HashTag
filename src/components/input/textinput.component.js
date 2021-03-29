import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native';
import { Transparent, Light, Dark, MediumDark } from '../../helpers/theme'

class TextInputAuth extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: true
    }
  }

  render() {
    return (
      <View style={css.container}>
        <TextInput
          style={css.textInput}
          placeholderTextColor="white"
          placeholder={this.props.placeholderText}
          autoCapitalize={"none"}
          autoCorrect={false}
          spellCheck={false}
          secureTextEntry={this.props.secure ? this.state.visible : false}
          {...this.props}>
        </TextInput>
      </View>
    );
  };
}

TextInputAuth.propTypes = {
  secure: PropTypes.bool
};

const css = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: "center",
    width: "100%",
    height: 60,
  },
  textInput: {
    height: 50,
    width: '70%',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: "300",
    fontFamily: 'Roboto-Regular',
    backgroundColor: MediumDark,
    borderRadius: 10,
    color: Light
  },
});

export default TextInputAuth