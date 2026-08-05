import React from "react";
import Banner from "./HomeDetail/Banner";
import Trending from "./HomeDetail/Trending";
import Fresh from "./HomeDetail/Fresh";
import Featured from "./HomeDetail/Featured";
import HomeLast from "./HomeDetail/HomeLast";
import NavBar from "../../Components/NavBar";

const Home = () => {
	return (
		<div>
			<NavBar />
			<Banner />
			<Featured />
			<Trending />
			<Fresh />
			<HomeLast />
		</div>
	);
};

export default Home;
