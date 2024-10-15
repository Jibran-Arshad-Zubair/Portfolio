import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
    faLinkedin,
    faGithub,
} from '@fortawesome/free-brands-svg-icons';

import '../../styles/Contact/Contact.scss';

const Contact = () => {
    const form = useRef();
    const [isSuccess, setIsSuccess] = useState(false); // State to manage success message visibility

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_5dufa2u', 'template_fo8yzmu', form.current, {
                publicKey: 'LL7hwMGD7RIbQI0N0',
            })
            .then(
                () => {
                    setIsSuccess(true); // Show success message
                    setTimeout(() => {
                        setIsSuccess(false); // Hide success message after 3 seconds
                    }, 3000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
        <>
            <div className="contact" id='contact'>
                <div className="contact__header">
                    <h1>
                        <span data-aos="fade-down" data-aos-delay="0" data-aos-offset="200">C</span>
                        <span data-aos="fade-down" data-aos-delay="200" data-aos-offset="200">O</span>
                        <span data-aos="fade-down" data-aos-delay="400" data-aos-offset="200">N</span>
                        <span data-aos="fade-down" data-aos-delay="600" data-aos-offset="200">T</span>
                        <span data-aos="fade-down" data-aos-delay="800" data-aos-offset="200">A</span>
                        <span data-aos="fade-down" data-aos-delay="1000" data-aos-offset="200">C</span>
                        <span data-aos="fade-down" data-aos-delay="1200" data-aos-offset="200">T</span>
                        <span data-aos="fade-down" data-aos-delay="1400" data-aos-offset="200">.</span>
                    </h1>
                </div>
                <div className="contact__container">
                    <div className="contact__details">
                        <div className="contact__form" data-aos="fade-up">
                            <form ref={form} onSubmit={sendEmail}>
                                <p className="contact__form-group">
                                    <label htmlFor="name">Name: </label>
                                    <input
                                        type="text"
                                        name="name"
                                        autoComplete="off"
                                        placeholder="Enter name"
                                        required
                                    />
                                </p>
                                <p className="contact__form-group">
                                    <label htmlFor="email">Email: </label>
                                    <input
                                        type="email"
                                        name="email"
                                        autoComplete="off"
                                        placeholder="Enter email"
                                        required
                                    />
                                </p>
                                <p className="contact__form-group">
                                    <label htmlFor="message">Concern: </label>
                                    <textarea
                                        name="message"
                                        id="contact__message"
                                        cols="20"
                                        rows="5"
                                        placeholder="Type your message"
                                    ></textarea>
                                </p>
                                <button type='submit' className="contact__send-btn">
                                    Send
                                </button>
                            </form>
                            {isSuccess && (
                                <div className="contact__success-message">
                                    Your message has been sent successfully!
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="contact__info" data-aos="fade-up">
                        <h3 className="contact__info-title">Let's Connect</h3>
                        <div className="contact__info-details">
                            <ul>
                                <li> <FontAwesomeIcon icon={faLocationDot} size="2x" /><p><span>Address:&nbsp;&nbsp;</span>LDA Avenue 1, Block D, House No 1542, Lahore, Pakistan</p></li>
                                <li> <FontAwesomeIcon icon={faPhone} size="2x" /><p><span>Phone:</span>&nbsp;&nbsp;(+92) 3066379087</p></li>
                                <li> <FontAwesomeIcon icon={faEnvelope} size="2x" /><p><span>Email:&nbsp;&nbsp;</span>ranajibranarshad@gmail.com</p></li>
                            </ul>
                        </div>
                        <div className="contact__social">
                            <p className="contact__linkedin">
                                <a href="https://www.linkedin.com/in/jibran-arshad-96b8b4269/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                            </p>
                            <p className='contact__github'>
                                <a href="https://github.com/Jibran-Arshad-Zubair" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
