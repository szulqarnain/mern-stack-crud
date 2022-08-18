import React from 'react';

// Components
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

// Import Style
import "./CarsTable.css"

// Context 
import { useCarsContext } from "../../../../context/cars/context";
import { useCategoryContext } from "../../../../context/categories/context";
import { useEffect } from 'react';



const CarsTable = () => {

    // Get data from Context
    const { cars,deleteCar,getCars} = useCarsContext();
    const { categories } = useCategoryContext();

    
    const getcategoryName = (categoryId) =>{
        
        const category = categories.filter( (cat) => {
            if(cat._id === categoryId)
                return true
            else
                return false
        });

        if(category.length)
            return category[0].name
        else
            return '-'

    }

    useEffect(()=>{
        getcategoryName();
    },[categories])
    // Delete function 
    const deleteEvent = async (id)=>{
        await deleteCar(id)
        await getCars()
    }

    return (
        <div className='categories__table'>
            <table className='table table-border'>
                <thead>
                    <tr>
                        <th>Sr.</th>
                        <th>Category</th>
                        <th>Name</th>
                        <th>Model</th>
                        <th>Color</th>
                        <th>Registration No</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {cars.length ?(
                        <>
                            {cars.map((car,key)=>{
                                
                                return(
                                    <tr key={uuidv4()}>
                                        <td>{key+1}</td>
                                        <td>{getcategoryName(car.categoryId)}</td>
                                        <td>{car.name}</td>
                                        <td>{car.model}</td>
                                        <td>{car.color}</td>
                                        <td>{car.registrationNo}</td>
                                        <td className='action__td'>
                                            <span>
                                                <button onClick={()=>{deleteEvent(car._id)}}>Delete</button>
                                            </span>
                                            <span>
                                                <Link to={`/cars/update/${car._id}`}>Edit</Link>
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

export default CarsTable;