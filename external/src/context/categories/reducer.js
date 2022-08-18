import {
    GET_CATEGORIES_BEGIN,
    GET_CATEGORIES,
    ADD_CATEGORIES,
    UPDATE_CATEGORIES,
    DELETE_CATEGORY
} from './actions';

const reducer = (state, action) => {

    if (action.type === GET_CATEGORIES_BEGIN) {
        return {
            ...state,
            isLoading: false,
        }
    }

    if (action.type === GET_CATEGORIES) {
        return {
            categories: action.payload,
            isLoading: true,
        }
    }

    if (action.type === ADD_CATEGORIES) {
        return {
            ...state,
            isLoading: true,
        }
    }

    if (action.type === UPDATE_CATEGORIES) {
        return {
            ...state,
            isLoading: true,
        }
    }

    if (action.type === DELETE_CATEGORY) {
        return {
            ...state,
            isLoading: true,
        }
    }


    throw new Error(`no such action : ${action.type}`);
}

export default reducer;