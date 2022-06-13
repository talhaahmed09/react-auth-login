import React from 'react'
import { Navigate, Outlet} from 'react-router-dom';
import { useApp } from '../context/AppContext';

const ProtectedRoutes = () => {

    const isLoggedIn = localStorage.getItem('isLoggedIn');

    return (isLoggedIn ? <Outlet /> :  <Navigate to='/login'/>)
}

export default ProtectedRoutes;