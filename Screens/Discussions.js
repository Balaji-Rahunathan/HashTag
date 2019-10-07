import React, { Component } from 'react';
import { Text, View, AsyncStorage, ActivityIndicator, StyleSheet, ImageBackground, Image, StatusBar,KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import Container from '../Components/Container/Container';
import FooterComp from '../Components/FooterComp';
import LinearGradient from 'react-native-linear-gradient';
import TextInputComp from '../Components/TextInputComp'
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


                <View style={{flex:1,flexDirection:"row",marginHorizontal:10}}>
                    <View style={{flex:0.15,alignItems:"center"}}>
                        <View style={{width:40,height:40,borderRadius:20,backgroundColor:"white",justifyContent:"center",alignItems:"center"}}>
                            <Image style={{width:35,height:35,resizeMode:"contain"}}
                                    source={require("../assets/icons/ReadMore.png")}/>
                        </View>
                    </View>
                    <View style={{flex:0.9}}>
                        <View style={{borderRadius:20,backgroundColor:"#D8D8D807"}}>
                            <View style={{margin:10}}>
                                <Text style={{fontSize:15,fontWeight:"bold",color:"white"}}>Torsten Paulsson </Text>
                                <Text style={{fontSize:12,color:"#EBEBF560",paddingBottom:5}}>Manchester <Text style={{fontSize:10,color:"#EBEBF560"}}> 07.00pm saturday</Text></Text>
                                <Text style={{fontSize:12,color:"white"}}>Certe, inquam, pertinax non possim accommodare torquatos nostros? quos tu tam inportuno tamque crudeli; sin, ut aut in armatum hostem impetum fecisse aut voluptates repudiandae sint et harum quidem rerum necessitatibus saepe eveniet, ut summum bonum esse vult, summumque malum dolorem, idque facere nondum depravatum.</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{flex:1,flexDirection:"row",marginHorizontal:10}}>
                    <View style={{flex:0.9}}>
                        <View style={{borderRadius:20,backgroundColor:"#D8D8D807"}}>
                            <View style={{margin:10}}>
                                <Text style={{fontSize:15,fontWeight:"bold",color:"white"}}>Torsten Paulsson </Text>
                                <Text style={{fontSize:12,color:"#EBEBF560",paddingBottom:5}}>Manchester <Text style={{fontSize:10,color:"#EBEBF560"}}> 07.00pm saturday</Text></Text>
                                <Text style={{fontSize:12,color:"white"}}>Certe, inquam, pertinax non possim accommodare torquatos nostros? quos tu tam inportuno tamque crudeli; sin, ut aut in armatum hostem impetum fecisse aut voluptates repudiandae sint et harum quidem rerum necessitatibus saepe eveniet, ut summum bonum esse vult, summumque malum dolorem, idque facere nondum depravatum.</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flex:0.15,alignItems:"center"}}>
                        <View style={{width:40,height:40,borderRadius:20,backgroundColor:"white",justifyContent:"center",alignItems:"center"}}>
                            <Image style={{width:35,height:35,resizeMode:"contain"}}
                                    source={require("../assets/icons/ReadMore.png")}/>
                        </View>
                    </View>
                </View>


                <View style={{flex:1,flexDirection:"row",marginHorizontal:10}}>
                    <View style={{flex:0.15,alignItems:"center"}}>
                        <View style={{width:40,height:40,borderRadius:20,backgroundColor:"white",justifyContent:"center",alignItems:"center"}}>
                            <Image style={{width:35,height:35,resizeMode:"contain"}}
                                    source={require("../assets/icons/ReadMore.png")}/>
                        </View>
                    </View>
                    <View style={{flex:0.9}}>
                        <View style={{borderRadius:20,backgroundColor:"#D8D8D807"}}>
                            <View style={{margin:10}}>
                                <Text style={{fontSize:15,fontWeight:"bold",color:"white"}}>Torsten Paulsson </Text>
                                <Text style={{fontSize:12,color:"#EBEBF560",paddingBottom:5}}>Manchester <Text style={{fontSize:10,color:"#EBEBF560"}}> 07.00pm saturday</Text></Text>
                                <Text style={{fontSize:12,color:"white"}}>Certe, inquam, pertinax non possim accommodare torquatos nostros? quos tu tam inportuno tamque crudeli; sin, ut aut in armatum hostem impetum fecisse aut voluptates repudiandae sint et harum quidem rerum necessitatibus saepe eveniet, ut summum bonum esse vult, summumque malum dolorem, idque facere nondum depravatum.</Text>
                            </View>
                        </View>
                    </View>
                </View>
                </View>
                <KeyboardAvoidingView behavior="position" style={css.footerView} >
                    <View styles={{width:"100%",flex:0.85,backgroundColor:"white"}}>
                        <TextInputComp ></TextInputComp>
                    </View>
                    <View style={{flex:0.15,alignItems:"center"}}>
                        <View style={{width:40,height:40,borderRadius:20,backgroundColor:"white",justifyContent:"center",alignItems:"center"}}>
                            <Image style={{width:40,height:40,resizeMode:"contain"}}
                                    source={require("../assets/icons/ReadMore.png")}/>
                        </View>
                    </View>
                </KeyboardAvoidingView>
               
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
        alignItems:"center",
        flexDirection:"row",
        // backgroundColor:"white"
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

