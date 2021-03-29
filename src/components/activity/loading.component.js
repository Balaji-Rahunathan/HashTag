import React, { Component } from 'react'
import { ActivityIndicator, StyleSheet, View, ImageBackground, Image, Platform } from 'react-native'
import { Width, } from '../../helpers/constants';
import { Theme } from '../../helpers/theme';

export default class LoadingPage extends Component {
    render() {
        return (
            <View style={css.container}>
                <View style={css.loadingWrap}>
                    {Platform.OS == "ios" ?
                        <Image source={require('../../assets/icons/activity.gif')}
                            style={css.logo} /> :
                        <ActivityIndicator size="large" color={Theme} >
                        </ActivityIndicator>}
                </View>
            </View>
        )
    }
}

const css = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'contain'
    },
    logo: {
        height: Width * 0.40,
        width: Width * 0.40,
        resizeMode: 'contain',
        overflow: 'hidden',
    },
    loadingWrap: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
})