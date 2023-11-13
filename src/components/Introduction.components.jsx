import React from "react";
import "./introduction.styles.css";

export default function introduction() {
	return (
		<div>
			<div className="body">
				<div className="cover">
					<img
						style={{ width: "100%", height: "100%", position: "relative" }}
						src="body.jpg"
						alt="Head"
					/>
					<div className="line-wrapper">
						<img className="line" alt="" />
						<div className="label">
							<h1 className="heading">Our goal is to leave you brighter</h1>
						</div>
						<div className="line-wrapper2">
							<img className="line-2" alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
