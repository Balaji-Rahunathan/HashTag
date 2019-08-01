import PropTypes from 'prop-types';
import React from 'react';
import {View,StatusBar,Keyboard,Platform,DeviceInfo,StyleSheet,ActivityIndicator} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {Height, Width} from '../Constants/Constants';




const Container = ({children,styles,center,loading}) => {
return (
    <View style={[css.Container,styles]}
          onPress={Keyboard.dismiss}>
          <StatusBar barStyle={"light-content"}
                     backgroundColor="grey"
                     translucent={true}>
                    </StatusBar>
                    {children}
              </View>
    );
};

    Container.propTypes = {
        children: PropTypes.any,
        styles: PropTypes.any,
        center: PropTypes.bool,
        activity: PropTypes.bool
    }

    const css = StyleSheet.create({
        // containerCenter:{
        //     flex:1,
        //     alignItems: 'center',
        //     justifyContent: 'center',
        //     backgroundColor: 'white',
        //     paddingTop:Platform.OS=="ios"?0:20,
        //     width:Width,
        //     height:Height,
        // },
        Container:{
            flex:1,
            justifyContent:"flex-start",
            backgroundColor: 'pink',
            marginTop:Platform.OS=="android"?0:DeviceInfo.isIPhoneX_deprecated?Header.HEIGHT+29:Header.HEIGHT+5,
        },
    });

    export default Container;