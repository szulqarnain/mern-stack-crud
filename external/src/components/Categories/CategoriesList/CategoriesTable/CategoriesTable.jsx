import React from 'react';

// Components
import { v4 as uuidv4 } from 'uuid';

// Import Style
import "./CategoriesTable.css"

// Context 
import { useCategoryContext } from "../../../../context/categories/context";
import { Link } from 'react-router-dom';


const CategoriesTable = () => {

    // Get data from Context
    const { categories,deleteCategory,getCategories} = useCategoryContext();

    // Delete function 
    const deleteEvent = async (id)=>{
        await deleteCategory(id)
        await getCategories()
    }

    console.log(categories);

    return (
        <div className='categories__table'>
            <table className='table table-border'>
                <thead>
                    <tr>
                        <th>Sr.</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {categories.length ?(
                        <>
                            {categories.map((category,key)=>{
                                return(
                                    <tr key={uuidv4()}>
                                        <td>{key+1}</td>
                                        <td>{category.name}</td>
                                        <td className='action__td'>
                                            <span>
                                                <button onClick={()=>{deleteEvent(category._id)}}>Delete</button>
                                            </span>
                                            <span>
                                                <Link to={`/categories/update/${category._id}`}>Edit</Link>
                                            </span>
                                        </td>
                                    </tr>
                                ) 
                            })}
                        </>
                   ):(
                        <>
                            <tr>
                                <td colSpan="3">No Record</td>
                            </tr>
                        </>
                   )}
                    
                </tbody>
            </table>
        </div>
    );
};

export default CategoriesTable;