import newsImg from '../img/news/news-img.jpg'

const News = () => {
    return (
        <div className="news">
            <div className="news-header">
                <h2>
                    Our
                    <br />
                    News
                </h2>
            </div>

            <div className="news-container">
                <div className="news-box">
                    <h5>03 Feb 2021</h5>
                    <img src={newsImg} alt="news-img" />
                    <div className="details-news">
                        <h4>Eiusmod tempor incididunt</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                        </p>
                    </div>
                </div>
                <div className="news-box">
                    <h5>01 Apr 2021</h5>
                    <img src={newsImg} alt="news-img" />
                    <div className="details-news">
                        <h4>Eiusmod tempor incididunt</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                        </p>
                    </div>
                </div>
                <div className="news-box">
                    <h5>14 Apr 2021</h5>
                    <img src={newsImg} alt="news-img" />
                    <div className="details-news">
                        <h4>Eiusmod tempor incididunt</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;