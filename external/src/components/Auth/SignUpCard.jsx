import React, { useEffect }  from 'react';
import { useState } from 'react';
import {Link,useNavigate } from "react-router-dom";

//Context
import { useAuthContext } from "../../context/auth/context";

const SignUpCard = () => {

    let navigate  = useNavigate();

    const [isDisabled,setisDisabled] = useState(false);

    // Get Auth from Context
    const { signUp, errors , clearError,isSignUp,handleChange} = useAuthContext();

    
    useEffect(()=>{

        console.log(isSignUp);

        const form = document.querySelector("form"); // Get form element from dom
        
        const name = document.querySelector(".name"); //Get name 
        const email = document.querySelector(".email"); // Get email 
        
        const emailError = document.querySelector(".email__error"); // Get Email Error place

        const submitBtn = document.querySelector(".submit__btn");

        // Form submit function
        form.addEventListener('submit', async (e)=>{

            if(!isDisabled){

                setisDisabled(true);
                e.preventDefault(); 

                submitBtn.innerText = "Signing in..";
                emailError.innerText = '' //Set default Error is empaty 

                const data = {
                    name: name.value,
                    email : email.value
                }

                try{
                    await signUp(data); // Call endpoint function

                    setisDisabled(false); // Button default reset
                    submitBtn.innerText = "Signup"; // Button text reset
                }
                catch(e){
                    console.log(e);
                }

            }

        });

    },[0])


    useEffect(()=>{
        
        const handleSignup = async ()=>{
            await handleChange({'isSignUp':false});
        }

        const emailError = document.querySelector(".email__error"); // Get Email Error place
        const email = document.querySelector(".email"); // Get email 

        if(isSignUp){
            handleSignup();
            localStorage['message'] = "Check your email for password"; //set message to local storage
            localStorage['email'] = email.value;
            navigate('/'); // Navigate to dashboard
        }else{
            if(errors){
                emailError.innerText = errors.email //display email error
                clearError();
            }
        }

    },[isSignUp, errors])




    return (
        <div>
            <form action="">
                <div className="row">

                    {/* Box Heading */}
                    <h2>Sign up</h2>
                    <hr />
                    {/* Full name input box */}
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" className='form-control name' required/>
                    </div>
                    {/* Email input  */}
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className='form-control email' required/>
                        <small className='email__error'></small>
                    </div>

                    {/* Submit button */}
                    <div className="form-group btn__div">
                        <button disabled={isDisabled} type="submit" className='form-control btn submit__btn'> Signup</button>
                    </div>

                </div>
            </form>

            <Link to="/login">Login to your account.</Link>

        </div>
    );
};

export default SignUpCard;