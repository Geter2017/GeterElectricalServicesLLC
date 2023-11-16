import React, { useState } from "react";
import "./submit-form.styles.css";
import { db } from "../utils/firebase.utils.js";

const Contact = () => {
	const [fullname, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phonenumber, setPhoneNumber] = useState("");
	const [datetime, setDateTime] = useState("");
	const [streetaddress, setStreetAddress] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [zipcode, setZipCode] = useState("");
	const [message, setMessage] = useState("");

	const [loader, setLoader] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoader(true);

		db.collection("contacts")
			.add({
				fullname: fullname,
				email: email,
				phonenumber: phonenumber,
				datetime: datetime,
				streetaddress: streetaddress,
				city: city,
				state: state,
				zipcode: zipcode,
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
		setDateTime("");
		setStreetAddress("");
		setCity("");
		setState("");
		setZipCode("");
		setMessage("");
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<h1>Contact Us 🤳</h1>

			<label>FullName(required)</label>
			<input
				placeholder="FullName"
				value={fullname}
				onChange={(e) => setFullName(e.target.value)}
			/>

			<label>Email(required)</label>
			<input
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>

			<label>PhoneNumber(required)</label>
			<input
				placeholder="PhoneNumber"
				value={phonenumber}
				onChange={(e) => setPhoneNumber(e.target.value)}
			/>

			<label>Date & Time(required)</label>
			<input
				placeholder="DateTime"
				value={datetime}
				onChange={(e) => setDateTime(e.target.value)}
			/>

			<label>City(required)</label>
			<input
				placeholder="City"
				value={city}
				onChange={(e) => setCity(e.target.value)}
			/>

			<label>State(required)</label>
			<input
				placeholder="State"
				value={state}
				onChange={(e) => setState(e.target.value)}
			/>

			<label>ZipCode(required)</label>
			<input
				placeholder="ZipCode"
				value={zipcode}
				onChange={(e) => setZipCode(e.target.value)}
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
