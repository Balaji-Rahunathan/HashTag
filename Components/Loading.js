import React, { Component } from 'react'
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    View,
} from 'react-native'
import { compose } from 'redux';
import { SceneView } from 'react-navigation';

export default class Loading extends Component {
    render() {
        return(
            <View style={css.container}>
            <ActivityIndicator size="large" color="#00ff00"/>
                </View>
        )
    }
}

const css = StyleSheet.create( {
    container:{
        flex:1,
        justifyContent:"center"
    }
})
