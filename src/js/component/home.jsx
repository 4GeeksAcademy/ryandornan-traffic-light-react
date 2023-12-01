import React from "react";

//include images into your bundle
import TrafficLight from "./TrafficLight";
import Light from "./Light";

//create your first component
const Home = () => {
	return (
		<div className="wrapper">
			<TrafficLight />
		</div>
	);
};

export default Home;
