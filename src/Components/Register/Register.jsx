import { Link } from "react-router-dom"
import { useState } from 'react'

const Register = () => {
    const [message, setMessage] = useState('');

    const registerButton = (e) => {
        e.preventDefault();
        let username = document.querySelector('#usrn');
        let password = document.querySelector('#psw');
        let repeatPsw = document.querySelector('#repeat-psw');
        let email = document.querySelector('#e-mail');
        let number = document.querySelector('#ph-num');

        let loginMsg = document.querySelector('#register-msg');

        if (username.value !== '' && password.value !== '' && repeatPsw.value !== '' && email.value !== '' && number.value !== '') {
            setMessage('Your registration has been successfully received!');
            loginMsg.style.color = "#08bd08";
        } else {
            setMessage('Please fill in required fields!');
            loginMsg.style.color = "red";
        }

        username.value = '';
        password.value = '';
        repeatPsw.value = '';
        email.value = '';
        number.value = '';
    }
    return (
        <div className="register">
            <div className="register-form">
                <h4>Sign Up</h4>
                <form action="/">
                    <input type="text" placeholder="Username" id="usrn" />
                    <input type="email" placeholder="E-mail" id="e-mail" />
                    <input type="password" placeholder="Password" id="psw" />
                    <input type="password" placeholder="Repeat Password" id="repeat-psw" />
                    <div className="register-input">
                        <input type="number" placeholder="Your Phone Number" id="ph-num" />
                        <button onClick={registerButton}>Register</button>
                    </div>
                    <span id="register-msg">{message}</span>
                    <p>If you already have an account, <Link to="/login">Sign In!</Link></p>
                </form>
            </div>
        </div>
    );
}

export default Register;