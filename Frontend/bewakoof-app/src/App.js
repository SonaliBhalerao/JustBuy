import React from "react";
import Cart from "./Components/Cart/Cart";

import { Footer } from "./Components/footer/Footer";
import { Navbar } from "./Components/Navbar/Navbar";
import { NavbarBottom } from "./Components/Navbar/navbar_bottom_menu/NavbarBottom.jsx";
import { MainRoutes } from "./Pages/MainRoutes.jsx";
import Page_Not_Found from "./Pages/Page_Not_Found/Page_Not_Found";

function App() {
	return (
		<div>
			{/* <Navbar />
			<NavbarBottom />
			<MainRoutes /> 
			<Footer /> */}
			{/* <Cart /> */}
			<Page_Not_Found />
		</div>
	);
}

export default App;
