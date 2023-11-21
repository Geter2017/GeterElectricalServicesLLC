import React, { useState } from "react";
import "./submit-form.styles.css";

const Contact = () => {
	const [fullname, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phonenumber, setPhoneNumber] = useState("");
	const [message, setMessage] = useState("");
	const [loader, setLoader] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoader(true);

		try {
			// Your form submission logic can be handled by Netlify automatically
			const response = await fetch("/", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: new URLSearchParams({
					"form-name": "Geter-contact", // Specify the form name
					fullname,
					email,
					phonenumber,
					message,
				}).toString(),
			});

			if (response.ok) {
				setLoader(false);
				alert("Your message has been submitted👍");
			} else {
				throw new Error("Form submission failed");
			}
		} catch (error) {
			alert(error.message);
			setLoader(false);
		}

		setFullName("");
		setEmail("");
		setPhoneNumber("");
		setMessage("");
	};

	return (
		<form
			name="contact"
			className="form"
			onSubmit={handleSubmit}
			data-netlify="true"
			netlify-honeypot="bot-field" // Add this line for honeypot spam prevention
		>
			{/* Add the honeypot input field */}
			<p style={{ display: "none" }}>
				<label>
					Don’t fill this out if you're human: <input name="bot-field" />
				</label>
			</p>

			<label className="name">Full Name (required)</label>
			<input
				className="fullname"
				placeholder="Full Name"
				value={fullname}
				onChange={(e) => setFullName(e.target.value)}
			/>
			<label className="email">Email (required)</label>
			<input
				className="email"
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<label>Phone Number (required)</label>
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
