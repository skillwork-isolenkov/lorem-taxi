import taxiImg from '../img/about-img.png'
import { useState } from 'react'

const Contact = () => {
    const [message, setMessage] = useState('');

    const contactButton = (e) => {
        e.preventDefault();
        let name = document.querySelector('#name');
        let msg = document.querySelector('#input-msg');
        let phoneNumber = document.querySelector('#ph-number');

        let contactMsg = document.querySelector('#contact-msg');

        if (name.value !== '' && msg.value !== '' && phoneNumber.value !== '') {
            setMessage('Your message has been submitted!');
            contactMsg.style.color = "#08bd08";
        } else {
            setMessage('Please fill in required fields!');
            contactMsg.style.color = "red";
        }

        name.value = '';
        msg.value = '';
        phoneNumber.value = '';
    }

    return (
        <div className="contact">
            <div className="contact-heading">
                <h2>
                    Any Problems
                    <br />
                    Any Questions
                </h2>
            </div>
            <div className="contact-container">
                <div className="contact-box">
                    <h4>Get In touch</h4>
                    <form action="/">
                        <input type="text" placeholder="Name" id="name" />
                        <input type="number" placeholder="Phone Number" id="ph-number" />
                        <input type="text" placeholder="Message" id="input-msg" />
                        <button onClick={contactButton}>Send</button>
                    </form>
                    <span id="contact-msg">{message}</span>
                </div>
                <img src={taxiImg} alt="taxi-img" />
            </div>
        </div>
    );
}

export default Contact;