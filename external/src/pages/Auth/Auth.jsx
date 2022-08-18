import React from 'react';
import { Link } from 'react-router-dom';
import LoginCard from '../../components/Auth/LoginCard';
import SignUpCard from '../../components/Auth/SignUpCard';
import Image from '../../components/partials/Image/Image';
// Style
import "./Auth.css"

const Auth = (props) => {
    
    // get props data
    const {tab} = props;
    
    return (
        <div className='container auth__section'>

            <Link to='/'>
                <Image
                    src="ropstam-logo.png"
                    alt="Ropstam Logo"
                    title="Ropstam Logo"
                />
            </Link>  

            <div className='auth__box'>
                <div className='card auth__card'>

                    {(tab === "Login") ? (
                        <LoginCard/>
                    ) : (
                        <SignUpCard/>
                    )}
                    
                </div>
            </div>
        </div>
    );
};

export default Auth;