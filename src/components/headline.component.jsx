import React from "react";
import "./headline.styles.css";

export default function Headline() {
	return (
		<div className="container">
			<button
				className="btn"
				style={{
					width: 200,
					height: 60,
					background: "#FEFFFE",
					borderRadius: 20,
					border: "10px #131552 solid",

					fontSize: 20,
					fontFamily: "Istok Web",
					fontWeight: "400",
					textShadow: "3px 3px 5px #FF8D23 ",
				}}
			>
				SCHEDULE NOW
			</button>
		</div>
	);
}
