import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform } from 'react-native';
import Button from '../../components/buttons/button.component';

export default class ErrorPage extends Component {
    render() {
        return (
            <View style={css.container}>
                <View style={css.imageView}>
                    <Image style={css.img}
                        resizeMode="cover"
                        source={(Platform.OS === 'ios') ? require('../../assets/icons/error.png') : require('../../assets/icons/error.png')} />
                </View>
                <View style={css.textView}>
                    <Text style={css.Text}>Something went wrong !</Text>
                </View>
                <View style={css.retryButton}>
                    <Button onPress={this.props.onPress} buttonText="Tap to retry" />
                </View>
            </View>
        )
    }
}

const css = StyleSheet.create({
    container: {
        flex: 0.8,
    },
    imageView: {
        flex: 0.8,
        justifyContent: "flex-end",
        alignItems: 'center',
        // backgroundColor: "yellow"
    },
    img: {
        width: 300,
        height: 200,
        resizeMode: 'contain'
    },
    textView: {
        flex: 0.2,
        justifyContent: "flex-start",
        alignItems: 'center',
        // backgroundColor: "red",
        marginTop: 30
    },
    buttonText: {
        fontSize: 30,
        fontFamily: "Roboto-Regular"
    },
    Text: {
        fontSize: 24,
        fontFamily: "Roboto-Regular"
    },
    retryButton: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        marginHorizontal: 30
    }
});
