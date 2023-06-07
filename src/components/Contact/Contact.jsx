import './Contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_2okstq2',
				'template_15sqb34',
				form.current,
				'2W8Xeo2kxz5dOXvQL'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div className="contact-container">
			<div className="form-wrapper">
				<form ref={form} onSubmit={sendEmail} className="form-container">
					<input
						type="text"
						name="user_email"
						placeholder="Email..."
						className="inputs"
					/>
					<input
						type="text"
						name="user_name"
						placeholder="Name..."
						className="inputs"
					/>
					<textarea name="message" placeholder="Message..." />
					<input type="submit" value="SEND" />
				</form>
			</div>
		</div>
	);
};

export default Contact;
