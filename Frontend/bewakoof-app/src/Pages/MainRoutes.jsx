import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MensHomePage } from './mens_home_page/MensHomePage'
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
        </Routes>
    </div>
  )
}

