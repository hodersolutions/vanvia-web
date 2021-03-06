import axios from 'axios';
import settings from '../../settings';
import JWT from '../../components/common/JWT';

import { CREATE_USER_SUCCESS,
         CREATE_USER_ERROR,
         GET_USER_ERROR,
         GET_USER_SUCCESS,
         GET_USER_MENU_SUCCESS,
         GET_USER_MENU_ERROR,
         UPDATE_USER_SUCCESS,
         AUTHENTICATE_USER_ERROR,
         AUTHENTICATE_USER_SUCCESS,
         USER_SHOW_LOADING,
         SIGNOUT_USER } from '../types/userTypes';

export const updateUser = (user) => {
    return (dispatch, getState) => {        
        dispatch({ type: UPDATE_USER_SUCCESS, user });
    }
}

export const createUser = (user) => {
    return (dispatch, getState) => {
        dispatch({ type: USER_SHOW_LOADING });           
        axios.post(settings.VANVIAAPI.url + 'api/v1/users', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'text/plain'                    
                },
                mode: 'cors',
                uid: user.uid,
                password: user.password
            }
        ).then( response => {                
                dispatch({ type: CREATE_USER_SUCCESS, response: response.data });
            }
        ).catch(error => {			
            dispatch({ type: CREATE_USER_ERROR, error });
        });            
    }
}

export const registerUser = (user) => {
    return (dispatch, getState) => {
        dispatch({ type: USER_SHOW_LOADING });
        axios.post(settings.VANVIAAPI.url + 'api/v1/register', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'text/plain'
                },
                mode: 'cors',
                uid: user.uid,
                password: user.password
            }
        ).then( response => {
                dispatch({ type: CREATE_USER_SUCCESS, response: response.data });
            }
        ).catch(error => {
            dispatch({ type: CREATE_USER_ERROR, error });
        });
    }
}

export const getUser = () => {
    return (dispatch, getState) => {
        dispatch({ type: USER_SHOW_LOADING });   
        const jwt = JWT.get_jwt();
        axios.get(settings.VANVIAAPI.url + 'api/v1/users/username?username=' + jwt['username'], {
            headers: {
                'Content-Type': 'application/json',
                access_token: jwt['access_token'],
                username: jwt['username']
            },
            mode: 'cors'
        }).then( response => {
            dispatch({ type: GET_USER_SUCCESS, response: response.data });
        }
        ).catch(error => {			
            dispatch({ type: GET_USER_ERROR, error });
        });
    }
}

export const getMenu = (data) => {
    return (dispatch, getState) => {
        dispatch({ type: USER_SHOW_LOADING });   
        // const jwt = JWT.get_jwt();
        axios.get(settings.VANVIAAPI.url + 'api/v1/config/menu', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + data.access_token,
                'uid': data.uid,
                'role_keyword': data.role_keyword
            },
            mode: 'cors'
        }).then( response => {
            dispatch({ type: GET_USER_MENU_SUCCESS, response: response.data["menu"] });
        }
        ).catch(error => {			
            dispatch({ type: GET_USER_MENU_ERROR, error });
        });
    }
}

export const authenticateUser = (user) => {
    return (dispatch, getState) => {
        dispatch({ type: USER_SHOW_LOADING });        
        axios.post(settings.VANVIAAPI.url + 'api/v1/login', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'text/plain'
                },
                mode: 'cors',
                uid: user.uid,
                password: user.password
            }
        ).then( response => {
            if(response.data['status'] === 'success') {
                // Ask user if he/she is okay to save local cookies then save the access_token to localStorage by 
                // JWT.set_jwt(response.data['access_token'], response.data['username'])
                dispatch({ type: AUTHENTICATE_USER_SUCCESS, response: response.data });
            }
            else {
                // Do this, JWT.remove_jwt(); if JWT.set_jwt() is done above
                dispatch({ type: AUTHENTICATE_USER_ERROR, error: response.data });
            }
        }
        ).catch(error => {
            // Do this, JWT.remove_jwt(); if JWT.set_jwt() is done above
            dispatch({ type: AUTHENTICATE_USER_ERROR, error });
        });        
    }
}

export const signOutUser = (auth) => {
    return (dispatch, getState) => {
        dispatch({ type: USER_SHOW_LOADING });
        dispatch({ type: SIGNOUT_USER, auth });                
    }
}

export const validateToken = (auth) => {
    return (dispatch, getState) => { 
        dispatch({ type: USER_SHOW_LOADING });       
        axios.post(settings.VANVIAAPI.url + 'api/v1/access_token/validate', {
            headers: {
                'Content-Type': 'application/json',
                access_token: auth['access_token'],
                username: auth['username']
            },
            mode: 'cors',
            username: auth['username']
        }).then( response => {
            if(response.data['status'] === 'success') {
                response.data['access_token'] = auth['access_token'];
                response.data['username'] = auth['username']; 
                dispatch({ type: AUTHENTICATE_USER_SUCCESS, response: response.data });
            }                                            
            else {
                JWT.remove_jwt();
                dispatch({ type: AUTHENTICATE_USER_ERROR, error: response.data });
            }
        }).catch(error => {
            JWT.remove_jwt();
            dispatch({ type: AUTHENTICATE_USER_ERROR, error });
        });
    }
}