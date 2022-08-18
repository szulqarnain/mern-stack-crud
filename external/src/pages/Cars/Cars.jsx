import React, { useEffect } from 'react';

// Import Components
import Footer from '../../components/partials/Footer/Footer';
import Header from '../../components/partials/Header/Header';

import CarsList from '../../components/Cars/CarsList/CarsList';
import CarAdd from '../../components/Cars/CarAdd/CarAdd';
import CarUpdate from '../../components/Cars/CarUpdate/CarUpdate';

// Style
import "./Cars.css"

// Context 
import { useCarsContext } from "../../context/cars/context";
import { useCategoryContext } from "../../context/categories/context";

const Cars = (props) => {

    const {tab} = props;

      // Get functinos from Context
      const {getCars} = useCarsContext();
      const {getCategories} = useCategoryContext();

      useEffect(()=>{
        getCars();
        getCategories();
      },[0]);

    if(tab === "List"){
        return(
            <>  
                <Header/>
                <CarsList/>
                <Footer/>
            </>
        ) 
    }
    else if(tab === "Add"){
        return(
            <>  
                <Header/>
                <CarAdd/>
                <Footer/>
            </>
        ) 
    }
    else if(tab === "Update"){
        return(
            <>  
                <Header/>
                <CarUpdate/>
                <Footer/>
            </>
        ) 
    }

};

export default Cars;