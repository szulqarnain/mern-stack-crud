import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import {useNavigate } from "react-router-dom";

// Context 
import { useCategoryContext } from "../../../context/categories/context";

const CategoriesAdd = () => {
    
    // Get functinos from Context
    const {addCategory } = useCategoryContext();

    const [isDisabled,setisDisabled] = useState(false);
    
    let navigate  = useNavigate();

    useEffect(()=>{

        // Form Element
        const form = document.querySelector("form");
        // Submit Button
        const submitBtn = document.querySelector(".submit__btn");
        // Input Elements
        let name = document.querySelector(".name");

        // Form submit function
        form.addEventListener('submit', async (e)=>{
            // If disable is false
            if(!isDisabled){
                setisDisabled(true);
                e.preventDefault(); 
                
                submitBtn.innerText = "Adding .."; //Button text change

                name = name.value; // Get name value

                try{
                    await addCategory(name); // Call endpoint function

                    navigate('/categories'); // Navigate to dashboard

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
                        <h4>Category Add</h4>
                    </div>
                </div>

                <div className="categories__list">
                    <form action="">
                        <div className="row">
                            <div className="col-3">

                                {/* Email input  */}
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className='form-control name' required/>
                                    <small className='email__error'></small>
                                </div>
                                <br/>
                                {/* Submit button */}
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

export default CategoriesAdd;