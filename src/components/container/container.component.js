import PropTypes from 'prop-types';
import React from 'react';
import { View, StatusBar, Keyboard, StyleSheet, SafeAreaView } from 'react-native';
import LoadingPage from '../activity/loading.component';
import ErrorPage from '../activity/error.component';
import { Light } from '../../helpers/theme';

const Container = ({ children, style, loading, error, onPress }) => {
    if (error) {
        return (
            <View style={[css.Container, style]}
                onPress={Keyboard.dismiss}>
                <StatusBar barStyle={"light-content"}
                    backgroundColor="transparent"
                    translucent={true}>
                </StatusBar>
                <ErrorPage onPress={onPress} />
            </View>
        )
    }
    if (loading) {
        return (
            <View style={[css.Container, style]}
                onPress={Keyboard.dismiss}>
                <StatusBar barStyle={"light-content"}
                    backgroundColor="transparent"
                    translucent={true}>
                </StatusBar>
                <LoadingPage />
            </View>
        )
    }
    return (
        <View style={[css.Container, style]}
            onPress={Keyboard.dismiss}>
            <StatusBar barStyle={"light-content"}
                backgroundColor="transparent"
                translucent={true}>
            </StatusBar>
            {children}
        </View>
    )
};

Container.propTypes = {
    children: PropTypes.any,
    style: PropTypes.any,
}

const css = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Light
    },
});

export default Container;