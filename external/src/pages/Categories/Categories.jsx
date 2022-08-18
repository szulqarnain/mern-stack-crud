import React, { useEffect } from 'react';

// Import Components
import Footer from '../../components/partials/Footer/Footer';
import Header from '../../components/partials/Header/Header';

import CategoriesList from '../../components/Categories/CategoriesList/CategoriesList';
import CategoriesAdd from '../../components/Categories/CategoriesAdd/CategoriesAdd';
import CategoriesUpdate from '../../components/Categories/CategoriesUpdate/CategoriesUpdate';

// Style
import "./Categories.css"

// Context 
import { useCategoryContext } from "../../context/categories/context";

const Categories = (props) => {

    const {tab} = props;

      // Get functinos from Context
      const {getCategories } = useCategoryContext();

      useEffect(()=>{
        getCategories();
      },[0]);

    if(tab === "List"){
        return(
            <>  
                <Header/>
                <CategoriesList/>
                <Footer/>
            </>
        ) 
    }
    else if(tab === "Add"){
        return(
            <>  
                <Header/>
                <CategoriesAdd/>
                <Footer/>
            </>
        ) 
    }
    else if(tab === "Update"){
        return(
            <>  
                <Header/>
                <CategoriesUpdate/>
                <Footer/>
            </>
        ) 
    }

};

export default Categories;