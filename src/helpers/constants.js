import { Dimensions, AsyncStorage, Text, Platform } from 'react-native';
import { showMessage } from 'react-native-flash-message';


export const Width = Dimensions.get("window").width
export const Height = Dimensions.get("window").height

export const Success = (message, description) => [
    showMessage({
      message: message,
      description: description,
      type: "success",
      icon: "auto",
      autoHide: true,
      position: "top"
    })
  ]
  
  export const Failure = (message, description) => [
    showMessage({
      message: message,
      description: description,
      type: "error",
      icon: "auto",
      autoHide: true,
      position: "top"
    })
  ]
  
  export const Warning = (message, description) => [
    showMessage({
      message: message,
      description: description,
      type: "warning",
      icon: "auto",
      autoHide: true,
      position: "top"
    })
  ]
  