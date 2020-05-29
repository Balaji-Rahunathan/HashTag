import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Width, height } from '../../helpers/constants';

export default  class Button extends Component {
    render() {
        return (
            <View style={css.container}>
                <View style={css.buttonView}>
        <Text style={css.button}>{this.props.name}</Text>
                </View>
            </View>
        )
    }
}

const css = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: Width * 0.14,
        width: Width * 0.85,
        borderRadius: 35,
    },
    button: {
        fontSize: 23,
        color: 'blue',
        fontWeight: 'bold',
    }
})