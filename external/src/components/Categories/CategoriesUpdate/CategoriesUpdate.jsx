import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import {useNavigate,useParams} from "react-router-dom";

// Context 
import { useCategoryContext } from "../../../context/categories/context";

const CategoriesUpdate = () => {

    const {id} = useParams();
    // for navigate
    let navigate  = useNavigate();
    // Get functinos from Context
    const {updateCategory,categories } = useCategoryContext();
    // Set states
    const [catName, setcatName ] = useState('')
    const [isDisabled,setisDisabled] = useState(false);

    // Use Effect to get category name
    useEffect(()=>{
        // get category by id
        const category = categories.filter( (cat) => {
            if(cat._id === id)
                return true
            else
                return false
        });
        
        if(category.length)
            setcatName(category[0].name)

    },[categories])


    useEffect(()=>{

        // Form Element
        const form = document.querySelector("form");
        // Submit Button
        const submitBtn = document.querySelector(".submit__btn");
        // Input Elements
        let nameInput = document.querySelector(".name");

        // Form submit function
        form.addEventListener('submit', async (e)=>{
            // If disable is false
            if(!isDisabled){
                setisDisabled(true);
                e.preventDefault(); 
                
                submitBtn.innerText = "Updating .."; //Button text change

                nameInput = nameInput.value; // Get name value

                try{
                    await updateCategory(nameInput,id); // Call endpoint function

                    navigate('/categories'); // Navigate to dashboard

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
                        <h4>Category Update</h4>
                    </div>
                </div>

                <div className="categories__list">
                    <form action="">
                        <div className="row">
                            <div className="col-3">

                                {/* Email input  */}
                                <div className="form-group">
                                    <label>Name</label>
                                    <input defaultValue={catName} type="text" className='form-control name' required/>
                                    <small className='email__error'></small>
                                </div>
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

export default CategoriesUpdate;