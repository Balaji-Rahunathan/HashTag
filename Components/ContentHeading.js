import React,{ Component } from 'react';
import { Text,TextInput,View,StyleSheet } from 'react-native';

export default class ContentHeading extends Component {
    render() {
        return (
            <View>
                <Text style={css.title}> { this.props.name } 
                </Text>
            </View>
        )
    }
}
const css = StyleSheet.create({
    title:{
        fontSize:25,
        fontWeight:'bold',
        color:'white',
        paddingLeft:12,
        textAlign :'left'
    }
})