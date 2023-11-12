import React from "react";
import TheLogo from "./TheLogo.png";
import "./headline.styles.css";

export default function Headline() {
	return (
		<div className="container">
			<div className="cover">
				<img
					style={{ width: "100%", height: "100%", position: "relative" }}
					src="HeaderPhoto.jpg"
					alt="Head"
				/>
				<img className="lgo" src={TheLogo} alt="description" />
				{/* Need to come back to button to add on click logic before deploying the website live */}
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
		</div>
	);
}
