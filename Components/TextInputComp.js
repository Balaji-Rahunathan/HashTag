import React, { Component } from 'react';
import { StyleSheet, View,TextInput } from 'react-native';

export default class TextInputComp extends Component {
    render() {
        return (
            <TextInput 
            style={[css.input,this.props.styles]} 
            placeholder={this.props.name} 
            placeholderTextColor="white"
            autoCapitalize = {"none"}
            autoCorrect = {false}
            spellCheck = {false}>
            </TextInput>

        );
    }
}

const css = StyleSheet.create({
    input:{
        height:50,
        width:250,
        borderRadius:10,
        backgroundColor: '#2E2E37',
        color: 'white',
        fontSize:17,
        textAlign:'center',
        margin:20
    }
});