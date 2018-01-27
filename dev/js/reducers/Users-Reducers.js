let initialState = {
    activeUser: [],
    usersLength: 0,
    users : [],
    login : false,
    loginUser : {},
    signupUser : []
}
export default function(state = initialState, action){
    switch(action.type){
        case  "USER_DATA_FROM_DB" :
            return {
                ...state,
                usersLength: action.payload.length,
                users: action.payload
            };
            break;
        case  "GET_USER_BY_ID" :
            return {
                ...state,
                activeUser  : action.payload
            };
            break;
        case  "USER_LOGIN" :
            return {
                ...state,
                login: true,
                loginUser: action.payload
            };
            break;
        case  "USER_LOGOUT" :
            return {
                initialState
            };
            break;
        case 'LOAD_LOGIN':
            return {
                ...state,
                login: true,
                loginUser: action.payload
            };
            break;
        case 'USER_SIGNUP':
            return {
                ...state,
                signupUser: action.payload
            };
            break;
        case 'USER_UPDATE':
            return {
                ...state,
                loginUser: action.payload
            };
            break;
    }

    return state;
}