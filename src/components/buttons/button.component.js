import PropTypes from 'prop-types';
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { Theme, Light } from '../../helpers/theme';

const Button = (props) => {
    const { styles, onPress, buttonText, activity, disabled } = props
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={activity}
            style={css.container}>
            <View style={[css.icon, styles]}
                {...props}>
                {!activity ? <Text style={[css.text, styles]}>{buttonText}</Text> :
                    <ActivityIndicator size="small" color={Light} />}
            </View>
        </TouchableOpacity>
    );
};

Button.propTypes = {
    styles: PropTypes.any,
    onPress: PropTypes.func,
    buttonText: PropTypes.any,
    activity: PropTypes.bool,
    activity: PropTypes.bool,
};

const css = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: 'center',
        width: "100%",
        height: 60,
    },
    icon: {
        justifyContent: 'center',
        alignItems: "center",
        width: "70%",
        height: 50,
        borderRadius: 10,
        backgroundColor: Theme
    },
    text: {
        fontSize: 14,
        color: Light,
        fontWeight: 'bold',
        fontFamily: 'Roboto-Medium'
    }
});

export default Button;