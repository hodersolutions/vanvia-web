import { CREATE_USER_SUCCESS, 
         CREATE_USER_ERROR, 
         GET_USER_SUCCESS,
         GET_USER_ERROR,
         GET_USER_MENU_SUCCESS,
         GET_USER_MENU_ERROR,
         UPDATE_USER_SUCCESS, 
         DELETE_USER_SUCCESS, 
         USER_SHOW_LOADING,
         AUTHENTICATE_USER_SUCCESS, 
         AUTHENTICATE_USER_ERROR,
         SIGNOUT_USER } from '../types/userTypes';

const initState = {
    response: null,
    status: '',
    response_status: null,
    users: [],
    menu: null,
    current_user: null,
    error: null,
    loading: false,    
    access_token: null,
    username: null,
    is_authenticated: false
}

const userReducer = (state = initState, action) => {
    switch(action.type) {
        case USER_SHOW_LOADING:
            return {
                ...state,
                loading: true
            }            
        case SIGNOUT_USER:
            return {
                ...state,
                access_token: null,
                username: null,
                is_authenticated: false,
                status: SIGNOUT_USER,
                loading: false
            }       
        case AUTHENTICATE_USER_SUCCESS:
            return {
                ...state,
                access_token: action.response['access_token'],
                username: action.response['username'],
                current_user: action.response['user'],
                loading: false,
                is_authenticated: true,
                status: AUTHENTICATE_USER_SUCCESS,
                response_status: action.response['status']
            }
        case AUTHENTICATE_USER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error,
                status: AUTHENTICATE_USER_ERROR
            }
        case CREATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                status: CREATE_USER_SUCCESS,
                response: action.response,
                response_status: action.response['status']
            }            
        case CREATE_USER_ERROR:
            return {
                ...state,
                loading: false,
                status: CREATE_USER_ERROR,
                error: action.error
            }        
        case GET_USER_SUCCESS:
            return {                                
                ...state,
                response: action.response,
                loading: false,
                current_user: action.response.data,
                status: GET_USER_SUCCESS
            }
        case GET_USER_ERROR:
            return {
                ...state,                
                loading: false,
                entity: action.error,
                status: GET_USER_ERROR
            }
        case GET_USER_MENU_SUCCESS:
            return {                                
                ...state,
                loading: false,
                menu: action.response,
                status: GET_USER_MENU_SUCCESS
            }
        case GET_USER_MENU_ERROR:
            return {
                ...state,                
                loading: false,
                entity: action.error,
                status: GET_USER_MENU_ERROR
            }
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                status: UPDATE_USER_SUCCESS,
                entity: action.response                
            }            
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                entity: action.response
            }            
        default:
            return state;
    }
}

export default userReducer;