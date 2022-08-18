import React, { useReducer, useContext, createContext } from 'react';

// Import Cookies
import Cookies from 'js-cookie'

// Import Server host name
import { serverHost } from '../../config/serverConfig';

import reducer from './reducer';

import {
    LOG_IN,
    LOG_OUT,
    LOG_UP,
    HANDLE_ERRORS,
    HANDLE_CHANAGE
} from './actions'; 


const initialState = {
    userId: Cookies.get('userId'),
    isLoggedIn: Cookies.get('userId') ? true : false,
    isSignUp: false,
    errors: ""
}

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const setLogIn = async (email,password) => {

        // endpoint for signin
        const endpoint = serverHost("user/login");

        try{
            // Fetch Record function
            const res = await fetch(endpoint, {
                body: JSON.stringify({email,password}),
                credentials: 'include',
                headers:{'Content-Type':'application/json'},
                method:'POST',
            });

            const result = await res.json(); 

            if(result.success){

                dispatch({ type: LOG_IN,  payload: {  userId : result.data[0] } });

            }else{
                
                dispatch({ type: HANDLE_ERRORS,  payload: { ...result.message } });
                
            }

        }
        catch(e){

            dispatch({ type: HANDLE_ERRORS,  payload: { e } });

        }

    }

    const signUp = async (data) =>{

        // Make endpoint for signup
        const endpoint = serverHost("user/create");

        try{
            // Fetch Record function
            const res = await fetch(endpoint, {
                body: JSON.stringify(data),
                credentials: 'include',
                headers:{'Content-Type':'application/json'},
                method:'POST',
            });
            
            const result = await res.json(); //get result from endpoint
            
            if(result.success){
                dispatch({ type: LOG_UP });
            }else{
                dispatch({ type: HANDLE_ERRORS,  payload: { ...result.message } });
            }

        }
        catch(e){
            dispatch({ type: HANDLE_ERRORS,  payload: { e } });
        }

    }

    const setLogOut = async () => {

        Cookies.remove('userId');
        Cookies.remove('jwt');

        dispatch({ type: LOG_OUT });

    }   

    const clearError = async () =>{
        dispatch({ type: HANDLE_ERRORS,  payload: "" });
    }
    const handleChange = async (payload) =>{
        dispatch({ type: HANDLE_CHANAGE,  payload: {...payload} });
    }
    

    return <AuthContext.Provider value={{
        ...state,
        setLogIn,
        signUp,
        setLogOut,
        clearError,
        handleChange
    }}>
        {children}
    </AuthContext.Provider>
}

const useAuthContext = () => {
    return useContext(AuthContext);
}

export { AuthProvider, initialState, useAuthContext }