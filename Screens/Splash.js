import React, {Component} from 'react';
import {Text, View,AsyncStorage,ActivityIndicator,StyleSheet,Image} from 'react-native';
import { connect } from 'react-redux';
import Container from '../Components/Container/Container';


class Splash extends Component {
  static navigationOptions = ({navigation}) =>({
    headerTransparent:true,
    headerRight:null
  })
  constructor(props){
    super(props)
    this.state={
      loading:true,
    }
  }
  componentDidMount(){
    this.setTimeout = setTimeout(()=>this.Splash(),500)
  }


    // setTimeout(()=>this.getToken(),500)

    // codePush.sync ({
    //   updateDialog: true,
    //   installMode: codePush.InstallMode.IMMEDIATE,
    //   checkFrequency: codePush.CheckFrequency.ON_APP_START, 
    // });
  async Splash(){
    let language = await AsyncStorage.getItem("Profile")
    if(language)
    {
    this.props.addDataToUser({"Profile":Profile})
    this.props.navigation.navigate("Profile")
    }
    else{
    this.props.navigation.navigate("Profile",)
    }

  }

  componentWillUnmount(){
    clearInterval(this.setTimeout)
  }


  // Store token when login succeeded
  // async getToken(){
  //   try{
  //     let token = await AsyncStorage.getItem("Token")
  //     if(token)
  //     {
  //       this.props.navigation.navigate("App")
  //     }
  //     else{
  //       this.props.navigation.navigate("Auth")
  //       this.props.addTokenToUser({"token":token})
  //     }
  //   }
  //   catch (error){
  //       console.log("token not set")
  //       this.props.navigation.navigate("Auth")
  //   }
  // }

  render() {
    return(
      <Container styles ={css.container}>
      <View>
      <Image style={css.image}
      source={require('../assets/icons/TN.jpg')}/>
      </View>
      </Container>
    )
}
}
const css = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  image:{
    height:300,
    width:300
  }


})

const mapStateToProps = state =>{
  return{
    user:state.user
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    addTokenToUser:(user)=>{dispatch({type:"TOKEN",payload:user})}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Splash) 