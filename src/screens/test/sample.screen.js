import React, { Component } from 'react';
import { Text, View, TouchableOpacity,StyleSheet } from 'react-native';

export default class Sample extends Component {
    render() {
        return (
            <View style={css.container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Test")}>
                    <Text>Sample</Text>
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
