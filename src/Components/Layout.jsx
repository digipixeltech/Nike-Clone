import { Outlet } from "react-router-dom";
import react from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = () => {
	return (
		<div>
			<NavBar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Layout;
