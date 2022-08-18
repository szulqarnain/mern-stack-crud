import {
    LOG_IN,
    LOG_OUT,
    LOG_UP,
    HANDLE_ERRORS,
    HANDLE_CHANAGE
} from './actions';

const reducer = (state, action) => {

    if (action.type === LOG_IN) {
        return {
            ...state,
            userId: action.payload.user_id,
            isLoggedIn: true,
            errors : null,
            isSignUp: false,
        }
    }

    
    if (action.type === LOG_UP) {
        return {
            ...state,
            isSignUp: true,
            errors : null
        }
    }


    if (action.type === LOG_OUT) {
        return {
            ...state,
            userId: null,
            isSignUp: false,
            isLoggedIn: false,
            errors : null
        }
    }

    if (action.type === HANDLE_ERRORS) {
        return {
            ...state,
            errors : action.payload
        }
    }

    if (action.type === HANDLE_CHANAGE) {
        return {
            ...state,
            ...action.payload
        }
    }

    throw new Error(`no such action : ${action.type}`);
}

export default reducer;