import React from "react";
import Cart from "./Components/Cart/Cart";

import { Footer } from "./Components/footer/Footer";
import { Navbar } from "./Components/Navbar/Navbar";
import { NavbarBottom } from "./Components/Navbar/navbar_bottom_menu/NavbarBottom.jsx";
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
			{/* <SinglePage /> */}
			<Cart />
			<Footer />
		</div>
	);
}

export default App;
