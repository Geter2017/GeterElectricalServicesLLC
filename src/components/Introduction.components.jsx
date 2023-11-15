import React from "react";
// import "./introduction.styles.css";

export default function introduction() {
	return (
		<div>
			<div className="body">
				<div className="cover">
					{/* This controls the top line, i turned this off to test if the other cover image would work better do not delete!! */}
					{/* <img }
					style={{ width: "100%", height: "100%", position: "relative" }}
					src="body.jpg" alt=""
					{/* /> */}
					<div className="line-wrapper">
						<img className="line" alt="" />
						<div className="label">
							{/* I turned this off to see if the other introduction header would work better do not delete!! */}
							{/* <h1 className="heading">Our goal is to leave you brighter</h1> */}
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
