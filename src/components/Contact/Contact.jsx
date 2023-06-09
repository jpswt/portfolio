import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import wave from './wave.svg';
import './Contact.css';

const Contact = () => {
	const [statusMsg, setStatusMsg] = useState('');
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
					setStatusMsg('Your request has been sent!');
					form.current.reset();
					setTimeout(() => {
						setStatusMsg('');
					}, 2000);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div className="contact-container" id="contact">
			<h1 className="contact-title">Contact Me</h1>
			<div className="form-wrapper">
				<form ref={form} onSubmit={sendEmail} className="form-container">
					<input
						type="text"
						id="email"
						name="user_email"
						className="inputs"
						placeholder="Email"
						required
					/>

					<input
						id="name"
						type="text"
						name="user_name"
						className="inputs"
						placeholder="Name"
						required
					/>

					<textarea
						className="inputs"
						id="message"
						name="message"
						rows="6"
						style={{ resize: 'none' }}
						placeholder={`Let's connect...`}
						required
					/>
					<button className="btn" type="submit">
						{statusMsg ? statusMsg : 'Send'}
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
