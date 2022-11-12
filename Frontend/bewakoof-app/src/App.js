import React from "react";

import { Footer } from "./Components/footer/Footer";
import { Navbar } from "./Components/Navbar/Navbar";
import { NavbarBottom } from "./Components/Navbar/navbar_bottom_menu/NavbarBottom.jsx";
import { MainRoutes } from "./Pages/MainRoutes.jsx";
function App() {
	return (
		<div>
			<Navbar />
			<NavbarBottom />
			<MainRoutes />
			<Footer />
		</div>
	);
}

export default App;
