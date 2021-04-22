import client1 from '../img/client/client-1.png'
import client2 from '../img/client/client-2.png'

const Client = () => {
    return (
        <div className="client">
            <div className="client-header">
                <h2>
                    What
                    <br />
                    Client
                    <br />
                    Says
                </h2>
            </div>
            <div className="client-container">
                <div className="client-box">
                    <img src={client1} alt="client1" />
                    <h3>Aliqua</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et amet, consectetur adipiscing
                    </p>
                </div>
                <div className="client-box">
                    <img src={client2} alt="client2" />
                    <h3>Liqua</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et amet, consectetur adipiscing
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Client;