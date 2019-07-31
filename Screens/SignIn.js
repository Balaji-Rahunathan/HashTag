import React, { Component } from 'react';
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
      <View >
        <Text style={styles.header}>
          {this.props.title.toUpperCase()}
        </Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});