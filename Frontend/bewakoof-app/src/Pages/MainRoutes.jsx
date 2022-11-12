import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ReqAdminAuth } from '../AdminAuth/ReqAdminAuth'
import { Admin } from './admin_page/Admin'
import { AdminLogin } from './admin_page/AdminLogin'
import { AdminSignup } from './admin_page/AdminSignup'
import { HomePage } from './home_page/HomePage'
import { MensHomePage } from './mens_home_page/MensHomePage'
import { Signup } from './Signup/Signup'
import { SinglePage } from './Single_page/Singlepage'
import { WomensHomePage } from './womens_home_page/WomensHomePage'

export const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path={"/"} element={<HomePage/>} />
            <Route path={"/mens-home"} element={<MensHomePage/>} />
            <Route path={"/womens-home"} element={<WomensHomePage/>} />
            <Route path={"/mens-home/:name"} element={<SinglePage/>} />
            <Route path={"/womens-home/:name"} element= {<SinglePage/>}/>
            <Route path={"/signup"} element={<Signup/>} />



            <Route path={"/admin"} element={ <ReqAdminAuth> <Admin/> </ReqAdminAuth>} />
            <Route path={"/admin/signup"} element={<AdminSignup/>} />
            <Route path={"/admin/login"} element={<AdminLogin/>} />
        </Routes>
    </div>
  )
}

