import React from "react";
import "./introduction.styles.css";

export default function Introduction() {
	return (
		<div className="box">
			<img className="line" alt="Line" src="headingline.jpg" />
			<p className="p1">Our goal is to leave you brighter</p>
			<img className="linetwo" alt="Line" src="headingline.jpg" />
			<div className="intro">
				<div className="flexcontainer">
					<p className="text">
						<span className="text-wrapper">
							Geter Electric Services has stood as the favored option for both
							upstate South Carolina&#39;s homeowners and businesses seeking
							secure and reliable electrical expertise. <br />
						</span>
					</p>
					<p className="intro">
						<span className="text-wrapper">
							<br />
						</span>
					</p>
					<p className="intro">
						<span className="text-wrapper">
							We cover a broad spectrum of services, including electrical
							repairs, panel enhancements, lighting setups, recessed lighting,
							safety assessments, EV charging, emergency power alternatives, and
							various other offerings.
							<br />
						</span>
					</p>
					<p className="intro">
						<span className="text-wrapper">
							<br />
						</span>
					</p>
					<p className="intro">
						<span className="text-wrapper">
							Our licensed and insured status ensures your peace of mind. If you
							have any inquiries regarding your projects and our potential
							assistance, please feel free to send us an email.
						</span>
						<div className="intro">
							<div className="flexcontainer">
								<p className="text">
									<span className="text-wrapper">
										South Carolina Electrical License
										<br />
									</span>
								</p>
								<p className="text">
									<span className="text-wrapper"># 117138</span>
								</p>
							</div>
						</div>
					</p>
				</div>
			</div>
		</div>
	);
}
