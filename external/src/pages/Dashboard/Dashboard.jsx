import React from 'react';
import { useEffect } from 'react';
import DashboardItems from '../../components/Dashboard/DashboardItems';
import Footer from '../../components/partials/Footer/Footer';
import Header from '../../components/partials/Header/Header';

// Context 
import { useCarsContext } from "../../context/cars/context";

const Dashboard = () => {

    // Get data from Context
    const {getCars} = useCarsContext();

    useEffect(()=>{
        getCars();
    },[0])

    

    return (
        <>
            {/* Include Header */}
            <Header/>

            {/* Content Body */}

            <div className='container'>
                <DashboardItems/>
            </div>

            {/* Include Header */}
            <Footer/>

        </>
    );
};

export default Dashboard;