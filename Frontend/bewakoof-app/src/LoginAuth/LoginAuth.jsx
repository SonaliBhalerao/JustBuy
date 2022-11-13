import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { getLocalData } from '.././Utils/LocalStorage';

export const  LoginAuth =({ children })=> {

    const token = getLocalData("userToken")
    const location = useLocation()
if(!token) {
    return <Navigate to="/login" state={{from:location}} replace />
}
    return children
}

