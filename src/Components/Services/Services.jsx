import deliveryMan from '../img/services/delivery-man.png'
import airplane from '../img/services/airplane.png'
import backpack from '../img/services/backpack.png'

const Services = () => {
    return (
        <div className="services">
            <div className="heading-container">
                <h2>Our
                <br />
                Taxi Services</h2>
            </div>

            <div className="services-container">
                <div className="box-services">
                    <img src={deliveryMan} alt="deliveryMan" />
                    <div className="services-box">
                        <h5>Private Driver</h5>
                        <p>Lorem ipsum dolor sit ame</p>
                        <button>Read More</button>
                    </div>
                </div>
                <div className="box-services">
                    <img src={airplane} alt="airplane" />
                    <div className="services-box">
                        <h5>Airport Transfer</h5>
                        <p>Lorem ipsum dolor sit ame</p>
                        <button>Read More</button>
                    </div>
                </div>
                <div className="box-services">
                    <img src={backpack} alt="backpack" />
                    <div className="services-box">
                        <h5>Luggage Transfer</h5>
                        <p>Lorem ipsum dolor sit ame</p>
                        <button>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;