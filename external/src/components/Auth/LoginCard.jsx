import React, { useEffect,useState }  from 'react';

// Components
import {Link,useNavigate } from "react-router-dom";

//Context
import { useAuthContext } from "../../context/auth/context";

const LoginCard = () => {

      // Get Auth from Context
     const { setLogIn, isLoggedIn, errors, clearError} = useAuthContext();

    let navigate  = useNavigate();

    const [isDisabled,setisDisabled] = useState(false);

    useEffect(()=>{

        // Form Element
        const form = document.querySelector("form");
        // Errors Elements
        const emailError = document.querySelector(".email__error");
        const passwordError = document.querySelector(".password__error");
        // Submit Button
        const submitBtn = document.querySelector(".submit__btn");
        // Input Elements
        let email = document.querySelector(".email");
        let password = document.querySelector(".password");

        // Form submit function
        form.addEventListener('submit', async (e)=>{
            // If disable is false
            if(!isDisabled){
                setisDisabled(true);
                e.preventDefault(); 
                
                submitBtn.innerText = "Signing in.."; //Button text change

                email = email.value; // Get email value
                password = password.value; // Get Password value
        
                emailError.innerText = '' //Set default Error is empaty 
                passwordError.innerText = '' //Set default Error is empaty 

                try{
                    await setLogIn(email,password); // Call endpoint function

                    setisDisabled(false); // Button default reset
                    submitBtn.innerText = "Sign in"; // Button text reset
                }
                catch(e){
                    console.log(e);
                }
        
            }
    
        });

        if(isLoggedIn){
            localStorage.clear(); //clear local storage
            navigate('/'); // Navigate to dashboard
        }else{
            if(errors){
                emailError.innerText = errors.email //display email error
                passwordError.innerText = errors.password //display password error
                clearError();
            }
        }

        // //clear local storage
        localStorage.clear();

    },[isLoggedIn, errors])



    return (
        <div>
            <form action="">
                <div className="row">

                    {localStorage['message'] ? ( 
                        <div className="alert alert-success alert-dismissible">
                            <strong>Success !</strong> {localStorage['message']}
                        </div>
                    ):(
                        <></>
                    )}

                    {/* Box Heading */}
                    <h2>Login</h2>
                    <hr /> 

                    {/* Email input  */}
                    <div className="form-group">
                        <label>Email</label>
                        <input defaultValue={localStorage['email'] ? localStorage['email']  : ''} type="text" className='form-control email' required/>
                        <small className='email__error'></small>
                    </div>

                    {/* Password input */}
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className='form-control password' required/>
                        <small className='password__error'></small>
                    </div>

                    {/* Submit button */}
                    <div className="form-group btn__div">
                        <button disabled={isDisabled} type="submit" className='form-control btn submit__btn'> Signin</button>
                    </div>

                </div>
            </form>

            <Link to="/signup">Create your new account.</Link>
            <hr />
            <small><strong>Note.</strong> If you don't get the email your auto genrated password is <strong>123456</strong></small>

        </div>
    );
};

export default LoginCard;