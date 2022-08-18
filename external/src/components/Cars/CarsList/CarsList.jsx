import React, { useEffect } from 'react';

// Import Components
import { Link } from 'react-router-dom';
import CarsTable from './CarsTable/CarsTable';

// Style
import "./CarsList.css"

// Context 
import { useCarsContext } from "../../../context/cars/context";

const CarsList = () => {

      // Get functinos from Context
      const {getCars } = useCarsContext();

      useEffect(()=>{
        getCars();
      },[0]);

    return (
        <div>
            <div className='container'>

                <div className="row page__tile__row">
                    <div className="col-sm-6 left__side">
                        <h4>Cars List</h4>
                    </div>
                    <div className="col-sm-6 right__side">
                      <Link to="/cars/add"> Add New Car </Link>
                    </div>
                </div>

                <div className="categories__list">
                    <CarsTable/>
                </div>

            </div>

        </div>
    );
};

export default CarsList;