import React, { useEffect, useState } from "react";


const TrafficLight = () => {
	const [ color, setColor ] = useState("red");
	return (
		
		<div>
			<div className="traffic-light-top"></div>
			<div className="wrapper">
				<div className="traffic-light-container">
					<div onClick={() => setColor("red")} className={"traffic-light-red" + (color === "red" ? " active-color-red" : "" )}></div>
					<div onClick={() => setColor("yellow")} className={"traffic-light-yellow" + (color === "yellow" ? " active-color-yellow" : "" )}></div>
					<div onClick={() => setColor("green")} className={"traffic-light-green" + (color === "green" ? " active-color-green" : "" )}></div>
				</div>
			</div>
			
		</div>
	);
};

export default Home;