import React, { useState } from "react";
import "./submit-form.styles.css";
// import { db } from "../utils/firebase/firebase.utils";

const Contact = () => {
	const [fullname, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phonenumber, setPhoneNumber] = useState("");
	const [message, setMessage] = useState("");

	const [loader, setLoader] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoader(true);

		// db.collection
		"contacts"
			.add({
				fullname: fullname,
				email: email,
				phonenumber: phonenumber,
				message: message,
			})
			.then(() => {
				setLoader(false);
				alert("Your message has been submitted👍");
			})
			.catch((error) => {
				alert(error.message);
				setLoader(false);
			});

		setFullName("");
		setEmail("");
		setPhoneNumber("");
		setMessage("");
	};

	return (
		<form name="Geter-contact" className="form" onSubmit={handleSubmit} netlify>
			<input type="hidden" name="form-name" value="Geter-contact" />
			{/* <h1>Schedule Appointment</h1> */}
			<label className="name">Full Name(required)</label>
			<input
				className="fullname"
				placeholder="Full Name"
				value={fullname}
				onChange={(e) => setFullName(e.target.value)}
			/>
			<label className="email">Email(required)</label>
			<input
				className="email"
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<label>Phone Number(required)</label>
			<input
				placeholder="Phone Number"
				value={phonenumber}
				onChange={(e) => setPhoneNumber(e.target.value)}
			/>
			<label>Message</label>
			<textarea
				placeholder="Message"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
			></textarea>
			<button
				type="submit"
				style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
			>
				Submit
			</button>
		</form>
	);
};

export default Contact;
