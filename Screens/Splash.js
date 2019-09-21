import React, { Component } from 'react';
import { Text, View, AsyncStorage, ActivityIndicator, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import Container from '../Components/Container/Container';
import LinearGradient from 'react-native-linear-gradient';


class Splash extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTransparent: true,
    headerRight: null
  })
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }
  componentDidMount() {
    this.setTimeout = setTimeout(() => this.Splash(), 500)
  }

  async Splash() {
    let language = await AsyncStorage.getItem("Profile")
    if (language) {
      this.props.addDataToUser({ "Profile": Profile })
      this.props.navigation.navigate("SignIn")
    }
    else {
      this.props.navigation.navigate("Auth")
    }

  }

  componentWillUnmount() {
    clearInterval(this.setTimeout)
  }

  render() {
    return (
      <LinearGradient
        start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 1.0 }}
        locations={[0, 1]}
        colors={['#FF7D28', '#FF117D']}
        style={[css.container, this.props.styles]}
      >
        <Image style={css.image}
          source={require('../assets/icons/Splash.png')} />
        <ActivityIndicator size="small" color="white" />
      </LinearGradient>
    )
  }
}
const css = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: "70%",
    resizeMode: "contain"
  }


})

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTokenToUser: (user) => { dispatch({ type: "TOKEN", payload: user }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash) 