import taxiImg from '../img/slider-img.png'
import { useState } from 'react'

const Home = () => {
    const [message, setMessage] = useState('');

    const homeButton = (e) => {
        e.preventDefault();
        let carType = document.querySelector('#car-type');
        let location = document.querySelector('#location');
        let dropLocation = document.querySelector('#drop-location');
        let phoneNumber = document.querySelector('#phone-number');

        let homeMsg = document.querySelector('#home-message');

        if (carType.value !== '' && location.value !== '' && dropLocation.value !== '' && phoneNumber.value !== '') {
            setMessage('Your taxi has been booked!');
            homeMsg.style.color = "#08bd08";
        } else {
            setMessage('Please fill in required fields!');
            homeMsg.style.color = "red";
        }

        carType.value = '';
        location.value = '';
        dropLocation.value = '';
        phoneNumber.value = '';
    }
    return (
        <div className="home">
            <div className="box">
                <div className="detail-box">
                    <h3>Welcome to</h3>
                    <h2>LoremTaxi</h2>
                </div>
                <img src={taxiImg} alt="taxi-img" />
                <button className="home-btn">Read More</button>
            </div>

            <div className="get-taxi">
                <h4>Get A Taxi Now</h4>
                <form action="/">
                    <input id="car-type" type="text" placeholder="Car Type" />
                    <input id="location" type="text" placeholder="Pick Up Location" />
                    <input id="drop-location" type="text" placeholder="Drop Location" />
                    <div className="btn-input">
                        <input id="phone-number" type="text" placeholder="Your Phone Number" />
                        <button onClick={homeButton}>Book Now</button>
                    </div>
                    <span id="home-message">{message}</span>
                </form>
            </div>
        </div>
    );
}

export default Home;