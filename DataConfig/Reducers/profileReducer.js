
const initState = {
    
}

const profileReducer = (state = initState, action) =>{
    switch(action.type){
        case "USER":{
            let data = {...state, ...action.payload}
            return data
        }
        case "REMOVE":{
            let data ={}
            return data
        }
        default:{
            return state
        }
    }

}

export default profileReducer