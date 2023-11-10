import React from "react";
import TheLogo from "./TheLogo.png";
import "./headline.styles.css";

// Code to add the logic on click event scroll user to the bottom of the page to contact form, code from chatgpt needs to refractor.
// const ScrollToBottomButton = () => {
// const contactFormRef = useRef(null);

// const scrollToBottom = () => {
//   if (contactFormRef.current) {
// contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
//   }
// };

export default function Headline() {
	return (
		<>
			{/* This code is very important centers the objects in the middle of desktop */}
			<div
				style={{
					width: "100%",
					height: "100%",
					background: "white",
					justifyContent: "center",
					alignItems: "center",
					display: "inline-flex",
				}}
			>
				<img
					style={{ width: "100%", height: "100%", position: "relative" }}
					src="HeaderPhoto.jpg"
					alt="Head"
				/>
			</div>

			<img className="thelogo" src={TheLogo} alt="description" />
			<div>
				<div>
					{/* Need to come back to button to add on click logic before deploying the website live */}
					<button
						className="button"
						style={{
							width: 362,
							height: 102,
							background: "#FEFFFE",
							borderRadius: 20,
							border: "10px #131552 solid",

							fontSize: 40,
							fontFamily: "Istok Web",
							fontWeight: "400",
							textShadow: "2px 2px 4px #FF8D23 ",
						}}
					>
						SCHEDULE NOW
					</button>
				</div>
			</div>
		</>
	);
}
