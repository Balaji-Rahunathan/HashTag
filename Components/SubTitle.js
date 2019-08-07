import React, { Component } from 'react';
import { Text,TextInput,View,StyleSheet } from 'react-native';

export default class SubTitle extends Component {
    render() {
        return (
            <View>
                <Text style ={css.title}> { this.props.name }  </Text>
            </View>
        )
    }
}
const css = StyleSheet.create({
    title:{
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'left',
        color:'white',
        paddingLeft:13
    }
})
