import deliveryMan from '../img/choose/delivery-man-white.png'
import repairingService from '../img/choose/repairing-service-white.png'
import shield from '../img/choose/shield-white.png'

const Choose = () => {
    return (
        <div className="choose">
            <div className="choose-heading">
                <h2>
                    Why
                    <br />
                    Choose Us
                </h2>
            </div>

            <div className="choose-container">
                <div className="choose-box">
                    <div className="choose-img">
                        <img src={deliveryMan} alt="deliveryMan" />
                    </div>
                    <div className="choose-details">
                        <h5>Best Drivers</h5>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its.</p>
                    </div>
                </div>
                <div className="choose-box">
                    <div className="choose-img">
                        <img src={shield} alt="shield" />
                    </div>
                    <div className="choose-details">
                        <h5>Safe and Secure</h5>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its.</p>
                    </div>
                </div>
                <div className="choose-box">
                    <div className="choose-img">
                        <img src={repairingService} alt="repairingService" />
                    </div>
                    <div className="choose-details">
                        <h5>24x7 Support</h5>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Choose;