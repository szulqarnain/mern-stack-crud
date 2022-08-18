import React, { useReducer, useContext, createContext } from 'react';

// Import Server host name
import { serverHost } from '../../config/serverConfig';

// Import reducer functions
import reducer from './reducer';

// Import actions variables
import {
    GET_CATEGORIES_BEGIN,
    GET_CATEGORIES,
    ADD_CATEGORIES,
    UPDATE_CATEGORIES,
    DELETE_CATEGORY
} from './actions';

// Intial State
const initialState = {
    isLoading:null,
    categories:[],
}

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {

    // get dispath and state from reducer
    const [state, dispatch] = useReducer(reducer, initialState);
    
    /* Get All Category Function*/
    const getCategories = async () => {
        // endpoint 
        const endpoint = serverHost("category");
        // call begin function
        dispatch({ type: GET_CATEGORIES_BEGIN });

        try{
            // Fetch Record function
            const res = await fetch(endpoint, {
                credentials: 'include',
                headers:{'Content-Type':'application/json'},
                method:'GET',
            });

            const result = await res.json();  // Get json records

            if(result.success){
                dispatch({ type: GET_CATEGORIES,  payload: [...result.data[0]] });
            }else{
                console.log(result.message);
            }

        }
        catch(e){
            console.log(e);
        }

    }

    /* Delete Category Function*/
    const deleteCategory = async (id) => {
        // endpoint 
        const endpoint = serverHost(`category/${id}`);
        // call begin function
        dispatch({ type: GET_CATEGORIES_BEGIN });

        try{
            // Fetch Record function
            const res = await fetch(endpoint, {
                credentials: 'include',
                headers:{'Content-Type':'application/json'},
                method:'DELETE',
            });

            const result = await res.json(); //get data from json object

            if(result.success){
                dispatch({ type: DELETE_CATEGORY});
            }else{
                console.log(result.message);
            }

        }
        catch(e){
            console.log(e);
        }
    }

    /* Add Category Function*/
    const addCategory = async (name) =>{

        // endpoint
        const endpoint = serverHost(`category/create`);

        // call begin function
        dispatch({ type: GET_CATEGORIES_BEGIN });

        try{
            // Fetch Record function
            const res = await fetch(endpoint, {
                body: JSON.stringify({name:name}),
                credentials: 'include',
                headers:{'Content-Type':'application/json'},
                method:'POST',
            });

            const result = await res.json();  //get data from json object

            if(result.success){
                dispatch({ type: ADD_CATEGORIES});
            }else{
                console.log(result.message);
            }
        }
        catch(e){
            console.log(e);
        }
    }

    /* Update Category Function*/
    const updateCategory = async (name,id) =>{
        // Server endpoint
        const endpoint = serverHost(`category/${id}`);
        // Call begin function
        dispatch({ type: GET_CATEGORIES_BEGIN });

        try{
            // Fetch Record function
            const res = await fetch(endpoint, {
                body: JSON.stringify({name:name}),
                credentials: 'include',
                headers:{'Content-Type':'application/json'},
                method:'PUT',
            });

            const result = await res.json();  // Get data from json object

            if(result.success){
                dispatch({ type: UPDATE_CATEGORIES});
            }else{
                console.log(result.message);
            }
        }
        catch(e){
            console.log(e);
        }
    }

    return <CategoryContext.Provider value={{
        ...state,
        getCategories,
        deleteCategory,
        addCategory,
        updateCategory
    }}>
        {children}
    </CategoryContext.Provider>
}

const useCategoryContext = () => {
    return useContext(CategoryContext);
}

export { CategoryProvider, initialState, useCategoryContext }