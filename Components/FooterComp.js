import React, { Component } from 'react';
import { Text,View,StyleSheet,Image,TouchableOpacity} from 'react-native';
import { Height } from './Constants/Constants';

export default class FooterComp extends Component {
    render() {
        return (
            <View style= {css.footerPart}>
            <View style = {css.footer}>
            <TouchableOpacity><Text style= {[css.textStyle,{textAlign:'left'}]}>
            {this.props.name}
            </Text>
            </TouchableOpacity>
            <View style={css.arrowContainer}>
            <Image style={css.image}
            resizeMode="cover"
            source={require('../assets/icons/rarrow.png')}/>
                        </View>
            </View>
            </View>

        )
    }
}

const css = StyleSheet.create ({
        footerPart:{
        flex:0.4,
        backgroundColor:'silver',
        // padding:10,
        // color:'white',
        },
        footer:{
            flex:0.7,
            backgroundColor:'deeppink',
            opacity:0.9,
            justifyContent:'center',
            alignItems:'center'
        },
        textStyle:{
            fontSize:20,
            color:'white',
            fontWeight:'bold',
            padding:10,
            textAlign:'center',
            // justifyContent:'center',
            // alignItems:'center',
        },
        arrowContainer:{
            flex:0.1,
            justifyContent:'flex-end',
            alignSelf:'flex-end',
        },
        image:{
             width:20,
             height:20,
             marginBottom:20,
             marginRight:20
        }
            


})
