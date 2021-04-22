import mobileImg from '../img/download/mobile.png'
import androidImg from '../img/download/playstore.png'
import appleImg from '../img/download/appstore.png'
import { Link } from 'react-router-dom'

const Download = () => {
    return (
        <div className="download">
            <div className="download-container">
                <h2>Download Our App</h2>
                <h4>Details</h4>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when distribution of letters.</p>
                <h4>How It Works</h4>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when distribution of letters.</p>
                <div className="icons">
                    <Link to="/"><img src={androidImg} alt="android-img" /></Link>
                    <Link to="/"><img src={appleImg} alt="apple-img" /></Link>
                </div>
            </div>
            <img id="mobileImg" src={mobileImg} alt="mobile-img" />
        </div>
    );
}

export default Download;