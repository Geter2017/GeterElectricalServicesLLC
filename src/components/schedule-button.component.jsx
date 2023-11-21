import { React } from "react";
import "./schedule-button.styles.css";

export default function scheduleButton() {
	return (
		<div className="the-container">
			<a href="https://mailchi.mp/34d0687e4419/geterelectricalservicesllc-schedule-appointment-page">
				<button
					className="btn"
					style={{
						background: "#FEFFFE",
						borderRadius: 20,
						border: "5px #131552 solid",
						fontFamily: "Istok Web",
						fontWeight: "400",
						textShadow: "3px 3px 5px #FF8D23 ",
					}}
				>
					SCHEDULE NOW
				</button>
			</a>
		</div>
	);
}
