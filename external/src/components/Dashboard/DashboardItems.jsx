import React,{ useState }  from 'react';

// Import Style
import './DashboardItems.css'

// Context 
import { useCarsContext } from "../../context/cars/context";
import { useEffect } from 'react';

const DashboardItems = () => {
    
    // Get data from Context
    const {cars} = useCarsContext();

    return (
        <div className='dash__items'>
            {/* Single Item */}
            <div className="single__item">
                <h2>{cars.length}</h2>
                <hr />
                <p>Total Cars</p>
            </div>

        </div>
    );
};

export default DashboardItems;