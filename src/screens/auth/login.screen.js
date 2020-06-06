import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ActivityIndicator, Image } from 'react-native';
import { Width } from '../../helpers/constants';
import Container from '../../components/container/container.component';
import { Light, Theme, Dark } from '../../helpers/theme';
import TextInputAuth from '../../components/input/textinput.component';
import Button from '../../components/buttons/button.component';

export default class Login extends Component {
    render() {
        return (
            <Container style={css.container}>
                <View style={css.logoView}>
                    <Image style={css.logo} source={require('../../assets/icons/hashtag.png')}/>
                    <Text style={css.logoText}>HAS # TAG</Text>
                </View>
                <View style={css.buttonWrap}>
                    <TextInputAuth placeholderText="Mobile Number"/>
                    <Button buttonText="GET OTP" />
                </View>
            </Container>
        )
    }
}

const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Dark
    },
    logoView: {
        flex: 0.5,
        // backgroundColor:'pink',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: "contain",
        tintColor: Theme,
    },
    logoText: {
        fontSize: 18,
        color: Theme,
        marginTop: 20,
        fontWeight: '400'
    },
    buttonWrap: {
        marginTop: 25,
        flex: 0.3,
        // backgroundColor:'yellow',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    }
})
