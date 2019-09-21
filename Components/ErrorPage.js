import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import Container from '../Components/Container/Container';
import {Width} from '../Components/Constants/Constants';



export default class ErrorPage extends Component {

  render() {
    return(
        <Container >
            <Image style={css.img}
                    resizeMode="cover" 
                    source={require('../assets/icons/error.jpg')}/>
                    <View style={{width:Width,
                                  zIndex:100,
                                  padding:30,
                                  justifyContent:"center",
                                  alignItems:"center",
                                  }}> 
                        <Text style={css.buttonText}>Tap to Retry
                      </Text> 
                    </View> 
        </Container>
      )
  }

};

const css = StyleSheet.create({
  container: {
    flex: 1,
  },
  img:{
      width:"100%",
      height:"50%",
      marginTop:"30%"
  },
  buttonText:{
    fontSize:20,
  }

  

});
