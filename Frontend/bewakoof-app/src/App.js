import React from "react";

import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { NavbarBottom } from "./components/Navbar/navbar_bottom_menu/NavbarBottom.jsx";
import LoginPage from "./Pages/Login_page/Login_page";

import { MainRoutes } from "./Pages/MainRoutes.jsx";
import { SinglePage } from "./Pages/Single_page/Singlepage";
function App() {
	return (
		<div>
			<Navbar />
			{/* <NavbarBottom />
			<MainRoutes /> */}
      {/* <LoginPage/> */}
      <SinglePage/>
			<Footer />
		</div>
	);
}

export default App;
