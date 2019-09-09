import React, {Component} from 'react';
import {Text, View,AsyncStorage,ActivityIndicator,StyleSheet,ImageBackground} from 'react-native';
import { connect } from 'react-redux';
import Container from '../Components/Container/Container';
import FooterComp from '../Components/FooterComp';

export default class Profile extends Component {
    static navigationOptions = ({navigation}) =>({
      headerTransparent:true,
      headerRight:null
    })
render(){
    return(
        <Container styles={css.container}>
         <View style={css.imageView}> 
         <ImageBackground style ={css.imageView}
         source={require('../assets/icons/person.jpg')}
        resizeMode={"cover"}/>
        <View style={css.textView}>
        <Text style={css.textOne}> Balaji</Text>
        <Text style={css.textOne}>Modify Interests</Text>
        <Text style={css.textOne}>Change Password</Text>
        <Text style={css.textOne}>Change Profile Picture</Text>

       
                 </View>
                 </View>

        <View style={css.footerView}>
         <FooterComp name="GO Back">
         </FooterComp>
         </View>



        </Container>
      

    )
}
}

const css = StyleSheet.create({
    container:{
       flex:1,
    //    backgroundColor:'black'
    },
    imageView:{
        backgroundColor:'pink',
        flex:0.80,
        width:'100%',
        height:520,
    },
    footerView:{
        // backgroundColor:'orange',
        flex:0.20,
        justifyContent:'flex-end',
    },
    textView:{
        flex:0.50,
        justifyContent:'space-between',
        margin:20,

        backgroundColor:'red',


    },
    textOne:{
        fontSize:18,
        color:'white',
        fontWeight:'bold',

    },

}
)

