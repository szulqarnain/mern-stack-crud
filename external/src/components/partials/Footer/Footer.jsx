import React from 'react';

import './Footer.css';

const Footer = () => {
    return (
        <>
            {/* Blank spaces */}
            <br/><br/><br/>
            {/* Bottom fixed footer */}
            <div className="container-fluid footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <p>Ropstam MERN Stack developer task.</p>
                        </div>
                        <div className="col-sm-6 right__side">
                            <p>Developed by: Syed Zulqarnain</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;