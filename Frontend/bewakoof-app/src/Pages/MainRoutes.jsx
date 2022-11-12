import React from 'react'
import { Route, Routes } from 'react-router-dom'

import LoginPage from './Login_page/Login_page'

import MensProductPage from '../Components/Men/MensProductPage'

import WomensProductPage from '../Components/Women/WomenProductPage'

import { MensHomePage } from './mens_home_page/MensHomePage'
import { Signup } from './Signup/Signup'
import { MensSinglePage } from './Single_page/MenSinglepage'
import { WomensSinglePage } from './Single_page/WomensSinglepage'
import { WomensHomePage } from './womens_home_page/WomensHomePage'

export const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path={"/mens-home"} element={<MensHomePage/>} />
            <Route path={"/womens-home"} element={<WomensHomePage/>} />


            <Route path={"/mens-home/:name"} element={<MensSinglePage/>} />
            <Route path={"/womens-home/:name"} element= {<WomensSinglePage/>}/>
            <Route path={"/men"} element={<MensProductPage/>} />
            <Route path={"/women"} element={<WomensProductPage/>} />
            <Route path={"/women/:name"} element= {<WomensSinglePage/>}/>
            <Route path={"/men/:name"} element= {<MensSinglePage/>}/>
            <Route path={"/signup"} element={<Signup/>} />
            <Route path={"/login"} element={<LoginPage />} />
        </Routes>
    </div>
  )
}

