import React from "react";
import trend1 from "../../../img/trending/trend1.webp";
import trend2 from "../../../img/trending/trend2.webp";
import trend3 from "../../../img/trending/trend3.webp";

const Trending = () => {
	const trendings = [
		{
			url: trend1,
		},
		{
			url: trend2,
		},
		{
			url: trend3,
		},
	];

	return (
		<div className="m-13">
			<h2 className="text-2xl font-semibold mb-7 mx-5">Trending</h2>
			<div className="flex gap-7">
				{trendings.map((trend, idx) => {
					return (
						<a href="" key={idx}>
							<div
								className="trending-pic bg-cover bg-center p-5"
								style={{ backgroundImage: `url(${trend.url})` }}
							></div>
						</a>
					);
				})}
			</div>
		</div>
	);
};

export default Trending;
