import React from "react";
import { Route, Routes } from "react-router-dom";
import { ReqAdminAuth } from "../AdminAuth/ReqAdminAuth";
import { Admin } from "./admin_page/Admin";
import { AdminLogin } from "./admin_page/AdminLogin";
import { AdminSignup } from "./admin_page/AdminSignup";
import { HomePage } from "./home_page/HomePage";
import LoginPage from "./Login_page/Login_page";
import MensProductPage from "../Components/Men/MensProductPage";
import WomensProductPage from "../Components/Women/WomenProductPage";
import { MensHomePage } from "./mens_home_page/MensHomePage";
import { Signup } from "./Signup/Signup";
import { MensSinglePage } from "./Single_page/MenSinglepage";
import { WomensSinglePage } from "./Single_page/WomensSinglepage";
import { WomensHomePage } from "./womens_home_page/WomensHomePage";
import Page_Not_Found from "./Page_Not_Found/Page_Not_Found";

export const MainRoutes = () => {
	return (
		<div>
			<Routes>
				<Route path={"/"} element={<HomePage />} />
				<Route path={"/mens-home"} element={<MensHomePage />} />
				<Route path={"/womens-home"} element={<WomensHomePage />} />
				<Route path={"/mens-home/:name"} element={<MensSinglePage />} />
				<Route path={"/womens-home/:name"} element={<WomensSinglePage />} />
				<Route path={"/men"} element={<MensProductPage />} />
				<Route path={"/women"} element={<WomensProductPage />} />
				<Route path={"/women/:name"} element={<WomensSinglePage />} />
				<Route path={"/men/:name"} element={<MensSinglePage />} />
				<Route path={"/signup"} element={<Signup />} />
				<Route
					path={"/admin"}
					element={
						<ReqAdminAuth>
							{" "}
							<Admin />{" "}
						</ReqAdminAuth>
					}
				/>
				<Route path={"/admin/signup"} element={<AdminSignup />} />
				<Route path={"/admin/login"} element={<AdminLogin />} />
				<Route path={"/login"} element={<LoginPage />} />
				<Route path="*" element={<Page_Not_Found />}></Route>
			</Routes>
		</div>
	);
};
