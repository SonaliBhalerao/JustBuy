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
import { LoginAuth } from "../LoginAuth/LoginAuth";
import Page_Not_Found from "./Page_Not_Found/Page_Not_Found";
import { CartPage } from "./cart_page/CartPage";
import { Payment } from "./payments_page/Payment";
import Order_Completed from "./Order_Completed/Order_Completed";

export const MainRoutes = () => {
	return (
		<div>
			<Routes>
				<Route path={"/"} element={<HomePage />} />
				<Route path={"/mens-home"} element={<MensHomePage />} />
				<Route path={"/womens-home"} element={<WomensHomePage />} />
				<Route
					path={"/mens-home/:name"}
					element={
						<LoginAuth>
							<MensSinglePage />
						</LoginAuth>
					}
				/>
				<Route
					path={"/womens-home/:name"}
					element={
						<LoginAuth>
							<WomensSinglePage />
						</LoginAuth>
					}
				/>
				<Route path={"/men"} element={<MensProductPage />} />
				<Route path={"/women"} element={<WomensProductPage />} />
				<Route
					path={"/women/:name"}
					element={
						<LoginAuth>
							<WomensSinglePage />
						</LoginAuth>
					}
				/>
				<Route
					path={"/men/:name"}
					element={
						<LoginAuth>
							<MensSinglePage />
						</LoginAuth>
					}
				/>
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
				<Route path={"/cart"} element={<CartPage />} />
				<Route path={"/cart/payment"} element={<Payment />} />
				<Route path={"/ordersuccess"} element={<Order_Completed/>} />
				<Route path="*" element={<Page_Not_Found />}></Route>
			</Routes>
		</div>
	);
};
