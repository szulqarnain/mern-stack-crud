import React, { useEffect } from 'react';

// Import Components
import { Link } from 'react-router-dom';
import CategoriesTable from './CategoriesTable/CategoriesTable';

// Style
import "./CategoriesList.css"

// Context 
import { useCategoryContext } from "../../../context/categories/context";

const CategoriesList = () => {

      // Get functinos from Context
      const {getCategories } = useCategoryContext();

      useEffect(()=>{
        getCategories();
      },[0]);

    return (
        <div>
            <div className='container'>

                <div className="row page__tile__row">
                    <div className="col-sm-6 left__side">
                        <h4>Categories List</h4>
                    </div>
                    <div className="col-sm-6 right__side">
                      <Link to="/categories/add"> Add New Category </Link>
                    </div>
                </div>

                <div className="categories__list">
                    <CategoriesTable/>
                </div>

            </div>

        </div>
    );
};

export default CategoriesList;