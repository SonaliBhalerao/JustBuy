import React from 'react'
import { Navigate } from 'react-router-dom';
import * as local from "../Utils/LocalStorage"

export const ReqAdminAuth = ({children}) => {
    
    const adminToken = local.getLocalData("admintoken")

    if (adminToken) return children;

    return <Navigate to={'/admin/login'} />

}
