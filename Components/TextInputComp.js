import React, { Component } from 'react';
import { StyleSheet, View,TextInput } from 'react-native';

export default class TextInputComp extends Component {
    render() {
        return (
            <View>
            <TextInput 
            style={css.input} 
            placeholder={this.props.name} 
            placeholderTextColor="white"
            autoCapitalize = {"none"}
            autoCorrect = {false}
            spellCheck = {false}></TextInput>
</View>
        );
    }
}

const css = StyleSheet.create({
    input:{
        height:55,
        width:'70%',
        borderWidth:2,
        borderRadius:10,
        backgroundColor: 'dimgrey',
        color: 'white',
        fontSize:20,
        textAlign:'center'
    }
});