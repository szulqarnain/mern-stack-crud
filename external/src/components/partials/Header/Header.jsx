import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Image/Image';

// Import style
import './Header.css'

//Context
import { useAuthContext } from "../../../context/auth/context";

const Header = () => {

  // Get User from Context
  const { setLogOut } = useAuthContext();

    return (
        <div className='container header'>
            <div className='row'>
                <div className="col-sm-4">
                    <Link to='/'>
                        <Image
                            className="header__logo"
                            src="ropstam-logo.png"
                            alt="Ropstam Logo"
                            title="Ropstam Logo"
                        />   
                    </Link>
                </div>
                <div className="col-sm-8">
                    <ul className='menu'>
                        <li><Link to="/categories">Categories</Link></li>
                        <li><Link to="/cars">Cars</Link></li>
                        <li><Link to="/login" onClick={()=>{setLogOut()}}>Logout</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;