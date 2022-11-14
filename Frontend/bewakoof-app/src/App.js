import React from "react";
import Cart from "./Components/Cart/Cart";

import { Footer } from "./Components/footer/Footer";
import { Navbar } from "./Components/Navbar/Navbar";
import { NavbarBottom } from "./Components/Navbar/navbar_bottom_menu/NavbarBottom.jsx";
import { MainRoutes } from "./Pages/MainRoutes.jsx";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
 function ScrollToTop() {
	const { pathname } = useLocation();
  
	useEffect(() => {
	  window.scrollTo(0, 0);
	}, [pathname]);
  
	return null;
  }
function App() {
	return (
		<div>
			<Navbar />
			<NavbarBottom />
			<ScrollToTop/>
			<MainRoutes />
			<Footer />
			{/* <Cart /> */}
		</div>
	);
}

export default App;
