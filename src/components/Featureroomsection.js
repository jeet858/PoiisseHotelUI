import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Slide } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';

import Slider from "react-slick";
import exclusivRoom1 from '../assets/img/addstatick/1582748391650686428AVK01887.jpg';
import exclusivRoom2 from '../assets/img/addstatick/AVK02018-HDR.jpg';
import exclusivRoom3 from '../assets/img/addstatick/AVK01929.jpg';
import deluxeRoom1 from '../assets/img/addstatick/AVK01955.jpg';
import deluxeRoom2 from '../assets/img/addstatick/AVK02018-HDR.jpg';
import deluxeRoom3 from '../assets/img/addstatick/AVK02149.jpg';
import sdeluxeRoom1 from '../assets/img/addstatick/AVK01557.jpg';
import sdeluxeRoom2 from '../assets/img/addstatick/AVK01690.jpg';
import sdeluxeRoom3 from '../assets/img/addstatick/AVK01833.jpg';
import Header2 from '../components/Header/Header2';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "transparent",right:0,left:"auto"  }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "transparent",left:0,right:"auto"}}
            onClick={onClick}
        />
    );
}

const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]

};
const Featureroomsection = (props) => {
                
    return (
        <React.Fragment>
            <section className="feature-room-section pt-60 pb-60">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-8 col-sm-7">
                            <div className="section-title">
                                <span className="title-tag">Room</span>
                                <h2>Featured Room</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-4 col-sm-5 d-none d-sm-block">
                            <div className="feature-room-arrow arrow-style text-right">
                            </div>
                        </div>
                    </div>
                    <div className="row room-gird-loop mt-40 feature-room-slider">
                        <div className="col-lg-4">
                            <div className="room-box">
                                <div className="room-img-wrap">
                                    <div id="demo1" className="carousel slide" data-ride="carousel">
                                        <Slider {...settings}>
                                            <div className="carousel-item  active ">
                                                <img src={exclusivRoom1} alt="" />
                                            </div>
                                            <div className="carousel-item ">
                                                <img src={exclusivRoom2} alt="" />
                                            </div>

                                            <div className="carousel-item ">
                                                <img src={exclusivRoom3} alt="" />
                                            </div>

                                        </Slider>
                                    </div>
                                </div>
                                <div className="room-desc">
                                    <ul className="icons">
                                        <li><i className="fal fa-bed" aria-hidden="true"></i></li>
                                        <li><i className="fal fa-wifi" aria-hidden="true"></i></li>
                                        <li><i className="fal fa-car" aria-hidden="true"></i></li>
                                        <li><i className="fal fa-coffee" aria-hidden="true"></i></li>
                                        <li><i className="fal fa-concierge-bell"></i></li>
                                        <li><i className="fal fa-compress-arrows-alt"></i></li>
                                        <li><i className="fal fa-swimmer"></i></li>
                                    </ul>
                                    <h4 className="title">
                                        <a href="#">Executive Room</a>
                                    </h4>
                                    <p>Executive Room</p>
                                    <span className="price">₹3300/Night</span>
                                </div>
                                <a href="https://booking.poiissehotel.com/rooms/executive" className="book-btn "> <i className="fa fa-check"></i> Booking Now</a>
                            </div>
                        </div>


                        <div className="col-lg-4">
                            <div className="room-box">
                                <div className="room-img-wrap">
                                    <div id="demo1" className="carousel slide" data-ride="carousel">
                                        <Slider {...settings}>
                                            <div className="carousel-item  active ">
                                                <img src={deluxeRoom1} alt="" />
                                            </div>
                                            <div className="carousel-item ">
                                                <img src={deluxeRoom2} alt="" />
                                            </div>

                                            <div className="carousel-item ">
                                                <img src={deluxeRoom3} alt="" />
                                            </div>

                                        </Slider>
                                    </div>
                                </div>
                                <div className="room-desc">
                                    <ul className="icons">
                                    <li><i className="fal fa-bed" aria-hidden="true"></i></li>
                                        <li><i className="fal fa-wifi" aria-hidden="true"></i></li>
                                        <li><i className="fal fa-car" aria-hidden="true"></i></li>
                                        <li><i className="fal fa-coffee" aria-hidden="true"></i></li>
                                        <li><i className="fal fa-concierge-bell"></i></li>
                                        <li><i className="fal fa-compress-arrows-alt"></i></li>
                                        <li><i className="fal fa-swimmer"></i></li>
                                    </ul>
                                    <h4 className="title">
                                        <a href="#">Deluxe Room</a>
                                    </h4>
                                    <p>Deluxe Room</p>
                                    <span className="price">₹3500/Night</span>
                                </div>
                                <a href="https://booking.poiissehotel.com/rooms/deluxe-room" className="book-btn "> <i className="fa fa-check"></i> Booking Now</a>
                            </div>
                        </div>


                        <div className="col-lg-4">
                            <div className="room-box">
                                <div className="room-img-wrap">
                                    <div id="demo1" className="carousel slide" data-ride="carousel">
                                        <Slider {...settings}>
                                            <div className="carousel-item  active ">
                                                <img src={sdeluxeRoom1} alt="" />
                                            </div>
                                            <div className="carousel-item ">
                                                <img src={sdeluxeRoom2} alt="" />
                                            </div>

                                            <div className="carousel-item ">
                                                <img src={sdeluxeRoom3} alt="" />
                                            </div>
                                        </Slider>
                                    </div>
                                </div>
                                <div className="room-desc">
                                    <ul className="icons">
                                    <li><i className="fal fa-bed" aria-hidden="true"></i></li>
                                        <li><i className="fal fa-wifi" aria-hidden="true"></i></li>
                                        <li><i className="fal fa-car" aria-hidden="true"></i></li>
                                        <li><i className="fal fa-coffee" aria-hidden="true"></i></li>
                                        <li><i className="fal fa-concierge-bell"></i></li>
                                        <li><i className="fal fa-compress-arrows-alt"></i></li>
                                        <li><i className="fal fa-swimmer"></i></li>
                                    </ul>
                                    <h4 className="title">
                                        <a href="#">Super Deluxe Room</a>
                                    </h4>
                                    <p>Super Deluxe Room</p>
                                    <span className="price">₹3800/Night</span>
                                </div>
                                <a href="https://booking.poiissehotel.com/rooms/super-delux" className="book-btn "> <i className="fa fa-check" aria-hidden="true"></i> Booking Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, {})(Featureroomsection);