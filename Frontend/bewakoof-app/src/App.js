import React from "react";
import { Footer } from "./components/footer/Footer.jsx";
import {Navbar} from "./components/Navbar/Navbar.jsx"
import { NavbarBottom } from "./components/Navbar/navbar_bottom_menu/NavbarBottom.jsx";
import { MainRoutes } from "./Pages/MainRoutes.jsx";
function App() {
  return (
    <div >
      <Navbar/>
      <NavbarBottom/>
      <MainRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
