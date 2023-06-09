import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import wave from './wave.svg';
import './Contact.css';

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
		<div className="contact-container" id="contact">
			<h1 className="contact-title">Contact Me</h1>
			<div className="form-wrapper">
				<img src={wave} alt="wave border image" />
				<form ref={form} onSubmit={sendEmail} className="form-container">
					<label className="form-labels" htmlFor="email">
						Email
					</label>
					<input type="text" id="email" name="user_email" className="inputs" />
					<label className="form-labels" htmlFor="name">
						Name
					</label>
					<input id="name" type="text" name="user_name" className="inputs" />
					<label className="form-labels" htmlFor="message">
						Message
					</label>
					<textarea className="inputs" id="message" name="message" rows="6" />
					<input type="submit" value="SEND" />
				</form>
			</div>
		</div>
	);
};

export default Contact;
