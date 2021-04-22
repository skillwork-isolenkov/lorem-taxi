import { Link } from "react-router-dom";
import { useState } from 'react'

const Login = () => {
    const [message, setMessage] = useState('');

    const loginButton = (e) => {
        e.preventDefault();
        let username = document.querySelector('#username');
        let password = document.querySelector('#password');

        let loginMsg = document.querySelector('#login-msg');

        if (username.value !== '' && password.value !== '') {
            setMessage('You Have Successfully Logged in!');
            loginMsg.style.color = "#08bd08";
        } else {
            setMessage('Please fill in required fields!');
            loginMsg.style.color = "red";
        }

        username.value = '';
        password.value = '';
    }
    return (
        <div className="login">
            <div className="login-form">
                <h4>Sign In</h4>
                <form action="/">
                    <input type="text" placeholder="Username" id="username" />
                    <input type="password" placeholder="Password" id="password" />
                    <div className="login-input">
                        <button onClick={loginButton}>Login</button>
                    </div>
                    <span id="login-msg">{message}</span>
                    <p>Don't have an account yet? <Link to="/register">Sign Up!</Link></p>
                </form>
            </div>
        </div>
    );
}

export default Login;