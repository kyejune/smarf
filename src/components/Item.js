import React, {Component} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'


class Item extends Component {
    render( props ) {
        var settings = {
            dots: true,
            infinite: false,
            arrows: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (

            <div className="item">
                <h4 className="item__title">{ this.props.name }</h4>
                <Slider {...settings}>
                    <div className="item-info container">
                        <div className={`icon-weather iw--${ this.props.weather }`}></div>
                        <div className="temperature">{ this.props.temperature }</div>
                        <div>
                            <div className="icon-set"><span className="wind ic--s"/> <span className="ic-text">{ this.props.wind }</span>m/sec</div>
                            <div className="icon-set"><span className="humidity ic--s"/> <span className="ic-text">{ this.props.humidity }</span>%</div>
                        </div>
                    </div>

                    <div className="item-status">
                        <span className="status-title">예측생산량</span>
                        <span>_</span>
                        <span>톤</span>
                    </div>
                </Slider>
            </div>

        );
    }
}

export default Item;