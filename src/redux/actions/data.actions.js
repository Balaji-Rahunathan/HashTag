import {
    FETCHING_DATA_REQUEST,
    FETCHING_DATA_SUCCESS,
    FETCHING_DATA_FAILURE,
    RESET_DATA
} from './types';
import axios from 'axios';
import AsyncStorage from "@react-native-community/async-storage"
import store from '../store/store';
import { Success, Warning } from '../../helpers/constants';
import { Server, LoginUrl, GetDispatchUrl, DispatchDetailsUrl, GetQuestionStatusUrl, GetQuestionsUrl, UpdateAnswersUrl, UpdateOrdersUrl, SendMailUrl, UploadDocUrl } from "../../helpers/links"


export const instance = () => axios.create({
    baseURL: Server,
    timeout: 10000,
    headers: { "Authorization": "Bearer " + store.getState().data.token }
});

export const token = store.getState().data.token;

export const fetchingDataRequest = () => ({
    type: FETCHING_DATA_REQUEST
});

export const fetchingDataSuccess = json => ({
    type: FETCHING_DATA_SUCCESS,
    payload: json
});

export const fetchingDataFailure = error => ({
    type: FETCHING_DATA_FAILURE,
    payload: error
});

export const resetData = () => ({
    type: RESET_DATA
})

async function storeToken(token) {
    await AsyncStorage.setItem("token", token)
}

export const currentScreen = (screenName) => {
    return async dispatch => {
        dispatch(fetchingDataSuccess({ current: screenName }))
    }
}

export const currentMedia = (MediaData) => {
    return async dispatch => {
        dispatch(fetchingDataSuccess({ currentMedia: MediaData }))
    }
}

export const logout = () => {
    return async dispatch => {
        dispatch(resetData())
    }
}

export const LogIn = (body, navigation) => {
    console.log(body)
    return async dispatch => {
        dispatch(fetchingDataRequest());
        try {
            axios.post(Server + LoginUrl, body)
                .then(response => {
                    if (response.status == 200) {
                        dispatch(fetchingDataSuccess({ token: response.data.success.token }));
                        storeToken(response.data.success.token)
                        navigation.navigate('HomeScreen')
                        Success("Login Succeeded")
                    }
                })
                .catch(err => {
                    console.log(err)
                    if (err.response.status == 404) {
                        dispatch(fetchingDataFailure(err));
                        Warning("Uh-huh", "Server Unreachable");
                        console.log(err.response);
                    } else {
                        dispatch(fetchingDataFailure(err));
                        Warning("Uh-huh", err.response.data.error);
                        console.log(err.response.data.error);
                    }
                })
        } catch (error) {
            dispatch(fetchingDataFailure(error));
            Warning("Uh-huh", "Something went wrong");
            console.log(error)
        }
    };
};




