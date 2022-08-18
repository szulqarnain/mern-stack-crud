import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

//Context
import { useAuthContext } from "../context/auth/context";

export const ProtectedRoute = () => {
    
    // Get User from Context
    const { isLoggedIn } = useAuthContext();

    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export const LoginRoute = () => {

    // Get User from Context
    const { isLoggedIn } = useAuthContext();

    return !isLoggedIn ? <Outlet /> : <Navigate to="/" />;
}