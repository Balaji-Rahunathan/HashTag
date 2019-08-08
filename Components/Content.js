import React, { Component } from 'react';
import {Text,View,StyleSheet,TextInput } from 'react-native';

export default class Content extends Component {
    render() {
    return (
        <View>
        <Text style = {css.title}> { this.props.name }
            </Text>
            </View>
    )
    }
}
const css = StyleSheet.create({
    title:{
        fontSize:20,
        textAlign:'left',
        color:'white',
        paddingLeft:10
    }

})