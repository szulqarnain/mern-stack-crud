import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import {useNavigate } from "react-router-dom";

//Style import
import "./CarAdd.css"

// Context 
import { useCarsContext } from "../../../context/cars/context";
import { useCategoryContext } from "../../../context/categories/context";

const CarAdd = () => {
    
    // Get functinos from Context
    const {addCar} = useCarsContext();

    const {getCategories,categories} = useCategoryContext();

    useEffect(()=>{
        getCategories();
    },[categories])

    const [isDisabled,setisDisabled] = useState(false);
    
    let navigate  = useNavigate();

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
                
                submitBtn.innerText = "Adding .."; //Button text change

                const data = {
                    categoryId : category.value,
                    name : name.value,
                    model : model.value,
                    color : color.value,
                    registrationNo : registrationNo.value,
                }

                console.log(data);

                try{
                    await addCar(data); // Call endpoint function

                    navigate('/cars'); // Navigate to dashboard

                    setisDisabled(false); // Button default reset
                    submitBtn.innerText = "Add"; // Button text reset

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
                        <h4>Car Add</h4>
                    </div>
                </div>

                <div className="cars__add">
                    <form action="">
                        <div className="row">
                            <div className="col-3">

                                {/*  input  */}
                                <div className="form-group">
                                    <label>Category</label>
                                    <select className='form-control category' required>
                                        <option value="">-- Select --</option>

                                        {categories.map((category,key)=>{
                                            return(
                                                <option key={key} value={category._id}>{category.name}</option>
                                            ) 
                                        })}
                                        

                                    </select>
                                </div>
                                {/*  input  */}
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className='form-control name' required/>
                                </div>
                                {/*  input  */}
                                <div className="form-group">
                                    <label>Model</label>
                                    <input type="text" className='form-control model' required/>
                                </div>
                                {/*  input  */}
                                <div className="form-group">
                                    <label>Color</label>
                                    <input type="text" className='form-control color' required/>
                                </div>
                                {/*  input  */}
                                <div className="form-group">
                                    <label>Registration No</label>
                                    <input type="text" className='form-control registrationNo' required/>
                                </div>
                                {/* Submit button */}
                                <br/>
                                <div className="form-group btn__div">
                                    <button disabled={isDisabled} type="submit" className='form-control btn submit__btn'>Add</button>
                                </div>

                            </div>

                        </div>
                     </form>
                </div>

            </div>

        </div>
    );
};

export default CarAdd;