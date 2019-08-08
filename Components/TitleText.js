import React, { Component } from 'react';
import { Text,TextInput,View,StyleSheet } from 'react-native';

export default class TitleText extends Component {
    render() {
        return (
            <View>
                <Text style ={css.title}> { this.props.name }  
                </Text>
            </View>
        )
    }
}
const css = StyleSheet.create({
    title:{
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'left',
        color:'white',
        paddingLeft:10
    }
})



