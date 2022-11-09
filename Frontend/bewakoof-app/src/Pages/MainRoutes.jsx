import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MensHomePage } from './mens_home_page/MensHomePage'
import { WomensHomePage } from './womens_home_page/WomensHomePage'

export const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path={"/mens-home"} element={<MensHomePage/>} />
            <Route path={"/womens-home"} element={<WomensHomePage/>} />
        </Routes>
    </div>
  )
}

