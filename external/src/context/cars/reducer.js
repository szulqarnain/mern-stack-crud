// Import actions variables
import {
    GET_CARS_BEGIN,
    GET_CARS,
    ADD_CARS,
    UPDATE_CARS,
    DELETE_CARS
} from './actions';

const reducer = (state, action) => {

    if (action.type === GET_CARS_BEGIN) {
        return {
            ...state,
            isLoading: false,
        }
    }

    if (action.type === GET_CARS) {
        return {
            cars: action.payload,
            isLoading: true,
        }
    }

    if (action.type === ADD_CARS) {
        return {
            ...state,
            isLoading: true,
        }
    }

    if (action.type === UPDATE_CARS) {
        return {
            ...state,
            isLoading: true,
        }
    }

    if (action.type === DELETE_CARS) {
        return {
            ...state,
            isLoading: true,
        }
    }


    throw new Error(`no such action : ${action.type}`);
}

export default reducer;