import taxiImg from '../img/about-img.png'

const About = () => {
    return (
        <div className="about">
            <div className="about-taxi">
                <h2>
                    About
                    <br />
                    Taxi Company
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamm.
                </p>
                <button className="about-btn">Read More</button>
            </div>
            <div className="taxi-logo">
                <img src={taxiImg} alt="taxi-img" />
            </div>
        </div>
    );
}

export default About;