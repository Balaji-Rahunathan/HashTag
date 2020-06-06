import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ActivityIndicator, Image } from 'react-native';
import { Width } from '../../helpers/constants';
import Container from '../../components/container/container.component';
import { Light, Theme } from '../../helpers/theme';

export default class Splash extends Component {
    componentDidMount() {
        setTimeout(() => this.getLoginDetails(), 2000)
    }
    async getLoginDetails() {
        this.props.navigation.navigate('Login');
    }

    render() {
        return (
            <Container style={css.container}>
                <View style={css.logoWrap}>
                    <Image style={css.logo} source={require('../../assets/icons/hashtag.png')} />
                    <Text style={css.logoText}>HAS # TAG</Text>
                </View>
                <View style={css.indicatorWrap}>
                    <ActivityIndicator size="small" color={Light}>
                    </ActivityIndicator>
                </View>
            </Container>
        )
    }
}

const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme
    },
    logoWrap: {
        flex: 0.65,
        justifyContent: 'flex-end',
        alignItems: 'center',
        // backgroundColor:'pink'
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: "contain",
        tintColor: Light,
    },
    logoText: {
        fontSize: 20,
        color: Light,
        marginTop: 20,
        fontWeight: '400'
    },
    indicatorWrap: {
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center",
    },
});





