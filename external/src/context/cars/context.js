import React, { useReducer, useContext, createContext } from 'react';

// Import Server host name
import { serverHost } from '../../config/serverConfig';

// Import reducer functions
import reducer from './reducer';

// Import actions variables
import {
    GET_CARS_BEGIN,
    GET_CARS,
    ADD_CARS,
    UPDATE_CARS,
    DELETE_CARS
} from './actions';

// Intial State
const initialState = {
    isLoading:null,
    cars:[],
}

const CarsContext = createContext();

const CarsProvider = ({ children }) => {

    // get dispath and state from reducer
    const [state, dispatch] = useReducer(reducer, initialState);
    
    /* Get All car Function*/
    const getCars = async () => {
        // endpoint 
        const endpoint = serverHost("car");
        // call begin function
        dispatch({ type: GET_CARS_BEGIN });

        try{
            // Fetch Record function
            const res = await fetch(endpoint, {
                credentials: 'include',
                headers:{'Content-Type':'application/json'},
                method:'GET',
            });

            const result = await res.json();  // Get json records

            if(result.success){
                dispatch({ type: GET_CARS,  payload: [...result.data[0]] });
            }else{
                console.log(result.message);
            }

        }
        catch(e){
            console.log(e);
        }

    }

    /* Delete car Function*/
    const deleteCar = async (id) => {
        // endpoint 
        const endpoint = serverHost(`car/${id}`);
        // call begin function
        dispatch({ type: GET_CARS_BEGIN });

        try{
            // Fetch Record function
            const res = await fetch(endpoint, {
                credentials: 'include',
                headers:{'Content-Type':'application/json'},
                method:'DELETE',
            });

            const result = await res.json(); //get data from json object

            if(result.success){
                dispatch({ type: DELETE_CARS});
            }else{
                console.log(result.message);
            }

        }
        catch(e){
            console.log(e);
        }
    }

    /* Add car Function*/
    const addCar = async (data) =>{

        // endpoint
        const endpoint = serverHost(`car/create`);

        // call begin function
        dispatch({ type: GET_CARS_BEGIN });

        try{
            // Fetch Record function
            const res = await fetch(endpoint, {
                body: JSON.stringify(data),
                credentials: 'include',
                headers:{'Content-Type':'application/json'},
                method:'POST',
            });

            const result = await res.json();  //get data from json object

            if(result.success){
                dispatch({ type: ADD_CARS});
            }else{
                console.log(result.message);
            }
        }
        catch(e){
            console.log(e);
        }
    }

    /* Update car Function*/
    const updateCar = async (data,id) =>{
        // Server endpoint
        const endpoint = serverHost(`car/${id}`);
        // Call begin function
        dispatch({ type: GET_CARS_BEGIN });

        try{
            // Fetch Record function
            const res = await fetch(endpoint, {
                body: JSON.stringify(data),
                credentials: 'include',
                headers:{'Content-Type':'application/json'},
                method:'PUT',
            });

            const result = await res.json();  // Get data from json object

            if(result.success){
                dispatch({ type: UPDATE_CARS});
            }else{
                console.log(result.message);
            }
        }
        catch(e){
            console.log(e);
        }
    }

    return <CarsContext.Provider value={{
        ...state,
        getCars,
        deleteCar,
        addCar,
        updateCar
    }}>
        {children}
    </CarsContext.Provider>
}

const useCarsContext = () => {
    return useContext(CarsContext);
}

export { CarsProvider, initialState, useCarsContext }