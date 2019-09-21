import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Height, Width } from './Constants/Constants';
import LinearGradient from 'react-native-linear-gradient';


export default class FooterComp extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <TouchableOpacity activeOpacity={0.8} style={css.footerPart} onPress={this.props.onPress}>
                <LinearGradient
                    start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 1.0 }}
                    locations={[0, 1]}
                    colors={['#FF7D28', '#FF117D']}
                    style={[css.footer, this.props.styles]}
                    {...this.props}>
                    <View style={css.backContainer}>
                        {/* <Text style={css.left}>SIGNUP</Text> */}
                    </View>
                    {this.props.activity ?
                        <ActivityIndicator size="small" color="white" /> :
                        <Text style={css.textStyle}>
                            {this.props.name}
                        </Text>}
                    <View style={css.arrowContainer}>
                        <Image style={css.image}
                            resizeMode="cover"
                            source={require('../assets/icons/rightarrow.png')} />
                    </View>

                </LinearGradient>
                <LinearGradient
                    start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 1.0 }}
                    locations={[0, 1]}
                    colors={['#FF7D28', '#FF117D']}
                    style={[css.footerBottom, this.props.styles]}
                    {...this.props}>
                </LinearGradient>

            </TouchableOpacity>


        )
    }
}

const css = StyleSheet.create({
    footerPart: {
        flex: 1,
        backgroundColor: 'black',
    },
    footer: {
        flex: 0.8,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: "row",
        width: Width
    },
    footerBottom: {
        flex: 0.2,
        opacity: 0.8
    },
    textStyle: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        padding: 10,
        textAlign: 'center',
    },
    arrowContainer: {
        flex: 0.4,
        marginHorizontal: 20,
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    backContainer: {
        flex: 0.4,
        marginHorizontal: 20
    },
    image: {
        width: 20,
        height: 20,
    },
    left: {
        color: "white"
    }
})
