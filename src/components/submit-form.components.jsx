import React, { useState } from "react";
import "./submit-form.styles.css";
import { db } from "../firebase";

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
			<label className="phonenumber">Phone Number(required)</label>
			<input
				className="phonenumber"
				placeholder="Phone Number"
				value={phonenumber}
				onChange={(e) => setPhoneNumber(e.target.value)}
			/>
			{/* <label className="date">Date & Time(required)</label> */}
			{/* <input */}
			{/* className="date" */}
			{/* placeholder="Date Time" */}
			{/* value={datetime} */}
			{/* onChange={(e) => setDateTime(e.target.value)} */}
			{/* /> */}
			{/* <label className="city">City(required)</label> */}
			{/* <input */}
			{/* className="city" placeholder="City" value={city} */}
			{/* onChange={(e) => setCity(e.target.value)} */}
			{/* /> */}
			{/* <label className="state">State(required)</label> */}
			{/* <input */}
			{/* className="state" */}
			{/* placeholder="State" */}
			{/* value={state} */}
			{/* onChange={(e) => setState(e.target.value)} */}
			{/* /> */}
			{/* <label className="zip">ZipCode(required)</label> */}
			{/* <input */}
			{/* className="zip" */}
			{/* placeholder="Zip Code" */}
			{/* value={zipcode} */}
			{/* onChange={(e) => setZipCode(e.target.value)} */}
			{/* /> */}
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
