import React from "react";
import feature1 from "../../../img/other/feature1.webp";
import feature2 from "../../../img/other/feature2.webp";

const Featured = () => {
	return (
		<div>
			<h1 className="text-2xl font-semibold m-11 mb-7">Featured</h1>
			<div className="flex flex-wrap">
				<a href="">
					<img src={feature1} alt="" className="featured-pic" />
				</a>
				<a href="">
					<img src={feature2} alt="" className="featured-pic" />
				</a>
			</div>
		</div>
	);
};

export default Featured;
