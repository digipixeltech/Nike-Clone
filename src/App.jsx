import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Home from "./Pages/home/Home";
import Newandfeatured from "./Pages/new&featured/Newandfeatured";
import Men from "./Pages/men/Men";
import Women from "./Pages/women/Women";
import Kids from "./Pages/kids/Kids";
import Jordan from "./Pages/jordan/Jordan";
import Sale from "./Pages/sale/Sale";
import Notfound from "./Pages/Notfound";
import Layout from './Components/Layout';

function App() {
	return (
		<>
			{/* <NavBar />  */} {/* not used this method because we are using outlet method this time */}
			<Routes>
				<Route path="/" element={<Layout />} />
				<Route index element={<Home />} />
				<Route path="/newAndFeatured" element={<Newandfeatured />} />
				<Route path="/men" element={<Men />} />
				<Route path="/women" element={<Women />} />
				<Route path="/kids" element={<Kids />} />
				<Route path="/jordan" element={<Jordan />} />
				<Route path="/sale" element={<Sale />} />

				<Route path="/*" element={<Notfound />} />
			</Routes>
			{/* <Footer />  */} {/* not used this method because we are using outlet method this time */}
		</>
	);
}

export default App;
