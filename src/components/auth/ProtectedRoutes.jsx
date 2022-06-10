import React from 'react'
import { Navigate, Outlet} from 'react-router-dom';
import { useApp } from '../context/AppContext';

const ProtectedRoutes = () => {

    const {state: {isLoggedIn}} = useApp();
    console.log(useApp())

    return (isLoggedIn ? <Outlet /> :  <Navigate to='/login'/>)
}

export default ProtectedRoutes