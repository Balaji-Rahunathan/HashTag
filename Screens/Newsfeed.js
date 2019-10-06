import React, { Component } from 'react';
import { Text, View, AsyncStorage, ActivityIndicator, StyleSheet, ImageBackground,Image } from 'react-native';
import { connect } from 'react-redux';
import Container from '../Components/Container/Container';
import FooterComp from '../Components/FooterComp';
import LinearGradient from 'react-native-linear-gradient';
import TitleText from '../Components/TitleText'
import { Width, Height, background } from '../Components/Constants/Constants';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';


export default class Newsfeed extends Component {

    render() {
        return (
            <Container styles={css.container}>
                <Image  style={{position:"absolute",width:Width,height:Height*0.4,zIndex:-100,}} 
                        source={require('../assets/icons/content.png')}/>
                <Image  style={{position:"absolute",width:Width,height:Height*0.4,transform:[{rotateX:'180deg'}],opacity:0.9,top:Height*0.39}} 
                        source={require('../assets/icons/content.png')}/>
                <LinearGradient
                    start={{ x: 0.0, y: 0.0 }} end={{ x: 0.0, y: 1.0 }}
                    locations={[0, 0.35,0.7, 1]}
                    colors={['transparent','#1D1D2799','#1D1D27', '#1D1D27',]}
                    style={{flex:1}}>
                    <ScrollView scrollEnabled={false}>
                    <Text style={{marginTop:Height*0.3,color:"white",fontSize:30,fontWeight:"bold",marginHorizontal:20}} >காஃபி வித் ராஜேஷ்குமார்.. பொன் விழா நாயகனுடன் ஒரு ப்யூட்டிஃபுல் சந்திப்பு.. நீங்க ரெடியா?</Text>
                    <Text style={{marginTop:10,color:"white",fontSize:20,fontWeight:"300",marginHorizontal:20}}>காஃபி வித் ராஜேஷ்குமார்.. பொன் விழா நாயகனுடன் ஒரு ப்யூட்டிஃபுல் சந்திப்பு.. நீங்க ரெடியா?காஃபி வித் ராஜேஷ்குமார்.. பொன் விழா நாயகனுடன் ஒரு ப்யூட்டிஃபுல் சந்திப்பு.. நீங்க ரெடியா?காஃபி வித் ராஜேஷ்குமார்.. பொன் விழா நாயகனுடன் ஒரு ப்யூட்டிஃபுல் சந்திப்பு.. நீங்க ரெடியா?காஃபி வித் ராஜேஷ்குமார்.. பொன் விழா நாயகனுடன் ஒரு ப்யூட்டிஃபுல் சந்திப்பு.. நீங்க ரெடியா?காஃபி வித் ராஜேஷ்குமார்.. பொன் விழா நாயகனுடன் ஒரு ப்யூட்டிஃபுல் சந்திப்பு.. நீங்க ரெடியா?பொன் விழா நாயகனுடன் ஒரு ப்யூட்டிஃபுல் சந்திப்பு..</Text>
                    </ScrollView>

                </LinearGradient>


                <View style={css.footerView}>

                    <View style={{}}>
                        <Text style={{color:"white",fontSize:22,fontWeight:"bold"}} >123</Text>
                        <Text style={{color:"#5A5C69",fontSize:20}} >Discussions</Text>
                    </View>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Discussions')} style={{flexDirection:"row",alignItems:"flex-start"}}>
                        <Text style={{color:"white",fontSize:20,marginTop:6}} >Read More  </Text>
                        <Image style={{width:40,height:40}} source={require("../assets/icons/ReadMore.png")}/>
                    </TouchableOpacity>
                </View>
            </Container>
        )
    }
}

const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: background
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
        flex: 0.15,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginHorizontal:20,
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

