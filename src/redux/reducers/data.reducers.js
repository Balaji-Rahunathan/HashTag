import {
    FETCHING_DATA_REQUEST,
    FETCHING_DATA_SUCCESS,
    FETCHING_DATA_FAILURE,
    RESET_DATA
} from '../actions/types';

const initialState = {
    isFetching: false,
    isFailure:false,
    errorMessage: '',
    data: []
};

const dataReducer = (state = initialState, action) => {
    console.log(state)
    console.log(action)
    switch (action.type) {
        case FETCHING_DATA_REQUEST:
            return { ...state, isFetching: true, isFailure:false };
        case FETCHING_DATA_FAILURE:
            return { ...state, isFetching: false, isFailure:true , errorMessage: action.payload };
        case FETCHING_DATA_SUCCESS:
            return { ...state, isFetching: false, isFailure:false, data: {...state.data,...action.payload} };
        case RESET_DATA:
            return { ...state, isFetching: false, isFailure:false, data: {} };
        default:
            return state;
    }
};

export default dataReducer;