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
			<div className="info">
				<div className="info-sections">
					<a href="mailto:joelperezdev12@gmail.com">
						<p className="circle">
							<i class="fa-regular fa-paper-plane fa-md"></i>
						</p>
					</a>
					<p className="section-title">Email</p>
					{/* <p>joelperezdev12@gmail.com</p> */}
				</div>
				<div className="info-sections">
					<a href="tel:512-785-6688">
						<p className="circle">
							<i class="fa-solid fa-phone fa-md"></i>
						</p>
					</a>
					<p className="section-title">Phone</p>
					{/* <p>+1512 785 6688</p> */}
				</div>
				<div className="info-sections">
					<a
						href="https://www.linkedin.com/in/joel-perez-dev12/"
						target="_blank"
						rel="noreferrer noopener"
					>
						<p className="circle">
							<i class="fa-brands fa-linkedin-in fa-md"></i>
						</p>
					</a>
					<p className="section-title">LinkedIn</p>
					{/* <p>joel-perez-dev12</p> */}
				</div>
				{/* <span>Phone</span>
				<span>LinkedIn</span> */}
			</div>
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
						rows="5"
						style={{ resize: 'none' }}
						placeholder={`Let's connect...`}
						required
					/>
					<button className="btn" type="submit">
						{statusMsg ? statusMsg : 'Send Message'}
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
