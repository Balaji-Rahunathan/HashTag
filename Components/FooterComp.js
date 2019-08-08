import React, { Component } from 'react';
import { Text,View,StyleSheet,} from 'react-native';

export default class FooterComp extends Component {
    render() {
        return (
            <View style= {css.footerPart}>
            <View style = {css.footer}>
            <Text style= {css.textStyle}>
            {this.props.name}
            </Text>
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
            justifyContent:'center',
            alignItems:'center'
        },
        textStyle:{
            fontSize:20,
            color:'white',
            fontWeight:'bold',
            textAlign:'center'
        },
            


})
