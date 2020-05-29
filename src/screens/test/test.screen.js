import React, { Component } from 'react';
import { Text, View, TouchableOpacity,StyleSheet } from 'react-native';

export default class Test extends Component {
    render() {
        return (
            <View style={css.container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Sample")}>
                    <Text>Test</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const css = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

