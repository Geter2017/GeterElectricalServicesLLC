import { React } from "react";
import "./schedule-button.styles.css";

export default function scheduleButton() {
	return (
		<div className="button-container">
			<a href="https://mailchi.mp/34d0687e4419/geterelectricalservicesllc-schedule-appointment-page">
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
			</a>
		</div>
	);
}
