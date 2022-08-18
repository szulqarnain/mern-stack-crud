import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import {useNavigate,useParams} from "react-router-dom";

// Context 
import { useCarsContext } from "../../../context/cars/context";
import { useCategoryContext } from "../../../context/categories/context";

const CarUpdate = () => {

    const {id} = useParams();
    // for navigate
    let navigate  = useNavigate();
    // Get functinos from Context
    const {updateCar,cars} = useCarsContext();
    const {getCategories,categories} = useCategoryContext();
    // Set states
    const [carName, setcarName ] = useState('')
    const [carModel, setcarModel ] = useState('')
    const [carColor, setcarColor ] = useState('')
    const [carRegistrationNo, setcarRegistrationNo ] = useState('')
    const [carCategoryId, setcarCategoryId ] = useState('')

    const [isDisabled,setisDisabled] = useState(false);

    // Use Effect to get category name
    useEffect(()=>{
        
        // get car by id
        const car = cars.filter( (singleCar) => {
            if(singleCar._id === id)
                return true
            else
                return false
        });
        
        if(cars.length){
            setcarCategoryId(cars[0].categoryId);
            setcarName(cars[0].name);
            setcarModel(cars[0].model);
            setcarColor(cars[0].color);
            setcarRegistrationNo(cars[0].registrationNo);
        }
            
    },[cars])


    useEffect(()=>{

        // Form Element
        const form = document.querySelector("form");
        // Submit Button
        const submitBtn = document.querySelector(".submit__btn");
        // Input Elements
        let category = document.querySelector(".category");
        let name = document.querySelector(".name");
        let model = document.querySelector(".model");
        let color = document.querySelector(".color");
        let registrationNo = document.querySelector(".registrationNo");

        // Form submit function
        form.addEventListener('submit', async (e)=>{
            // If disable is false
            if(!isDisabled){
                setisDisabled(true);
                e.preventDefault(); 
                
                
                submitBtn.innerText = "Updating .."; //Button text change

                const data = {
                    categoryId : category.value,
                    name : name.value,
                    model : model.value,
                    color : color.value,
                    registrationNo : registrationNo.value,
                }

                try{
                    await updateCar(data,id); // Call endpoint function

                    navigate('/cars'); // Navigate to dashboard

                    setisDisabled(false); // Button default reset
                    submitBtn.innerText = "Update"; // Button text reset

                }
                catch(e){
                    console.log(e);
                }
        
            }
    
        });

    },[0])



    return (
        <div>
            <div className='container'>

                <div className="row page__tile__row">
                    <div className="col-sm-6 left__side">
                        <h4>Car Update</h4>
                    </div>
                </div>

                <div className="categories__list">
                    <form action="">
                        <div className="row">
                            <div className="col-3">


                                {/*  input  */}
                                <div className="form-group">
                                    <label>Category</label>
                                    <select className='form-control category' required>
                                        <option value="">-- Select --</option>

                                        {categories.map((category,key)=>{
                                            if(carCategoryId === category._id){
                                                return(
                                                    <option selected key={key} value={category._id}>{category.name}</option>
                                                ) 
                                            }else{
                                                return(
                                                    <option key={key} value={category._id}>{category.name}</option>
                                                ) 
                                            }

                                        })}
                                        

                                    </select>
                                </div>
                                {/*  input  */}
                                <div className="form-group">
                                    <label>Name</label>
                                    <input  defaultValue={carName} type="text" className='form-control name' required/>
                                </div>
                                {/*  input  */}
                                <div className="form-group">
                                    <label>Model</label>
                                    <input defaultValue={carModel} type="text" className='form-control model' required/>
                                </div>
                                {/*  input  */}
                                <div className="form-group">
                                    <label>Color</label>
                                    <input defaultValue={carColor} type="text" className='form-control color' required/>
                                </div>
                                {/*  input  */}
                                <div className="form-group">
                                    <label>Registration No</label>
                                    <input defaultValue={carRegistrationNo} type="text" className='form-control registrationNo' required/>
                                </div>
                                {/* Submit button */}
                                <br/>
                                {/* Submit button */}
                                <div className="form-group btn__div">
                                    <button disabled={isDisabled} type="submit" className='form-control btn submit__btn'>Update</button>
                                </div>

                            </div>

                        </div>
                     </form>
                </div>

            </div>

        </div>
    );
};

export default CarUpdate;