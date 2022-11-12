import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './Login_page/Login_page'
import { MensHomePage } from './mens_home_page/MensHomePage'
import { Signup } from './Signup/Signup'
import { SinglePage } from './Single_page/Singlepage'
import { WomensHomePage } from './womens_home_page/WomensHomePage'

export const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path={"/mens-home"} element={<MensHomePage/>} />
            <Route path={"/womens-home"} element={<WomensHomePage/>} />
            <Route path={"/mens-home/:name"} element={<SinglePage/>} />
            <Route path={"/womens-home/:name"} element= {<SinglePage/>}/>
            <Route path={"/signup"} element={<Signup/>} />
            <Route path={"/login"} element={<LoginPage />} />
        </Routes>
    </div>
  )
}

