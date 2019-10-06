import React, { Component } from 'react';
import { Text, View, AsyncStorage, ActivityIndicator, StyleSheet, ImageBackground, Image, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import Container from '../Components/Container/Container';
import FooterComp from '../Components/FooterComp';
import LinearGradient from 'react-native-linear-gradient';
import TitleText from '../Components/TitleText'
import { Width, background, subTitle } from '../Components/Constants/Constants';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class Discussions extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTransparent: true,
        headerRight: null
    })

    render() {
        return (
            <Container styles={css.container}>
                <View style={css.titleView}>
                    <Text style={css.title}>Discussions</Text>
                    <Text style={css.subTitle}>Certe, inquam, pertinax non emolumento aliquo, sed ipsius honestatis decore.</Text>
                </View>
                <View style ={css.contentView}>

                </View>

                <View style={css.footerView}>
                    <FooterComp name="Comment"
                        onPress={() => this.props.navigation.navigate("Newsfeed")}>
                    </FooterComp>
                </View>
            </Container>
        )
    }
}

const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:background
    },
    title: {
        color: "white",
        fontSize: 30,
        fontWeight: "800",
        marginLeft: 10,
        marginBottom: 10
    },
    subTitle:{
        color:subTitle,
        fontSize:17,
        marginHorizontal:10

    },
    contentView:{
        flex:0.8
    },
    icon: {
        width: 20,
        height: 20,
        margin: 10,
        resizeMode: "contain"
    },
    footerView: {
        flex: 0.1,
        justifyContent: 'flex-end',
    },
    titleView: {
        flex:0.1,
        marginTop:50,
        width: Width,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginBottom: 30,
        marginLeft: 10
    },
}
)

