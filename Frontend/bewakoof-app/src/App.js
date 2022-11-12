import React from "react";

import { Footer } from "./Components/footer/Footer";
import MensProductPage from "./Components/Men/MensProductPage";
import { Navbar } from "./Components/Navbar/Navbar";
import { NavbarBottom } from "./Components/Navbar/navbar_bottom_menu/NavbarBottom.jsx";
import WomensProductPage from "./Components/Women/WomenProductPage";
import LoginPage from "./Pages/Login_page/Login_page";

import { MainRoutes } from "./Pages/MainRoutes.jsx";
import { SinglePage } from "./Pages/Single_page/Singlepage";
function App() {
	return (
		<div>
			<Navbar />
			<WomensProductPage/>
			{/* <NavbarBottom />
			<MainRoutes /> */}
			<Footer />
		</div>
	);
}

export default App;
