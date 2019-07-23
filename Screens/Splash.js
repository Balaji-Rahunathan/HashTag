import React, {Component} from 'react';
import {Text, View,AsyncStorage,ActivityIndicator} from 'react-native';
import { connect } from 'react-redux';


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
    setTimeout(()=>this.getToken(),500)
    // codePush.sync ({
    //   updateDialog: true,
    //   installMode: codePush.InstallMode.IMMEDIATE,
    //   checkFrequency: codePush.CheckFrequency.ON_APP_START, 
    // });
  }

  // Store token when login succeeded
  async getToken(){
    try{
      let token = await AsyncStorage.getItem("Token")
      if(token)
      {
        this.props.navigation.navigate("App")
      }
      else{
        this.props.navigation.navigate("Auth")
        this.props.addTokenToUser({"token":token})
      }
    }
    catch (error){
        console.log("token not set")
        this.props.navigation.navigate("Auth")
    }
  }

  render() {
    return(
    <View >
    <View >
        <ActivityIndicator  size="small"></ActivityIndicator>
    </View>
    </View>
    )
}
}

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