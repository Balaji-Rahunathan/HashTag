import React, { Component } from 'react';
import { Text, View, AsyncStorage, ActivityIndicator, StyleSheet, ImageBackground,Image } from 'react-native';
import { connect } from 'react-redux';
import Container from '../Components/Container/Container';
import FooterComp from '../Components/FooterComp';
import LinearGradient from 'react-native-linear-gradient';
import TitleText from '../Components/TitleText'
import { Width } from '../Components/Constants/Constants';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class Profile extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTransparent: true,
        headerRight: null
    })
    render() {
        return (
            <Container styles={css.container}>
                <ImageBackground style={css.imageView}
                                source={require('../assets/icons/person.jpg')}
                                resizeMode={"cover"} >
                    <LinearGradient
                        start={{ x: 0.0, y: 0.0 }} end={{ x: 0.0, y: 1.0 }}
                        locations={[0,0.2, 0.4, 1]}
                        colors={['transparent','transparent', 'transparent', '#000']}
                        style={[css.container, this.props.styles]}>
                        <View style={css.textView}>
                            <Text style={css.username}>Balaji {"\n"}Rahunathan</Text>
                            <TouchableOpacity style={css.profileButtons}>
                                <Image style={css.icon} source={require("../assets/icons/check-circle.png")}/>
                                <Text style={css.textOne}>Modify Interests</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={css.profileButtons}>
                                <Image style={css.icon} source={require("../assets/icons/lock.png")}/>
                                <Text style={css.textOne}>Change Password</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={css.profileButtons}>
                                <Image style={css.icon} source={require("../assets/icons/user.png")}/>
                                <Text style={css.textOne}>Change Profile Picture</Text>
                            </TouchableOpacity>
                        </View>
                    </LinearGradient>
                </ImageBackground>
                <View style={css.footerView}>
                    <FooterComp name="GO BACK" 
                                onPress={() => this.props.navigation.navigate("SignIn")}>
                    </FooterComp>
                </View>
            </Container>
        )
    }
}

const css = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageView: {
        flex: 0.9,
        width: '100%',
        resizeMode: "stretch"
    },
    username: {
        color: "white",
        fontSize: 30,
        fontWeight: "800",
        marginLeft:10,
        marginBottom:20
    },
    icon:{
        width:20,
        height:20,
        margin:10,
        resizeMode:"contain"
    },
    profileButtons:{
        justifyContent:"center",
        alignItems:"center",
        marginVertical:4,
        flexDirection:"row"
    },
    footerView: {
        flex: 0.1,
        justifyContent: 'flex-end',
    },
    textView: {
        flex: 1,
        width: Width,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        marginBottom:30,
        marginLeft:10
    },
    textOne: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },

}
)

